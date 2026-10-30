const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const crypto=require('node:crypto');
const html=fs.readFileSync(require('node:path').join(__dirname,'../index.html'),'utf8');
const script=html.match(/<script>([\s\S]*?)<\/script>/)[1];
const source=script.slice(0,script.indexOf('const reducedMotion'))+script.slice(script.indexOf('// Only complete,'));
function release(version='0.13.5'){
 const tag='v'+version;
 return {tag_name:tag,draft:false,prerelease:false,published_at:'2026-10-30T10:00:00Z',body:'<img src=x onerror=alert(1)>',assets:[`Komofuu_${version}_x64-setup.exe`,`Komofuu_${version}_x64-setup.exe.sig`,'LEGAL.txt','latest.json'].map(name=>({name,state:'uploaded',size:1234,digest:'sha256:'+'a'.repeat(64),browser_download_url:`https://github.com/Komofuu/komofuu-releases/releases/download/${tag}/${name}`}))};
}
async function run(response){
 const nodes=new Map();
 const node=()=>({hidden:true,textContent:'',children:[],events:{},append(...a){this.children.push(...a)},replaceChildren(...a){this.children=a},addEventListener(name,fn){this.events[name]=fn}});
 const get=id=>{if(!nodes.has(id))nodes.set(id,node());return nodes.get(id)};
 const calls=[];
 const context=vm.createContext({URL,AbortController,Intl,Date,Number,String,Boolean,Error,setTimeout:()=>1,clearTimeout(){},document:{getElementById:get,createElement:node},navigator:{clipboard:{writeText:async()=>{}}},fetch:async(...args)=>{calls.push(args);if(response instanceof Error)throw response;return response}});
 vm.runInContext(source.replace(/loadRelease\(\);\s*$/,''),context);
 await vm.runInContext('loadRelease()',context);
 return {context,get,calls};
}
test('only a complete public release activates the installer and treats notes as plain text',async()=>{
 const r=release(),{get,calls}=await run({ok:true,status:200,json:async()=>r});
 assert.equal(get('hero-dl').href,r.assets[0].browser_download_url);
 assert.equal(get('release-copy').textContent,r.body);
 assert.equal(get('digest').textContent,'a'.repeat(64));
 assert.equal(get('release-notes').hidden,false);
 assert.equal(calls[0][0],'https://api.github.com/repos/Komofuu/komofuu-releases/releases/latest');
 assert.equal(calls[0][1].credentials,'omit');
});
test('drafts, prereleases, incomplete, duplicate and empty assets are never direct downloads',async()=>{
 const variants=[];
 for(const key of ['draft','prerelease']){const r=release();r[key]=true;variants.push(r)}
 let r=release();r.assets.pop();variants.push(r);
 r=release();r.assets.push(r.assets[0]);variants.push(r);
 r=release();r.assets[0].size=0;variants.push(r);
 r=release();r.tag_name='v0.13.6';variants.push(r);
 for(const value of variants){const {get}=await run({ok:true,status:200,json:async()=>value});assert.equal(get('hero-dl').href,undefined);}
});
test('lookalike hosts, other repositories, query strings and credentialed URLs are rejected',async()=>{
 const bad=[
 'https://github.com.evil.example/Komofuu/komofuu-releases/releases/download/v0.13.5/Komofuu_0.13.5_x64-setup.exe',
 'https://github.com/other/downloads/releases/download/v0.13.5/Komofuu_0.13.5_x64-setup.exe',
 'https://github.com/Komofuu/komofuu-releases/releases/download/v0.13.5/Komofuu_0.13.5_x64-setup.exe?redirect=elsewhere',
 'https://user:password@github.com/Komofuu/komofuu-releases/releases/download/v0.13.5/Komofuu_0.13.5_x64-setup.exe',
 'javascript:alert(1)'];
 for(const url of bad){const r=release();r.assets[0].browser_download_url=url;const {get}=await run({ok:true,status:200,json:async()=>r});assert.equal(get('hero-dl').href,undefined);}
});
test('no public release and API failures keep a clear manual-release fallback',async()=>{
 for(const response of [{ok:false,status:404},{ok:false,status:403},new Error('offline')]){
  const {get}=await run(response);assert.equal(get('hero-dl').href,undefined);
  assert.match(get('dl-status').textContent,/No complete official Windows installer|couldn’t check/);
 }
 assert.match(html,/id="rel-link" href="https:\/\/github.com\/Komofuu\/komofuu-releases\/releases"/);
});
test('CSP matches the exact script and no former/private repository links remain',()=>{
 const digest=crypto.createHash('sha256').update(script).digest('base64');
 assert.ok(html.includes("script-src 'sha256-"+digest+"'"));
 assert.doesNotMatch(html,/yoshsemail|github\.com\/Komofuu\/komofuu(?:["/]|$)|AIza|ghp_/);
 assert.doesNotMatch(source,/innerHTML|eval\(/);
});

test('dictionary guidance supports other compatible imports and describes the official release',()=>{
 const read=name=>fs.readFileSync(require('node:path').join(__dirname,'..',name),'utf8');
 const guide=read('DICTIONARIES.md');
 for(const url of ['https://jitendex.org/pages/downloads.html','https://github.com/yomidevs/jmdict-yomitan#jmnedict-for-yomitan','https://github.com/yomidevs/jmdict-yomitan#kanjidic-for-yomitan','https://github.com/Kuuuube/yomitan-dictionaries#bccwj-suw-luw-combined']){
  assert.ok(html.includes(url));assert.ok(guide.includes(url));
 }
 assert.match(guide,/other compatible Yomitan format-3 dictionaries/);
 assert.match(html,/Komofuu 0\.13\.5, the first official public release/);
 for(const file of ['README.md','GETTING-STARTED.md','DICTIONARIES.md','SUPPORT.md'])assert.doesNotMatch(read(file),/0\.13\.3/);
 assert.doesNotMatch(html,/0\.13\.3/);
 assert.match(read('PRIVACY.md'),/on by default unless you previously disabled it/);
 assert.match(read('GETTING-STARTED.md'),/No new recording attachment/);
});

test('earlier test builds cannot activate launch downloads but official launch and future versions can',async()=>{
 for(const version of ['0.11.2','0.12.99','0.13.3','0.13.4']){
  const {get}=await run({ok:true,status:200,json:async()=>release(version)});
  assert.equal(get('hero-dl').href,undefined);
  assert.equal(get('dl-list').children.length,0);
  assert.equal(get('release-notes').hidden,true);
  assert.match(get('dl-status').textContent,/No complete official Windows installer/);
 }
 for(const version of ['0.13.5','0.13.6','0.14.0','1.0.0']){
  const r=release(version),{get}=await run({ok:true,status:200,json:async()=>r});
  assert.equal(get('hero-dl').href,r.assets[0].browser_download_url);
 }
});



test('application and repository proprietary scope preserve earlier and third-party rights',()=>{
 const path=require('node:path'),read=name=>fs.readFileSync(path.join(__dirname,'..',name),'utf8');
 assert.match(read('EULA.md'),/Komofuu Proprietary Freeware License/);
 assert.match(read('EULA.md'),/\*\*Publisher:\*\* .+, an individual publishing under the project name Komofuu/);
 assert.match(read('LICENSE.md'),/^# Komofuu Proprietary Freeware/);
 assert.match(read('LICENSE.md'),/does not revoke, narrow or override permissions/);
 assert.match(read('LICENSE.md'),/CC BY-SA 3\.0/);
 assert.match(read('docs/legacy/MIT-LICENSE-before-proprietary-transition.txt'),/^MIT License/);
 assert.match(read('LICENSING.md'),/Website and documentation: proprietary distribution/);
 assert.doesNotMatch(html,/retain their separate MIT licence/);
 assert.match(html,/EULA.md/);
 assert.doesNotMatch(html,/being prepared|in preparation|prepared for future|upcoming release/i);
 for(const file of ['README.md','GETTING-STARTED.md','SUPPORT.md','LICENSING.md','PRIVACY.md','THIRD_PARTY_NOTICES.md'])assert.doesNotMatch(read(file),/being prepared|in preparation|prepared proprietary|prepared for future|upcoming release/i);
});

# Public early-release checklist

Updated 29 October 2026 for the upcoming 0.13.3. This is a normal public release
labelled **Early release**, not a GitHub prerelease/beta channel. Original application code and assets
are offered under MIT, subject to the scope in LICENSING.md. This checklist does
not authorize publishing or certify legal/security clearance.

## Already established

- Public downloads/support repository: Komofuu/komofuu-releases; app source private.
- Public 0.13.1 installer exists. Older statements that no public release/updater
  exists are superseded. The latest source is not automatically the latest installer.
- Bundled PaddleOCR runtime/models, no separate Python requirement for users.
- Signed updater workflow, version/signature verification and draft-only staging.
  Owner reports a successful earlier update and uninstall test; retain that evidence.
- User-imported multiple Yomitan/EDICT2 dictionaries; current lookup is local only.
- No online dictionary/recording adapter. Official project download pages open
  only on explicit user request; nothing is automatically downloaded/imported.
- Consented manual Lens remains optional; no provider authorization is claimed.
- Support templates, privacy/data-flow documentation, credits and local notices.
- Owner reports AI-assisted artwork/animations; provenance recorded.

## Not complete — owner/external decisions and evidence

- [x] MIT selected for original code/assets; standard license and scope are included
  in the source, public repository, app About screen and next installer legal resources.
  This does not assert exclusive copyright or clear third-party obligations.
- [x] Publisher display name selected by owner: **Komofuu**.
- [x] Owner supplied privacy contact: komofuu.contact@gmail.com; request guidance
  is included in the privacy notice. GitHub private vulnerability reporting was
  verified **enabled** through the public API on 29 October 2026.
- [x] Pre-build GEOS 3.14.1 source compilation and compatible DLL replacement
  passed in Windows CI. Exact wheel/DLL provenance and hashed source/build
  archives are recorded. Retain and publish the final matching source asset.
- [x] The pre-build Windows check generated the covered source archive: exact
  MPL Cargo archives, certifi/tqdm sources and pinned native source/build trees.
  Publish and retain THIRD-PARTY-SOURCES.zip beside the matching final installer.
- [ ] Microsoft runtime publisher eligibility and exact REDIST files.
- [ ] Review all inventory warnings and bundled model/native NOTICE requirements
  for the final Windows build. The 0.13.1 workflow collected 588 records/46 review
  items; that historic count is not the next build's clearance or expected count.
- [x] Retained unofficial Lens terms uncertainty is documented in LEGAL-AUDIT.md
  separately from consent/outage acceptance. This records the decision; it does
  not claim provider approval or legal clearance.
- [ ] Review older distributions separately: removing the former online dictionary
  service does not change terms/data already distributed by 0.13.1 or earlier.

## Final installer validation — record version, machine and actual result

- [ ] Fresh Windows x64 install as a normal user; WebView2 absent/present; Unicode
  profile path. Declare only Windows versions actually validated.
- [ ] Launch offline; clear guidance with no definition dictionary; open official
  pages, download Yomitan ZIP manually, import/enable several and test definitions,
  names, kanji and frequency. Confirm disable/reorder/remove/update behavior.
- [ ] Verify no definition/recording request even with old online preferences.
- [ ] CPU OCR; supported GPU/DirectML devices; horizontal/vertical/mixed manga,
  small/big text and scaling. Record recognition limitations rather than perfect claims.
- [ ] DPI/multiple displays, edge popup placement, keyboard navigation/reduced motion,
  long controls and narrow windows. Include remaining custom-dropdown accessibility
  and viewport sizing limitations from the source UI design guide.
- [ ] Real AnkiConnect: connect/disconnect, starter/existing note types, mappings,
  duplicates, screenshots on/off, interrupted requests and ambiguous outcomes.
  Confirm no new recording attachment and existing cards/media remain intact.
- [ ] Before publication, test clean install and installer upgrade over 0.13.1.
  After publication, test updating current public 0.13.1 through the updater;
  preserve saved words, dictionaries, preferences and disabled online permissions.
- [ ] Cancelled and complete uninstall, data-removal checkbox, locked files and
  preservation of exports/Anki/other accounts/shared Windows components.
- [ ] Main-PC idle/game/scan resource measurements and repeated-scan/storage growth;
  see the maintainer’s Windows test plan. Compile/tests do not establish these measurements.

## Build, publish and maintain

- [ ] Run unit/browser/Python/native checks and current dependency/security checks.
- [ ] Review exact installer, matching LEGAL.txt, THIRD-PARTY-SOURCES.zip,
  source/notices and SHA-256 digests. Retain the matching source asset, not only
  expiring CI artifacts.
- [ ] Verify updater signature, public key, manifest version and official download URL.
- [ ] Make a fresh signed draft-update build from intended main commit; never rerun
  an old workflow expecting new source or overwrite an already published version.
- [ ] Back up updater key/password offline; verify token scope, account protection
  and who can publish. Do not expose secrets in websites, logs, source or test assets.
- [ ] Windows publisher signing is recommended; separate from existing updater
  signatures. Do not advise users to disable antivirus to bypass a detection.
- [ ] Website/docs match the version actually offered; until 0.13.3 is published,
  show the upcoming-behavior notice and link each installer's matching LEGAL.txt.
- [ ] Publish a regular release titled **Komofuu <version> — Early Release**, leave
  prerelease unchecked and set latest when appropriate. Current feed/site exclude
  prereleases. Publishing is a separate owner-authorized step after readiness review.
- [ ] Recheck live mobile/desktop page and direct downloads. Future releases repeat
  notice/security/upgrade checks and document known issues/support scope.

No evidence is marked complete merely because a document or checkbox exists.
No new company, paid hosting, custom domain or compulsory beta label is assumed.

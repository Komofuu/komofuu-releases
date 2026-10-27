# Publisher setup — repository and website

The public downloads repository contains no private app source, signing keys or
release token. Keep those in the private development repository and protected
GitHub Secrets. Do not copy development archives into this repository.

## Enable the prepared website

After merging the public-page changes:

1. Open this repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Choose **main** and **/ (root)**, then Save.
4. Wait for GitHub's Pages deployment to succeed. Its planned project-site URL is
   `https://komofuu.github.io/komofuu-releases/`; use the actual URL reported by Pages.
5. Add that verified URL to the repository's **About → Website** field, and check
   the desktop/mobile page and download links once more.

The root `index.html` is the website. `.nojekyll` makes Pages serve the static
files directly. The website keeps the supplied mascot/design and uses no framework,
external fonts, analytics or account tokens. No separate hosting purchase is needed
for this GitHub Pages setup. Enabling Pages is a repository setting; adding the
files alone does not enable hosting.

## Downloads and version display

The website requests GitHub's public `/releases/latest` endpoint. It does not show
drafts or prereleases. A usable release must contain a nonempty matching installer,
`.exe.sig`, `LEGAL.txt` and `latest.json`; direct links are restricted to this repo's
exact HTTPS release paths. GitHub API failure/rate limiting leaves a visible manual
releases link. With no published build, the page clearly says one is being prepared.
No version number or installer size is hardcoded into the download display.

Only the four verified build assets go in a release. Notes go in the description;
GitHub's generated source ZIP/TAR are not installer files. Do not publish the
incomplete 0.11.0 draft. Run a fresh signed `draft-update` build from `main` in the
private source repository for a new version. Do not rerun an old workflow to pick
up new source. Use `Komofuu/komofuu-releases` as the download repository.

Before publishing a build, confirm signature verification and all workflow tests
passed, review the actual installer/notices, and record the Windows checks performed.
Publishing a full release marked latest makes the assets public and eligible for
configured updater clients. Drafts are invisible to public visitors and the updater.

## Outstanding publication decisions

- Finalize original app/artwork terms, publisher identity/private contact and the
  service/dependency permission items recorded in `LICENSING.md`. Do not mark these
  complete based only on the website or a successful build.
- Finish the real 0.11.1 → 0.11.2 update test: export a word backup, update through
  Settings, check restart/version and confirm saved words/settings/dictionary remain.
  Do not manually install 0.11.2 first when testing that updater path.
- Enable **Private vulnerability reporting** in the repository's Security settings
  if available, and provide a private support/privacy route before inviting reports.
  Update SECURITY.md and PRIVACY.md with the verified contact details.

Website copy currently identifies the app as an early preview. Keep it that way
until broader Windows/display/OCR validation supports stronger compatibility claims.
The selected 12–96 pixel synthetic OCR checks do not guarantee every manga font.
No claim of Google authorization, perfect recognition or malware certification is made.

## Keeping this page current

When app behavior changes, update Getting started, Privacy and Credits together.
Publishers should check the full legal inventory supplied by the matching Windows
build. Never add an API token to the website to expose draft/private releases.
If you edit inline website JavaScript, regenerate its SHA-256 CSP hash in the head;
otherwise browsers will correctly refuse to run the changed script. Run `python scripts/update-csp.py`, then `node --test tests/site.test.cjs`.
The public-page workflow runs those checks without installation or secrets.

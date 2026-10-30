# Publishing Komofuu early releases

The source stays private; this public repository hosts downloads, website and support.
Original material follows the proprietary distribution policy, preserving earlier MIT grants and third-party rights; see LICENSING.md. This document is preparation, not publication
authorization. See [launch checklist](LAUNCH-CHECKLIST.md) for unresolved obligations.

## Established setup

- GitHub Pages is configured from main/root at https://komofuu.github.io/komofuu-releases/ .
  The repository About field points to that URL. Recheck the actual deployed site
  on desktop/mobile; configuration alone is not a render/download verification.
- Public 0.13.3 exists. The owner reports successful earlier update/uninstall tests.
  Do not retain old tasks saying the first repository or updater still needs creating.
- The workflow builds verified installers and stages signed updates as drafts;
  it never publishes automatically. Run a fresh build from intended main, not a
  rerun of an older SHA, and never overwrite a published version.

## Next regular release

1. Complete the applicable launch checklist, review current notices/source delivery
   and record installer, real Anki, upgrade, uninstall and resource-usage tests.
2. Prepare the fresh signed draft for **0.13.4** (or the actual next version).
   Confirm matching nonempty .exe, .exe.sig, LEGAL.txt and latest.json, signed version,
   checksum and official repository download paths. Keep audit inventories with
   release evidence; ordinary CI artifacts expire after 14 days.
3. Review notes and known limitations. Title **Komofuu <version> — Early Release**.
   Leave GitHub's prerelease checkbox unchecked; set latest when appropriate.
   This is a normal public release with an early-maturity description.
4. Publish only after the separate owner decision. Verify updater discovery and
   test a current public 0.13.3 installation upgrading without data/permission loss.
5. Confirm site version/size/checksum/download links and all guidance match the
   installer actually served. Keep older-version behavior notes while old downloads exist.

## Website behavior

The root index.html has no external fonts, analytics or account tokens. It requests
GitHub's public releases/latest endpoint and accepts only complete regular releases
with official exact-path assets. Drafts/prereleases are excluded. API failure/rate
limiting retains a visible manual releases link. The Source code ZIP is not the app.
The supplied page displays GitHub's installer SHA-256 when available.

If changing inline JavaScript, regenerate the CSP hash with
`python scripts/update-csp.py`; run `node --test tests/site.test.cjs` afterward.
Do not add a token to reveal draft/private releases or link a private app repository.

## Remaining owner inputs

- Original material: proprietary policy selected for new distributions, preserving
  earlier MIT grants and independent rights. Keep the public repository scope notice,
  application EULA and required third-party notices with their correct distributions.
  Public LICENSE.md describes repository scope; the app repository LICENSE.md is
  its canonical EULA. Do not substitute one for the other in installer generation.
- Publisher Luca Andre Ruenholl and privacy/security contact are supplied.
  Preserve those details; assess any additional legally required disclosures.
- GEOS rebuilding, source delivery and Microsoft provenance have recorded
  pre-build evidence. Review the final build's inventory and distribution conditions;
  do not treat those evidence records as a blanket clearance.
- Retained Lens service-terms uncertainty; no provider approval is claimed.
- Signing-key/password backups, token scope, account protection and who can publish.
- Final Windows measurements/test records and live page verification.

Publisher signing for Windows is recommended, separate from updater signatures.
Never tell users to disable antivirus or assume every warning is a false positive.


## Documentation reconciliation

The source-delivery, runtime-provenance, installer-acceptance and private-contact
updates from the older prebuild-source-delivery PR are incorporated into the
current proprietary-scope documents. Do not merge the old PR unchanged: it uses
outdated MIT wording. After this update is merged, close that superseded PR.

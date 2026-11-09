# Publishing Komofuu early releases

The source stays private; this public repository hosts downloads, website and support.
Original material follows the proprietary distribution policy, preserving earlier MIT grants and third-party rights; see LICENSING.md. This document is preparation, not publication
authorization. See [launch checklist](LAUNCH-CHECKLIST.md) for unresolved obligations.

## Established setup

- GitHub Pages is configured from main/root at https://komofuu.github.io/komofuu-releases/ .
  The repository About field points to that URL. Recheck the actual deployed site
  on desktop/mobile; configuration alone is not a render/download verification.
- Prepare **0.13.8 as the first official public release**. Earlier builds were
  testing distributions, not the official launch. The owner reports successful
  earlier update/uninstall tests; repository and updater setup already exist.
- The workflow builds verified installers and stages signed updates as drafts;
  it never publishes automatically. Run a fresh build from intended main, not a
  rerun of an older SHA, and never overwrite a published version.

## First official public release

1. Complete the applicable launch checklist, review current notices/source delivery
   and record installer, real Anki, upgrade, uninstall and resource-usage tests.
2. Prepare the fresh signed draft for **0.13.8** (or the actual next version).
   Confirm matching nonempty .exe, .exe.sig, LEGAL.txt and latest.json, signed version,
   checksum and official repository download paths. Keep audit inventories with
   release evidence; ordinary CI artifacts expire after 14 days.
3. Review notes and known limitations. Title **Komofuu <version> — Early Release**.
   Leave GitHub's prerelease checkbox unchecked; set latest when appropriate.
   This is a normal public release with an early-maturity description.
4. Publish only after the separate owner decision. Verify updater discovery and
   test upgrading an earlier 0.13.3 test installation without data/permission loss.
5. Confirm site version/size/checksum/download links and all guidance match the
   installer actually served. Remove earlier test builds from the public download
   offering before launch, while retaining historical licence notices and evidence.
   Never replace a previously distributed build's files or retroactively change its terms.

## Website behavior

The root index.html has no external fonts, analytics or account tokens. It requests
GitHub's public releases/latest endpoint and accepts only complete regular releases
with official exact-path assets. Drafts/prereleases are excluded. API failure/rate
limiting retains a visible manual releases link. The Source code ZIP is not the app.
The website accepts official releases starting at 0.13.8; earlier test builds
cannot activate its installer links. It displays GitHub's installer SHA-256 when available.

If changing inline JavaScript, regenerate the CSP hash with
`python scripts/update-csp.py`; run `node --test tests/site.test.cjs` afterward.
Do not add a token to reveal draft/private releases or link a private app repository.

## Remaining owner inputs

- Original material: proprietary policy selected for new distributions, preserving
  earlier MIT grants and independent rights. Keep the public repository scope notice,
  application EULA and required third-party notices with their correct distributions.
  Public LICENSE.md describes repository scope; the app repository LICENSE.md is
  its canonical EULA. Do not substitute one for the other in installer generation.
- Publisher identification is supplied in [the dedicated disclosure](https://komofuu.github.io/komofuu-releases/legal.html#publisher),
  together with the privacy/security contact.
  Preserve those details. The present noncommercial launch has been assessed;
  reassess provider/address disclosures before adding funding or business activity.
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


## 0.14.8 document synchronization

The 0.14.8 candidate uses EULA 1.1 (9 November 2026) and the matching privacy
notice. legal.html identifies the publisher and contains the same privacy
information; noindex discourages search indexing but does not make it private.
Only the existing site's legal links and version documentation are updated;
the website redesign remains paused.

Merge these documents together with the corresponding application candidate.
Before publishing v0.14.8, verify the public legal link, build a fresh installer,
collect fresh locked dependency notices, and complete Windows single-instance
and installer acceptance/update/data-retention tests. Keep the original updater
key. Stage the installer, matching .sig, latest.json, LEGAL.txt (including the
publisher disclosure) and THIRD-PARTY-SOURCES.zip from that exact build.
Do not replace an older release's assets or publish an update manifest pointing
to an unbuilt version. A documentation PR does not publish a binary release.

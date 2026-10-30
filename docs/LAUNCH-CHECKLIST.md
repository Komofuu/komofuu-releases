# Public early-release checklist

Updated 30 October 2026 for the prepared licence transition. This is a normal public release
labelled **Early release**, not a GitHub prerelease/beta channel. Future application copies expressly supplied with the completed EULA use
proprietary freeware terms, subject to LICENSING.md. Earlier MIT grants remain
intact. The checklist below also records prior 0.13.3 release preparation. This checklist does
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

- [x] Proprietary distribution policy selected for the application and public
  repository, subject to their respective scope notices and version applicability.
  Earlier MIT grants are preserved. This does not assert exclusive copyright or
  clear third-party obligations.
- [ ] Publisher identity and verified private privacy/security contact; test GitHub
  private reporting availability. Do not invent contact details or publish personal
  details without the owner's choice.
- [ ] GEOS/LGPL exact corresponding source/build and replacement compliance.
- [ ] MPL source locations/delivery for covered components actually shipped.
- [ ] Microsoft runtime publisher eligibility and exact REDIST files.
- [ ] Review all inventory warnings and bundled model/native NOTICE requirements
  for the final Windows build. The 0.13.1 workflow collected 588 records/46 review
  items; that historic count is not the next build's clearance or expected count.
- [ ] Document the retained unofficial Lens terms uncertainty separately from
  user upload consent and outage acceptance. Optional/manual does not prove approval.
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
- [ ] Update current public 0.13.1 to final new installer through the updater;
  preserve saved words, dictionaries, preferences and disabled online permissions.
- [ ] Cancelled and complete uninstall, data-removal checkbox, locked files and
  preservation of exports/Anki/other accounts/shared Windows components.
- [ ] Main-PC idle/game/scan resource measurements and repeated-scan/storage growth;
  see the maintainer’s Windows test plan. Compile/tests do not establish these measurements.

## Build, publish and maintain

- [ ] Run unit/browser/Python/native checks and current dependency/security checks.
- [ ] Review exact installer, matching LEGAL.txt, source/notices and SHA-256 digest.
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


## Prepared EULA transition (30 October 2026)

Future application distributions are prepared for proprietary freeware terms,
with earlier MIT grants and third-party rights preserved. The earlier MIT status
above describes the historical release preparation, not a restriction on the
publisher offering future copies under different terms.

- [x] Identify publisher Luca Andre Ruenholl in the prepared EULA and copy the
  canonical LICENSE.md from application PR #20 to public EULA.md. Installer
  resources were regenerated in that branch; final Windows tests remain below.
- [ ] Determine required publisher/address disclosures, verify third-party rights,
  and test changed-term acceptance/cancellation before publishing a new installer.
- [x] Align website/documentation proprietary scope and preserve demo CC BY-SA attribution; preserve
  prior installers and their matching LEGAL.txt. Do not imply that this draft is
  already the licence of a published download.



## Public repository licence alignment (30 October 2026)

The root licence now states the proprietary distribution policy instead of a
blanket MIT grant. README, website FAQ, publishing guide and credits agree.
The historical MIT notice remains available for copies and portions it covers.
The application EULA is unchanged; this repository update does not publish or
relicense an existing installer. Third-party and demo licences remain independent.

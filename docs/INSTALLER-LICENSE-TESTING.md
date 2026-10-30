# Installer licence verification

The installer presents the Komofuu Proprietary Freeware EULA and complete
Microsoft runtime terms. The checkbox accepts each within its respective scope.
Prior MIT grants and other components' licence rights remain unaffected. The
previous MIT notice is retained separately. This is implementation/test guidance,
not a legal clearance certificate. Keep the completed LICENSE.md and generated legal files synchronized
before an installer build; the release check rejects an unfinished publisher name.

The installed legal folder retains INSTALLER-LICENSES.rtf and separate Microsoft
texts; complete dependency notices are accessible through About. Build checks pin
the Microsoft source texts, the displayed document, its revision and the Tauri
NSIS template. Rebuild generated files with `node scripts/installer-terms.mjs --write`
after reviewing a deliberate licence or template change; the default command
checks them without editing files. A new Tauri CLI version needs template review.

## Automated pre-build checks

The Windows CI fixture uses the actual installer terms macros with NSIS. It tests
fresh acceptance/refusal, legacy passive update acceptance/refusal, matching and
changed revisions, silent refusal without prior acceptance and silent installation
with a matching receipt. Each test preserves a saved-data sentinel. The fixture
is not the complete Komofuu installer; it writes only into its temporary test
folder and a uniquely named current-user registry test key, then cleans up.

## Final draft checks on Windows

Record the exact draft version, commit and machine. Use a disposable Windows
account or machine snapshot for acceptance history tests.

1. Start a fresh installation. Check the scope paragraph, readable complete terms,
   unchecked acceptance checkbox and disabled continuation until acceptance.
   Cancel here: no Komofuu files or acceptance receipt should be installed.
2. Accept and finish. Launch Komofuu, open About/dependency notices and inspect the
   installed legal folder. Verify the complete Microsoft terms remain available.
3. Start from an earlier 0.13.3 test installation, with backed-up saved words, dictionaries and preferences.
   Use a controlled update feed or, before publication, launch the new installer
   using `/UPDATE /P` against that existing installation. Ordinary draft releases
   are not discoverable through the public latest feed.
4. With no matching receipt, confirm the licence page is visible despite `/P`.
   Cancel at the terms page: the old executable, version and user data must remain
   unchanged and launchable. Then repeat, accept and verify upgrade/data retention.
5. Repeat with an unchanged receipt: passive updates may skip repeated acceptance.
   Use a deliberate terms revision change in a separate test build to confirm that
   changed terms require review again. Do not overwrite an already published version.
6. Run `/S` without prior acceptance in a disposable account: it must return a
   failure before replacing the app. With a matching receipt, silent installation
   may proceed. Silent mode does not imply acceptance of new terms.
7. Complete a normal uninstall and verify its uninstall registry entry, including
   KomofuuThirdPartyTerms, is removed. User-data deletion remains the existing
   separate choice; updates preserve data.

Cancelling the terms page preserves the old installation. This does not promise
rollback after installation has already begun or after an explicitly requested
manual uninstall. Installer cancellation can leave the old app closed after an
updater initiated shutdown; the retained app should remain manually launchable.

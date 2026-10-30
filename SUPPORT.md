# Help and feedback

Start with [Getting started](GETTING-STARTED.md). For help, bugs or suggestions,
[open an issue](https://github.com/Komofuu/komofuu-releases/issues/new/choose).
Support is community/project feedback; no response-time guarantee is offered.

Include the app version, Windows version, steps to reproduce and expected/actual
behavior. For OCR, add the engine, CPU/GPU choice, scan area, layout and display
scaling. A small screenshot can help; redact names, notifications, personal text
and other private information. Do not attach complete copyrighted chapters or
private captures when a small, permitted crop illustrates the problem.

Never post signing keys, release tokens, passwords, API credentials or unredacted
clipboard history. For vulnerabilities, see [Security reporting](SECURITY.md).

## Common questions

- **Only Source code appears:** that archive is not the app. Look for the `.exe`
  under a published release's Assets. A release without an installer is incomplete.
- **No installer appears:** check the official releases page for available Windows
  downloads. The website accepts only complete regular releases; draft releases
  and prereleases are excluded. If release information cannot be loaded, use the
  releases-page link or try again later.
- **OCR enabled but nothing happens:** the pink border means ready. Press your
  configured scan shortcut; enabling OCR does not start a scan.
- **Lens permission error:** enable its separate upload permission only if you
  want the captured area sent to Google. Otherwise select local PaddleOCR.
- **Manga words are missing or displaced:** try a smaller area, zoom, Automatic
  layout or Vertical Japanese. Report your version, scaling and engine. Recognition
  can still fail on tiny readings, art and decorative fonts.
- **GPU fails:** choose CPU in OCR settings. DirectML availability depends on hardware.
- **No dictionary result offline:** download a Yomitan definition dictionary from the
  linked publisher pages, then import/enable it in Settings → Dictionaries. The OCR runtime is bundled; dictionary
  data is a separate import.
- **Update check fails:** check your connection and public release availability.
  A build without updater configuration needs a manual installer upgrade. Back up
  words first; do not uninstall/delete app data as an update troubleshooting step.
- **Browser/Windows warning:** early-release installers are not Windows publisher-signed.
  Check the official release and checksum. Do not disable protection or assume a
  warning is a false positive. Report the exact detection without running the file
  if you cannot establish its source.


## Version-specific behavior

These instructions describe 0.13.5, the first official public release, and later
versions. Definitions come from your imported local dictionaries. For missing
definitions, check that a definition dictionary is enabled (frequency alone is
insufficient). For Listen errors, install a Japanese Windows voice. New Anki cards
receive no recording attachment; existing notes/media are kept.

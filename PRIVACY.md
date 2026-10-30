# Komofuu privacy and data flows

Updated 30 October 2026 for the prepared 0.13.4 release. Older installers
can behave differently; consult their matching LEGAL.txt.

Publisher: **Luca Andre Ruenholl**, an individual publishing as **Komofuu**,
operating from Romania.
Privacy contact: [komofuu.contact@gmail.com](mailto:komofuu.contact@gmail.com).

## Privacy questions and requests

Email the project contact above for privacy questions or requests concerning
information you have shared with Komofuu. Describe your request and include only
the information needed to explain it. This address is supplied by the publisher;
requests are handled as required by applicable law. No additional voluntary
response-time guarantee is offered.

App data stored only on your device is managed through the controls described
below; the project cannot remotely access or delete it. For security vulnerabilities,
use the private reporting route in SECURITY.md, or the project email as a fallback.

## Definitions, clipboard and pronunciation

Definitions use only dictionaries you download and import. There is no online
dictionary fallback or online recording service. No dictionary data is included
with the installer. Imported Yomitan ZIPs and EDICT2 files are indexed locally in
SQLite, with their titles, revisions, attribution, selections and order. Import
does not contact dictionary URLs or upload the file. Download-page buttons open
predefined project pages in your default browser only when pressed. Those sites
receive normal browser/connection information; downloads remain your choice.

Automatic clipboard lookup is on by default unless you previously disabled it.
While enabled, Komofuu reads the current clipboard after a Windows change
notification, filters for Japanese text up to 200 characters and performs local
dictionary lookup. It keeps no clipboard history. Manual lookup reads the
clipboard when requested. Saving a word can retain its sentence. Native-text
lookup reads accessible text under the pointer on request and attempts to skip
password controls. No synthetic Copy, keyboard recording or game injection is used.

Listen and Read aloud use an installed Japanese Windows speech voice. Komofuu
does not download recordings, implement a cloud speech API or record synthesized
speech into Anki. Windows voices and WebView2 are governed by their own platform
settings and terms. Old recording URLs/preferences are not used. Existing saved
vocabulary and Anki media are not deleted; their original data rights still apply.

## Local storage, OCR and companion behavior

The installer records the accepted application EULA and bundled-component terms
revision locally in
the current Windows user’s uninstall registry entry. This record is not uploaded;
normal uninstall removes that entry. New or changed terms require another review.

Configured global mouse shortcuts observe only mouse buttons and the current
Ctrl/Alt/Shift modifier state. They do not record typed text, keep an input history
or upload input events. Keyboard shortcuts use Windows shortcut registration.

No Komofuu account, advertising, analytics, telemetry or developer-operated upload
server is implemented. Preferences, saved words, dictionary indexes and WebView
notes and profile data are stored in this Windows account's application profile. They are
not an encrypted vault. Someone with access to that account may read them.

Notes keep their text, title, transparency, pin state and window position in a
bounded local notes.json file in the app-data folder. They are not uploaded or
sent to Anki, OCR or other services. Closing a note keeps it in the Notes list;
Delete note removes it from active storage. Updates preserve notes and the
uninstaller’s app-data deletion includes them. Deletion is not secure erasure.

PaddleOCR processes requested captures locally. The OCR border indicates readiness;
scanning normally starts only on your shortcut or Scan screen now. Continuous
local scanning is optional, off by default and not recommended for ordinary use.
PaddleOCR/native-text temporary jobs use a leased process-specific app-data
session. Normal exit cleans the session; startup removes abandoned sessions
without deleting another active instance's files. Crashes, locked files or deletion
errors can delay cleanup. Worker diagnostics retain only a 16 KiB tail in memory.
No secure-erasure or forensic-removal guarantee is made.

The latest original OCR scan and bounded dictionary results are cached in memory.
Stopping OCR clears the original-scan cache. Native Lens encodes its image in
memory rather than starting the Python OCR worker or writing a Lens image file.
Cursor position, Windows inactivity, companion position and island state support
local animation. Optional music reactions read scalar Windows output levels;
they use no microphone, recording or audio upload and pause in island/Gaming mode.

## Optional Google Lens

Only choosing Lens and granting its separate upload permission allows requested
scans to send the captured area to Google. Full-screen scans include everything
visible on that monitor; choose a smaller area to share less. Lens scans are manual:
no background uploads, silent retries or online fallback from PaddleOCR.
No Google account/browser cookies are supplied by this adapter.

This is an unofficial integration. It can stop working. Upload consent is a user
control, not proof of Google's endorsement or service authorization. Google receives
the capture and normal connection information including IP address. Komofuu cannot
promise Google-side retention, deletion or regional processing. Data goes directly
to Google without a Komofuu proxy.

Provider information: https://policies.google.com/privacy and
https://policies.google.com/terms . No processor agreement or hosting guarantee
is claimed here.

## Anki and updates

Anki integration is enabled explicitly. Connecting and mining communicate only
with AnkiConnect at http://127.0.0.1:8765 on your computer. An optional API key is
kept in native memory for the session, not stored in preferences. Card fields can
contain the word, reading, meaning, source sentence, dictionary metadata and tags.
OCR screenshots are independently optional, cropped from the original scan rather
than a new capture, and stored in Anki. New cards receive no recording attachments;
the legacy Audio field/marker remains empty for note-type compatibility.

Anki may upload cards/images through its own synchronization settings. Disabling
integration or uninstalling Komofuu does not delete Anki cards or media. Mining
failures can leave unused media when an outcome is uncertain; Komofuu does not run
a collection-wide media deletion. See Anki's Tools → Check Media.

Configured release builds check GitHub for updates on request. Startup checks are
optional and off by default; download and installation each need your action.
GitHub receives normal request/IP information, not dictionary queries, clipboard
text, saved words or screenshots. Update signatures authenticate packages; they
do not certify the absence of bugs. Builds without a configured feed/key make no
update requests. GitHub hosting policy:
https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement

## Website, controls and deletion

The supplied website has no app analytics, advertisements, external fonts or
cookies set by its code. It requests public GitHub release metadata. Hosting,
downloads and project links still involve the respective hosts' normal logging.
Public GitHub issues and their attachments are visible to others. Do not post
private captures, secrets, personal clipboard contents or vulnerability details.

Disable automatic clipboard lookup to stop automatic clipboard reads. Leave Lens
permission off and use PaddleOCR to keep OCR local. Delete saved entries, or export
a backup under Saved words. Enable, disable, reorder and remove dictionaries under
Settings → Dictionaries. To update one, remove its old revision and import a new
download. Removal preserves the original ZIP and saved words; SQLite compaction
reclaims space when possible and reports incomplete compaction.

In an installed release, the confirmed Uninstall and delete app data action opens
the Windows uninstaller with profile deletion selected. Normal Windows uninstall
offers a data-removal choice. Updates keep app data. Exports, downloaded ZIPs and
installers, Anki cards/media, other Windows accounts' data and shared Windows
components are outside Komofuu's full-data removal. Locked files can require later
cleanup and are reported. This is deletion, not secure erasure. A cancelled Windows
uninstall keeps the app/data. Verify this behavior on the final installer.

# Komofuu privacy and data flows

Updated 9 November 2026 for Komofuu 0.14.8. Older installers
can behave differently; consult their matching LEGAL.txt.

Publisher and support-data controller: the individual publishing as **Komofuu**,
identified in [Publisher and privacy information](https://komofuu.github.io/komofuu-releases/legal.html#publisher).
Installed copies also include the offline PUBLISHER.md disclosure.
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

## Support correspondence and reports

For messages and reports sent to the project, the publisher identified in the disclosure linked above acts
as controller. This can include your email address or GitHub username, message,
app/device details and attachments you choose to provide. It does not give the
publisher access to app data kept only on your device.

The purpose is to answer requests, investigate bugs and security reports, and
protect the project and users. The legal basis is legitimate interests in providing
support and maintaining security (GDPR Article 6(1)(f)); responding to statutory
requests also relies on legal obligations where applicable (Article 6(1)(c)).
Providing an ordinary support message is optional; without enough information
the project may be unable to investigate it. There is no automated decision-making
or profiling using support correspondence.

Email passes through Google, which hosts the project Gmail inbox. GitHub handles
issues and private vulnerability reports; public issues and attachments are visible
to others. Providers can process information internationally. See Google's privacy
policy and transfer frameworks (https://policies.google.com/privacy/frameworks)
and GitHub's privacy statement linked below for their arrangements. No exclusive
EU storage or separate signed processor agreement is claimed.

Correspondence is retained only as needed to handle the request, follow-up,
security investigation and any applicable legal obligations or claims. Retention
depends on the issue's status, sensitivity and continuing need; unnecessary private
attachments should be removed rather than retained as general project history.

Contact the privacy email above to exercise applicable rights of access,
rectification, erasure, restriction, portability or objection. These rights have
legal conditions and exceptions. You may complain to Romania's ANSPDCP
(https://www.dataprotection.ro/) or another competent EU supervisory authority.

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

PaddleOCR and optional ScreenAI process requested captures locally. Scan status and controls indicate
readiness; the optional OCR border is a visual guide. Scanning normally starts
only on your shortcut, Scan now, or releasing an explicitly drawn crop. Continuous
local scanning is optional, off by default and not recommended for ordinary use.
Local OCR/native-text temporary jobs use a leased process-specific app-data
session. Normal exit cleans the session; startup removes abandoned sessions
without deleting another active process's files. Crashes, locked files or deletion
errors can delay cleanup. Worker diagnostics retain only a 16 KiB tail in memory.
No secure-erasure or forensic-removal guarantee is made.

ScreenAI is an optional Google component. Choosing Set up ScreenAI downloads a pinned
component from dl.google.com (with permitted Google CDN redirects), verifies it and
runs a synthetic Japanese recognition test. This download exposes ordinary connection
information such as your IP address to the download provider, but does not capture or
upload your screen. Choosing the engine or Check engine does not download it. Its
models and complete third-party notices stay in local Komofuu app data. Recognition
runs in the isolated OCR worker with no image upload; models are released after the
worker's existing idle timeout, OCR stop, or engine switch. App-data deletion during
uninstall includes this optional component. Its own third-party licences apply.

The latest original OCR scan and bounded dictionary results are cached in memory.
Stopping OCR clears the original-scan cache. Native Lens encodes its image in
memory without starting the Python OCR worker. Application-window capture uses
a short-lived helper and an OS-managed temporary image file, removed when its
handles close. This applies to all OCR engines. Window titles and target IDs
stay local and are not persisted as capture presets or sent as Lens metadata.
The chosen window is checked for each scan; a closed, minimized, protected or
unsupported window produces an error without falling back to a desktop image.
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



## Local recovery and diagnostics

Komofuu keeps up to five local recovery snapshots each for saved words/selected
preferences and notes. Each snapshot is limited to 8 MiB. Automatic snapshots
are paced to no more than one per category per 30 minutes; manual profile backups
and protection before note deletion/recovery can create an additional snapshot.
Recovery files contain personal study data and are not encrypted by Komofuu.
They remain in this Windows profile's app-data folder, with no upload, and are
removed when app data is deleted during uninstall. Manual exports remain separate.
If damaged notes are repaired, the unreadable original is preserved as
`notes-before-recovery.json` (up to 4 MiB). Note recovery adds closed copies rather
than overwriting healthy current notes.

Diagnostics are generated only when requested in Advanced settings. They contain
app/component versions, selected engine/animation flags, permission flags and
counts/sizes and recent numeric lookup timings/cache flags. The OCR overlay keeps
at most 24 samples each for foreground resolution, background resolution and
popup construction in memory. Timings are not saved to application storage and
disappear when the overlay restarts. They exclude vocabulary/definitions, note contents, screenshots,
clipboard text, dictionary titles, usernames, file paths and credentials. An
export is downloaded locally; Komofuu does not send it to support automatically.

### Setup guide and last cropped area

Komofuu remembers one recent cropped rectangle and its screen arrangement/scaling
in local settings. This stores pixel coordinates and display dimensions, not a
screenshot, recognized text or application-window title. After restarting, reuse
is explicit and checks the screen layout; nothing is captured automatically.
Choosing a new area replaces the remembered rectangle. These local preferences
are removed when Komofuu app data is deleted during uninstall.

The quick-start guide remembers whether it was dismissed/opened and whether a
first successful screen lookup was completed. That milestone is a boolean, not
a record of the word or definition. Opening the guide checks local dictionary
and installed-component metadata; it does not capture, initialize an OCR model,
download components or grant Google Lens upload permission.

## Reopening Komofuu on Windows

A normal second launch of Komofuu 0.14.8 exits and asks the already-running app
to show its companion. It does not start another set of app windows or create
another profile. This local single-instance notification does not upload launch
arguments or application data. The short-lived selected-window capture helper
remains a separate process and follows the local capture behavior above.

# Privacy and data flows

Updated 27 October 2026. These are technical privacy notes for the current preview,
not a finalized legal privacy notice. The publisher's legal identity and a private
privacy-contact method still need to be supplied before general public distribution.
For non-sensitive questions, use [public support](SUPPORT.md); do not post personal
information or private captures in public issues.

## What stays local

No Komofuu account, developer-operated upload server, advertising or app analytics
is currently implemented. Settings, saved words and an imported EDICT2 index are
stored in your Windows profile. Saved entries can include the sentence you saved.
These files are not an encrypted vault; someone with access to that Windows
account may be able to read them.

PaddleOCR processes requested captures locally. The pink border indicates readiness;
normal scanning starts on your shortcut. Continuous local scanning is a separate
option and off by default. Captures use temporary files in the app's local data
area, normally cleaned up afterward. Crashes may leave temporary files or logs;
secure erasure is not promised. OCR/dictionary results may be cached in memory.

Automatic clipboard lookup is optional and off by default. When enabled it reads
the current clipboard after change notifications and filters for Japanese text up
to 200 characters; it does not keep a clipboard history. Manual clipboard lookup
reads the clipboard when requested. A saved entry can retain copied text as context.
Accessible-text lookup reads text under your pointer on request and attempts to
skip password controls. Cursor position and inactivity are used locally for animation.

Optional music reactions read scalar output levels from the default Windows audio
device. They do not use the microphone, record audio, or upload audio. Monitoring
pauses in island and Gaming modes.

## Optional connections

| Feature | Destination and information |
| --- | --- |
| Online/hybrid definitions | Jotoba receives the lookup query and normal network information, including IP address. Enabled automatic clipboard lookup can cause queries from copied text. |
| Jotoba pronunciation | A requested word/reading may be sent to find a recording. Audio is received into memory for playback; Komofuu does not save an audio corpus. OS/network caches may exist. |
| Google Lens | After a separate upload permission, a requested scan uploads the captured area to Google's unofficial Lens endpoint. Full-screen scans include everything visible on that monitor. No Google login or browser cookies are supplied. |
| AnkiConnect | Explicit card/connect actions send card fields and any configured AnkiConnect key to `127.0.0.1:8765` on your PC. Anki's own sync settings are separate. |
| Updates | A check contacts GitHub for release information; downloading requests the installer. It does not send screenshots, clipboard text, saved words or dictionary queries. Startup checks are optional and off by default; download/install each need your action. |

Chosen services receive normal connection information such as your IP address.
Data goes directly to the selected provider, without a Komofuu proxy. Offline
word definitions do not disable separately selected online pronunciation.
Installed Windows voices and Microsoft WebView2 have their own platform settings
and update behavior.

Lens is unofficial and can stop working. Upload consent does not establish service
permission for the integration; that remains a publisher release task. Komofuu
cannot promise Google-side retention periods, deletion or regional processing.

Provider information: [Jotoba](https://jotoba.de/about),
[Google privacy](https://policies.google.com/privacy),
[Google terms](https://policies.google.com/terms),
[GitHub privacy](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).

## Website and public reports

The supplied website has no analytics, advertisements, cookies set by its code,
or external fonts. It requests public release metadata from GitHub without
credentials. Website hosting and GitHub downloads still involve host logs and
normal connection data. Public GitHub issues and any screenshots attached there
are visible to other people. Do not post secrets, personal clipboard contents,
or unredacted private screens.

## Controls and deletion

Choose local definitions and local pronunciation, keep Lens permission off, and
turn off automatic clipboard lookup to avoid those optional online requests.
Delete saved entries or export a backup from Saved words. The full-data uninstall
option removes the app profile for your Windows account. Exports, Anki cards,
downloaded installers and information already sent to providers are separate;
uninstalling does not delete those copies or secure-erase disk storage.

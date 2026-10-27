<p align="center"><img src="assets/komofuu.svg" width="96" height="96" alt="Komofuu, a little desktop companion"></p>
<h1 align="center">Komofuu</h1>
<p align="center">A little company for your Japanese.</p>
<p align="center"><strong>Windows x64 · Early preview · OCR runtime included</strong></p>
<p align="center"><a href="https://github.com/Komofuu/komofuu-releases/releases"><strong>Windows downloads</strong></a> · <a href="GETTING-STARTED.md">Getting started</a> · <a href="https://github.com/Komofuu/komofuu-releases/issues/new/choose">Help &amp; feedback</a></p>

Komofuu keeps you company while you read Japanese. Scan visible text when you
need a word, look it up with furigana, and keep useful vocabulary for later.
This is the official public downloads and support repository. The application
source is currently private.

## Download

**[Open the official releases page →](https://github.com/Komofuu/komofuu-releases/releases)**

Only published releases are available to visitors. If none appears, the first
public build is still being prepared. App distribution terms are also being
finalized; see [Licensing](LICENSING.md).

Choose **`Komofuu_<version>_x64-setup.exe`** under **Assets**. The installer includes
the OCR runtime; you do not need a separate Python installation or development
tools. GitHub's **Source code** ZIP/TAR contains this downloads repository, not
the installed app.

| Release file | What it is for |
| --- | --- |
| `Komofuu_…_x64-setup.exe` | Windows installer — download and run this file |
| `LEGAL.txt` | The build's legal information and third-party notices |
| `Komofuu_…_x64-setup.exe.sig` | Signature used to verify app updates; not an installer |
| `latest.json` | Metadata read by Komofuu's updater; not an installer |

Preview installers currently lack a Windows publisher signature. A valid updater
signature is a separate check and does not remove browser/SmartScreen warnings.
Verify the release and file before running it; do not disable antivirus to install.

## What you can do

- **Screen lookup:** enable OCR, press your scan shortcut, then hover recognized
  Japanese words for definitions. PaddleOCR is local; Google Lens is optional,
  online and unofficial.
- **Ask Komofuu:** dictionary-led word and sentence-segment lookup in a chat-style
  window, with readings above kanji.
- **Clipboard lookup:** copy Japanese text and explore its words. Automatic
  clipboard lookup is optional and off by default.
- **Saved words:** revisit vocabulary with sentence context, export it, or send
  cards to a locally running AnkiConnect setup.
- **A desktop companion:** resize Komofuu, choose a theme, use Gaming mode, or tuck
  him into the small bar at the top of the screen. Music reactions are optional.

OCR can miss or misread small, decorative, tilted or vertical text. Definitions
and segmentation are study aids, not guaranteed sentence translations.

## First launch

1. Run the Windows x64 installer from a published release. Internet may be needed
   to install Microsoft WebView2 if it is missing.
2. Drag down the small bar at the top centre of your screen to reveal Komofuu.
3. Right-click Komofuu → **Dictionary**. Import an EDICT2 dictionary for offline
   meanings, or choose online lookup through Jotoba.
4. Choose **Enable OCR**, then press **Ctrl + Shift + Space** to scan once.
   Change that shortcut in Settings. The pink border means OCR is ready;
   enabling it does not start continuous scans.

Read the [first-run guide](GETTING-STARTED.md) for privacy controls, updates,
backups and uninstall instructions.

## Updates and your data

Configured release builds offer **Settings → Updates**. You choose when to check,
download, and install; startup checks are optional and off by default. Updates
are intended to keep settings, saved words and imported dictionaries. Export
important vocabulary before testing an upgrade.

The in-app **Uninstall and delete app data** option removes the local app profile
for your Windows account as well as the app. Exported backups, Anki cards and
downloaded installers are separate files and are kept.

## Privacy, credits and support

- [Privacy and data flows](PRIVACY.md)
- [Third-party credits](THIRD_PARTY_NOTICES.md) and [licensing status](LICENSING.md)
- [Get help or report a bug](SUPPORT.md)
- [Security reporting](SECURITY.md)

No Komofuu account is required. Online dictionary, pronunciation, Lens and update
features each make their own requests when used; see the privacy notes.
Komofuu is not affiliated with or endorsed by the credited providers.

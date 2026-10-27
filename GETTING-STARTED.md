# Getting started with Komofuu

## Install and find your companion

Open [Releases](https://github.com/Komofuu/komofuu-releases/releases), choose a
published version and download its `Komofuu_…_x64-setup.exe` asset. Read the release
notes and `LEGAL.txt`. No public release listed means a public download is not
available yet. The source-code archive is not the app.

The current package is for **Windows x64**. Other operating systems and native
ARM64 packages are not provided. The installer includes local OCR and its models;
Microsoft WebView2 may need an internet download on first installation if absent.
Preview compatibility testing is still being expanded; report Windows/DPI issues.

On first launch, find the small bar at the top centre of your screen. Drag it down
to reveal Komofuu. Right-click him or the bar for the menu. **Hide Komofuu** returns
him to the bar; **Quit Komofuu** exits the app. His visible/hidden state is remembered.

## Choose definitions

Open **Dictionary** from the right-click menu. For local definitions, import an
EDICT2 dictionary you obtained from the [EDRDG dictionary project](https://www.edrdg.org/wiki/index.php/JMdict-EDICT_Dictionary_Project)
under its terms. Dictionary data is not bundled with the app. Alternatively,
choose online or hybrid definitions through Jotoba; queries then leave your PC.

**Ask Komofuu** uses dictionary lookups and basic sentence segmentation. It is
not an open-ended AI chat service. In a sentence, choose a word to explore it.
Readings appear above kanji; **Save** keeps an entry in **Saved words**.

## Scan your screen

1. Choose **Enable OCR** in the right-click menu. The pink border means it is ready.
2. With the desired text on screen, press **Ctrl + Shift + Space** once.
3. Hover a highlighted word to look it up. Scan again after the content changes.

Settings lets you change the shortcut and scan area. Entire-screen scans use
the monitor under your pointer; a smaller selected area can improve focus and
limit what an online scan shares. If the shortcut conflicts with another app,
record a different shortcut in Settings.

**PaddleOCR** runs locally. Start with CPU; GPU/DirectML is optional and depends
on your graphics device. Choose CPU if GPU initialization fails.

**Google Lens** is an optional, unofficial online integration. You must separately
allow captured-area uploads. It can stop working and its authorization basis for
public distribution remains unresolved. Do not enable it for sensitive screens.
There is no silent online fallback and Lens allows manual scans only.

Automatic layout handles mixed directions. Try **Vertical Japanese** if whole
manga columns are missed. Small furigana, art, decorative fonts and unusual angles
can still be wrong. A smaller capture or zooming in may help. Checking the original
text is still necessary; no engine guarantees complete or correct recognition.

## Clipboard, pronunciation and music

**Look up clipboard** reads your current clipboard on request. Automatic clipboard
lookup is a separate option, off by default. Copy with **Ctrl+C**; **Ctrl+V** pastes.
For longer copied text, select words directly in the sentence to explore them.
Do not copy sensitive text while online automatic lookup is enabled.

**Listen** uses the chosen pronunciation source. Jotoba audio is requested online;
Windows pronunciation needs an installed Japanese voice. Selecting local
word definitions does not automatically select local pronunciation.

Music reactions are optional and off by default. They use Windows output levels;
Komofuu does not use the microphone or record/upload audio for this feature.

## Updates and backups

Before testing an update, export important words from **Saved words**. In a
configured release build, open **Settings → Updates → Check for updates**. Choose
Download, then Install and restart. The package signature must verify. Updates
are intended to keep your profile data; preview upgrade testing is still ongoing.

Only published full releases are visible to the updater. Draft releases are not.
A missing feed or network failure is an error, not confirmation you are up to date.
A test build without update configuration needs a manual installer upgrade.

## Remove Komofuu

Open **Settings → Uninstall Komofuu → Uninstall and delete app data**. Export saved
words first if you want to keep them, then confirm in the Windows uninstaller.
This removes the app and its local profile for your Windows account. Exported
files, existing Anki cards, downloaded installers and shared Windows components
are kept. Cancelling the Windows uninstaller keeps the app and its data.

For problems, see [Support](SUPPORT.md). Redact private information from reports.

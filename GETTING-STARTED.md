# Getting started with Komofuu

These instructions describe **Komofuu 0.13.7, the first official public release**.
Use the official releases page for Windows downloads and release notes.

## Install and reveal Komofuu

Download the Windows x64 .exe from a [published release](https://github.com/Komofuu/komofuu-releases/releases).
The OCR runtime/models are included; no Python, Node or Rust is required. WebView2
may need an internet download if absent. Other operating systems/native ARM64
packages are not provided. Supported Windows versions depend on recorded testing;
report your Windows/build/display scaling if something fails.

On first launch, find **Pull me** under the top-centre pill and drag down. Right-click
Komofuu or the bar for the menu. Hide Komofuu returns to the bar; Quit Komofuu exits.
His completed visible/hidden state is remembered. The menu's × closes it.

## Add definitions first

Open **Settings → Dictionaries → Find dictionaries to download**. The buttons open
official project pages in your browser; they do not fetch files in the background.
Download **Jitendex for Yomitan**, keep the ZIP compressed and choose **Add
dictionaries…**. Enable its checkbox after import. See [all download pages](DICTIONARIES.md)
for optional JMnedict, KANJIDIC and BCCWJ frequency. You can import and enable several.

All definitions use local imported dictionaries. There is no online fallback.
If no results appear, confirm a definition dictionary is installed and enabled;
frequency metadata alone gives no meanings. Remove old revisions and import new
downloads to update. Original ZIPs and saved words survive dictionary removal.

Dictionary and Ask Komofuu show word/segment meanings, not guaranteed full-sentence
translations or an open-ended AI chat. Readings appear as furigana above kanji.
Save keeps the selected entry/context in Saved words, with JSON backup and TSV export.

## Scan your screen

1. Enable OCR in the menu. The border means ready.
2. Press **Ctrl+Shift+Space** once while the text is visible.
3. Hover a highlight for its meaning. Scan again after content changes.

Settings → Shortcuts changes keybinds, including scan, clipboard and Anki mining.
Whole-current-screen scanning uses the monitor under your pointer. A smaller
selected area limits what online OCR shares. PaddleOCR works locally; CPU is
default and GPU/DirectML is optional. Switch to CPU if GPU initialization fails.
Continuous local scanning is off by default and not recommended for ordinary use.

Google Lens remains optional, unofficial and online. Separate upload permission
is required; requested scans send that area to Google. No silent fallback, account
cookies or automatic retries are used. Keep permission off for private screens;
full-screen scans include everything visible. Availability/accuracy is not guaranteed
and the publisher's service-terms review is separate from this permission control.

Automatic layout handles mixed directions. Try Vertical Japanese for missed manga
columns, or zoom/select a smaller area. Tiny readings, art, decorative fonts and
rotation can still be misread. Check the original text rather than relying blindly
on highlights or segmentation.

## Clipboard, speech and companion

Automatic clipboard lookup is on by default unless previously disabled. Copy with
Ctrl+C and choose words directly within the sentence. Turn it off in Settings →
Clipboard for manual-only lookup; **Ctrl+Shift+L** still reads the current clipboard
once. Only Japanese text up to 200 characters is considered, no history is kept,
and no online dictionary receives the copied text.

Listen/Read aloud use an installed Japanese Windows voice. If missing, add one in
Windows language/speech settings. No recording download or Anki speech recording is
provided. Appearance controls themes, interface/background/OCR colors, companion
color/amount/size and popup text. Music reactions are optional output levels, not
microphone capture or audio recording, and pause in island/Gaming modes.

## Anki mining

Install AnkiConnect in desktop Anki with add-on code **2055492159** (Tools → Add-ons
→ Get Add-ons), restart Anki and keep it open. In Komofuu Settings → Anki, Connect,
choose deck/note type and map fields, or Create Komofuu starter setup. Preview mapped
fields creates no card and can be closed. The connection button becomes Disconnect;
disconnect disables new mining and clears the session key while keeping mappings.

Hover a scanned word and press **Ctrl+Shift+A**, or use Send to Anki. Include the
word in the first field and map a definition field. Optional screenshots use a crop
of the original scan; turn them off for text-only cards. No new recording attachment
is generated. The legacy Audio field/{audio} marker stays empty, while existing
Anki notes/media are kept. Duplicate checking is configurable; after an uncertain
result, inspect Anki before retrying. Cards/images may sync through Anki's own settings.

## Updates and removal

Export important words before updating. Settings → Updates offers Check, Download
and Install and restart. Startup checks are optional/off by default. Only regular
published releases are the current channel; drafts/prereleases are not detected.
Signature checks must succeed. A network failure is an error, not proof you are
up to date. Unconfigured development builds need manual installer upgrades.

Settings → Advanced → Uninstall Komofuu → Uninstall and delete app data opens
the Windows uninstaller. Confirm there. Cancelling keeps the app/data. Normal
Windows uninstall offers a profile-data checkbox. This affects this Windows account;
exports, Anki, downloaded files, other accounts and shared Windows components stay.
Locked files may require later cleanup; secure erasure is not promised.

See [Privacy](PRIVACY.md), [Support](SUPPORT.md) and [Security reporting](SECURITY.md).


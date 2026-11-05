# Getting started with Komofuu

These instructions describe **Komofuu 0.14.5**, following the first official
public release, 0.13.8.
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

Open **Dictionary → Find dictionaries to download**. The buttons open
official project pages in your browser; they do not fetch files in the background.
Download **Jitendex for Yomitan**, keep the ZIP compressed and choose **Add
dictionaries…**. Enable its checkbox after import. See [all download pages](DICTIONARIES.md)
for optional JMnedict, KANJIDIC and BCCWJ frequency. You can import and enable several.

All definitions use local imported dictionaries. There is no online fallback.
If no results appear, confirm a definition dictionary is installed and enabled;
frequency metadata alone gives no meanings. Use **Reimport…** beside an installed dictionary to update it or restore older
plain-text imports. A failed replacement keeps the existing dictionary. Import
progress shows reading and saving; saved words and original ZIPs are kept.

Ask Komofuu shows word/segment meanings, not guaranteed full-sentence
translations or an open-ended AI chat. Readings appear as furigana above kanji.
Save keeps the selected entry/context in Saved words, with JSON backup and TSV export.

## Scan your screen

1. Choose your scan target in Settings → Screen, then turn OCR on. Scan status shows readiness; the border is optional.
2. Press **Ctrl+Shift+Space** once while the text is visible.
3. Hover a highlight for its meaning. Scan again after content changes.

Settings → Shortcuts changes keybinds, including scan, clipboard and Anki mining.
Whole-current-screen scanning uses the monitor under your pointer. For Cropped
area, choose **Choose area to scan**, hold the left mouse button and drag a box
around the text, then release to scan. Escape cancels. The area is reused until
you turn OCR off or choose another.

For **Application window**, choose an available window in the picker. Refresh
updates the list; restore minimized windows first. Only that window’s content
is captured. Its position/size are checked each scan; scan again after moving
or resizing it. Window choice is not retained after restarting Komofuu. Some
games, elevated applications or protected content may not support window capture;
choose another mode yourself if needed. Komofuu never switches to desktop capture
as a fallback.

**Show OCR border** is cosmetic. Turning it off keeps scan status, controls and
highlights available. A smaller selected area or chosen window limits what online
OCR shares. PaddleOCR works locally; CPU is
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


## Notes

Choose Notes from Komofuu’s right-click menu. Headings are plain text; use the menu to return to the library. The Your notes library lists your
notes and provides New note. Open a note to write; edits save on this PC. Use
Collapse note to keep only its title bar visible, then Expand note to continue.
Closing a note keeps it in the library. Manually opened notes appear near
Komofuu; notes restored on startup retain their saved positions.

## Dictionary formatting

Compatible Yomitan imports preserve meaning groups, grammatical and usage
labels, examples and source notes. Reimport dictionaries added using an older
version to recover their formatting. Old saved words and Anki cards are not
rewritten. Dictionary scripts, imported styles and remote resources are not loaded.

## Windows system tray

Komofuu runs in the notification area beside the Windows clock instead of the
taskbar. If its icon is hidden, open the **^** tray overflow; Windows controls
which tray icons stay visible. Click Komofuu’s tray icon to show the companion.
Right-click it for Dictionary, Saved words, Notes, Settings and **Quit Komofuu**.
Closing the tools window hides it while Komofuu keeps running. Minimize and
maximize controls are removed; you can still resize the tools and note windows.
Quit waits for notes to save. If saving fails, Komofuu remains open and shows the
error instead of discarding changes. No startup/autostart setting is added.

## Komofuu’s study animation

When OCR is on, the visible companion studies gently orbiting kana. Turning OCR
off stops the effect. This animation never starts a scan. Putting Komofuu away
pauses his pet animation; OCR stays in its current state. The settled pill keeps
its reveal controls while suspending canvas redraws. Reduced motion stops the
orbital movement, and Gaming retains the controller form.

## Dictionary management and visible errors

Dictionary is for adding, reimporting, enabling and ordering dictionaries. Use
Ask Komofuu to look up a word or sentence; saved-word lookup opens Ask with the
selected word. Dictionary management is no longer duplicated inside Settings.

If a window cannot open, a notice appears near Komofuu or his pill with the
reason. Dismiss it after reading; opening Settings is not required. Small
reaction marks remain separate from these error messages.

## Playing games

Borderless fullscreen is recommended for OCR overlays. Exclusive fullscreen
or protected rendering can hide an overlay or prevent capture. Komofuu does
not change the game's display mode or inject game input.

Gaming animation rate is adjustable from 1–60 FPS in Settings → Appearance.
The default is 5 FPS; lower rates use less CPU. Continuous scanning stays off
in Gaming mode.



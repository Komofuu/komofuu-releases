<p align="center"><img src="assets/komofuu.svg" width="96" height="96" alt="Komofuu, a little desktop companion"></p>
<h1 align="center">Komofuu</h1>
<p align="center">A little company for your Japanese.</p>
<p align="center"><strong>Windows x64 · Early release · OCR runtime included</strong></p>
<p align="center"><a href="https://komofuu.github.io/komofuu-releases/">Website</a> · <a href="https://github.com/Komofuu/komofuu-releases/releases">Windows downloads</a> · <a href="GETTING-STARTED.md">Getting started</a> · <a href="https://github.com/Komofuu/komofuu-releases/issues/new/choose">Help &amp; feedback</a></p>

Komofuu keeps you company while you read Japanese. Scan visible text, look up
words, see readings above kanji, save vocabulary and send cards to Anki.
This is the official public downloads, website and support repository.
Original code and assets are offered under the [MIT License](LICENSE.md). The
application source repository remains private. See [license scope](LICENSING.md);
third-party components/data keep their own licenses.

**Version note:** this guide describes the upcoming **0.13.3** and newer local-only
dictionary behavior. The installer currently offered may be older. Earlier releases
can include optional online dictionary/audio features; read that release's notes
and matching LEGAL.txt. Updating this page does not publish a new installer.

## Download and install

**[Open official releases →](https://github.com/Komofuu/komofuu-releases/releases)**

Download **Komofuu_<version>_x64-setup.exe** under Assets. Local OCR/models are
included; no separate Python/runtime download or developer tools are needed.
WebView2 may need an internet download if missing. GitHub's Source code ZIP/TAR
contains this downloads repository, not the application source or installer.

| Release file | Purpose |
| --- | --- |
| Komofuu_…_x64-setup.exe | Installer — download/run this file |
| LEGAL.txt | Matching legal information and third-party notices |
| .exe.sig | Updater verification signature, not an installer |
| latest.json | Updater metadata, not an installer |

Installers currently lack a Windows publisher signature. Updater signing is a
separate protection and does not remove browser/SmartScreen warnings. Check the
official release/digest; do not disable antivirus to bypass a detection you cannot
verify. No malware-free guarantee is claimed.

## First use

1. Drag down the top-centre pill to reveal Komofuu. Right-click for his menu.
2. Open **Settings → Dictionaries → Find dictionaries to download**. Start with
   [Jitendex for Yomitan](https://jitendex.org/pages/downloads.html), download its
   ZIP yourself and import it with **Add dictionaries…**, without unzipping.
3. Enable the dictionaries you want. Several can be used together. Optional
   names, kanji and frequency downloads are in [Dictionary downloads](DICTIONARIES.md).
4. Enable OCR, then press **Ctrl+Shift+Space** once. The border means ready;
   hover recognized text for definitions. Change shortcuts in Settings.

Definitions use your imported dictionaries, with no online fallback. PaddleOCR
is local. Google Lens is optional, online, unofficial and requires separate upload
permission. A full-screen scan can share everything visible on that monitor.
OCR and segmentation may be inaccurate, especially for small/decorative/rotated
or vertical text. They are study aids, not guaranteed translations.

Automatic clipboard lookup is on by default unless previously disabled; copied
Japanese text is looked up locally. Turn it off for manual-only lookup. Ask Komofuu
is dictionary-led word/segment lookup, not an open-ended AI service. Listen uses
an installed Japanese Windows voice; no recording service is contacted.

## Anki, updates and data

Set up [AnkiConnect](https://github.com/FooSoft/anki-connect) in desktop Anki, then
connect under Settings → Anki. Choose deck/note type, review mappings or create
the starter setup. Hover a scanned word and press **Ctrl+Shift+A** to mine its
word, definition and source text. Original-scan screenshots can be turned off.
New cards attach no recording; existing Anki notes/media are kept.

Settings → Updates offers signed, user-controlled download/install. Startup
checks are optional and off by default. Export important saved words before an
upgrade. Regular releases are detected; GitHub prereleases are not the current
update channel. The publisher stages drafts and publishes separately.

**Uninstall and delete app data** removes this Windows account's app profile
after confirmation. Exports, downloaded ZIPs/installers, Anki cards/media, other
accounts and shared Windows components are kept. Deletion is not secure erasure.

## Privacy, credits and support

- [Getting started](GETTING-STARTED.md) and [dictionary downloads](DICTIONARIES.md)
- [Privacy and data flows](PRIVACY.md)
- [Third-party credits](THIRD_PARTY_NOTICES.md) and [licensing status](LICENSING.md)
- [Help](SUPPORT.md) and [security reporting](SECURITY.md)
- [Older saved data](docs/DATA-MIGRATION.md)

No Komofuu account, developer upload server or app analytics is implemented.
Optional Lens, GitHub updates and explicitly opened project pages have their own
connections/policies. No provider endorsement or affiliation is claimed.

# Download and add dictionaries

For Komofuu 0.13.5, the first official public release, and later versions. Dictionary data is not bundled or mirrored; you
choose and download files from their publishers. Opening these links contacts
the respective website in your browser, not an in-app automatic downloader.

| Dictionary | What it adds | Publisher download page |
| --- | --- | --- |
| Jitendex | Start here: word meanings and examples | https://jitendex.org/pages/downloads.html |
| JMnedict | Optional proper names and places | https://github.com/yomidevs/jmdict-yomitan#jmnedict-for-yomitan |
| KANJIDIC | Optional single-kanji details/readings | https://github.com/yomidevs/jmdict-yomitan#kanjidic-for-yomitan |
| BCCWJ SUW/LUW combined | Optional word frequency; does not supply definitions | https://github.com/Kuuuube/yomitan-dictionaries#bccwj-suw-luw-combined |

**These are suggested starting points, not an exclusive list.** You may add other compatible Yomitan format-3 dictionaries or EDICT2 files; multiple dictionaries remain supported.

1. Review the publisher's terms and choose its **Yomitan ZIP**. For Jitendex,
   choose Yomitan, not MDict. GitHub's source-code ZIP is not a dictionary bank.
2. Keep the dictionary ZIP compressed. Open **Settings → Dictionaries → Add
   dictionaries…** and select one or more downloaded files.
3. Wait for import to finish; large dictionaries can take a few minutes. Imported
   files are indexed locally. Each successful/failed import is reported separately.
4. Enable any combination using the checkboxes. Move up/down sets display order.
   Frequency dictionaries supplement a matching definition dictionary.
5. To update, download a newer revision, remove the old installed revision and
   import the new ZIP. Keep a saved-word backup; the original ZIP remains yours.

No dictionary means no definitions; a frequency-only dictionary also supplies no
word meanings. EDICT2 text/gzip imports remain supported. Multiple definition,
name, kanji and metadata dictionaries can be used together. Each retains its
own source attribution in the app.

Supported data is Yomitan format 3, not full Yomitan feature parity. Structured
definitions render as text; custom styling, dictionary images/audio and automatic
updates are not supported. Komofuu does not follow URLs embedded in dictionary
archives, extract/execute their files, or upload the dictionary. Compatibility is
not permission to redistribute a dictionary. No blanket license or official
endorsement is implied by a link. See [credits](THIRD_PARTY_NOTICES.md).

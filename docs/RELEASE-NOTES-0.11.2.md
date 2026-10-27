# Komofuu 0.11.2 — clearer OCR highlights

An early preview update for Japanese reading on Windows x64.

## Changed

- Vertical words get highlights beside the column, keeping accents out of letters.
- Tilted text keeps its polygon shape and angle, including hover targets.
- PaddleOCR handles mixed horizontal headings and vertical dialogue independently,
  with an additional bounded detection pass for vertical columns.
- Vertical crops map back through their perspective transform; unreliable reflow
  results keep the original recognition instead of replacing it.
- Small dialogue is no longer discarded against a page-wide large-font cutoff.
- Vertical reflow supports light text on dark backgrounds. Lens orientation hints
  also help place highlights for a single kanji in a vertical column.

Offline-model checks cover horizontal/vertical/mixed pages, a 12-degree tilted
page, 12/16/24/48/96-pixel synthetic text and a dark background. Real manga can
still be misread; those checks do not guarantee every font or image.

## Install or update

New users: download `Komofuu_0.11.2_x64-setup.exe` from Assets. It includes local
OCR; do not download GitHub's Source code ZIP as the app. Read `LEGAL.txt`.
Microsoft WebView2 may need an internet download if missing.

Existing configured 0.11.1 users: export important vocabulary, then use
**Settings → Updates** to download and install. Settings, saved words and imported
dictionaries are intended to be preserved; confirm them after restarting.

## Known limits

- Manga, small furigana, decorative type and unusual rotations can still be missed
  or misrecognized. Try a smaller scan area or zooming in.
- Lens is optional and unofficial. This patch improves its highlight rendering,
  not Google's recognition service. It uploads only requested captures after the
  separate permission; the public integration's authorization remains unresolved.
- Preview installers lack Windows publisher signing. Update signatures are a
  separate verification mechanism; browser/SmartScreen warnings may remain.
- Public licensing/service-clearance work and upgrade testing are still tracked in
  the repository's licensing and publication notes. Do not read a build signature
  as certification that those tasks are complete.

For help or a redacted bug report, use this repository's Issues templates.

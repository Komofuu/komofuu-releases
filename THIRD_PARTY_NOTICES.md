# Komofuu third-party credits

Updated 30 October 2026 for Komofuu 0.13.7 release. This index accompanies
the exact license texts/copyright notices in each build's LEGAL.txt and installed
legal resources. It does not replace them or certify redistribution clearance.
Original Komofuu material follows the proprietary distribution policy, to the
extent the Publisher has the necessary rights. See LICENSE.md, EULA.md and
LICENSING.md for scope and version applicability. Earlier MIT grants remain valid;
this notice does not change the terms supplied with existing installers.
Third-party components and data retain their own licenses.

## User-imported dictionary data

Dictionary files are downloaded and imported by the user, not bundled or mirrored
by Komofuu. Their own licenses apply. The importer retains supplied attribution,
title, revision, description and source information; see each installed dictionary's
About section. Local indexes, saved entries and exports do not remove those rights.
Komofuu does not claim copyright over imported data. Format support is not permission
to redistribute a dictionary. Update imported dictionaries regularly by replacing
the installed revision with a new download from its publisher.

- EDICT/JMdict and related EDRDG data: copyright James William Breen and the
  Electronic Dictionary Research and Development Group. Current Japanese/English
  data: CC BY-SA 4.0; preserve the actual imported edition's terms and any additional
  contributor conditions. Other language translations may have separate rights.
  https://www.edrdg.org/wiki/index.php/JMdict-EDICT_Dictionary_Project
  https://www.edrdg.org/edrdg/licence.html
  https://creativecommons.org/licenses/by-sa/4.0/
- Jitendex: Stephen Kraus; supplied attribution includes CC BY-SA 4.0, EDRDG data
  and Tatoeba examples (CC BY 2.0 FR). Use the publisher's Yomitan download and
  current complete attribution, not a blanket license inferred from this index.
  https://jitendex.org/pages/downloads.html
- JMnedict/KANJIDIC for Yomitan: EDRDG data and the contributors credited by the
  conversion project. KANJIDIC has additional contributor conditions documented
  by EDRDG. https://github.com/yomidevs/jmdict-yomitan
- BCCWJ SUW/LUW combined: Kuuuube's distribution, with source attribution to the
  National Institute for Japanese Language and Linguistics and the upstream
  conversion project. This is frequency metadata, not a definition dictionary.
  Consult the linked project and archive terms; no redistribution is granted here.
  https://github.com/Kuuuube/yomitan-dictionaries#bccwj-suw-luw-combined

The download links open publisher pages. Komofuu does not automatically download,
update, execute or render archive HTML/media. Yomitan format compatibility does not
mean Yomitan application code is bundled. Structured definitions are rendered as text.

## OCR, desktop framework and runtime

| Component | Credit / applicable license information |
| --- | --- |
| PaddleOCR models | PaddlePaddle contributors; Apache-2.0 and applicable model notices — https://github.com/PaddlePaddle/PaddleOCR |
| RapidOCR | RapidAI contributors; Apache-2.0 — https://github.com/RapidAI/RapidOCR |
| ONNX Runtime / DirectML | Microsoft and contributors; MIT and nested third-party notices — https://github.com/microsoft/onnxruntime |
| Python | Python Software Foundation and contributors; included Python license — https://docs.python.org/3/license.html |
| Noto Sans CJK | Noto/CJK contributors; SIL OFL 1.1 — https://github.com/notofonts/noto-cjk |
| Tauri and plugins | Tauri contributors; applicable MIT/Apache-2.0 notices — https://github.com/tauri-apps/tauri |
| Shapely / GEOS | Shapely BSD-3-Clause; GEOS LGPL-2.1 obligations — https://libgeos.org/ |
| certifi / covered tqdm portions / MPL Rust crates | Applicable MPL-2.0 source and notice requirements; see exact inventory |
| NumPy, OpenCV, Pillow, protobuf and other packages | Their individual licenses and nested native-component notices |
| Microsoft Visual C++ runtime | Microsoft's terms; exact DLL provenance and Community edition evidence are recorded in docs/MICROSOFT-RUNTIME-REVIEW.md; final distribution conditions remain subject to review |
| zip-rs | zip 9.1.2, MIT; stored/deflate dictionary archive reader — https://github.com/zip-rs/zip2 |

Exact OCR package/model sources and checksums are in the runtime manifest and
scripts/paddle-requirements.txt. Runtime licenses remain beside the installed
OCR files. npm/Cargo versions come from the lockfiles. The Windows build collects
dependency notices and an audit inventory; build-only components are included
conservatively. Missing notice coverage and source-delivery obligations must be
reviewed rather than treated as cleared by a successful build.

## Optional Lens and external Anki integration

Chromium Lens protocol declarations: The Chromium Authors, BSD-3-Clause, bundled
with the runtime notices. Native Rust Lens follows the OCR protocol subset used by
chrome_lens_ocr 0.3.0, by Kolby Moroz Liebl (MIT), the OCR dependency used by Manatan.
This is a bounded adaptation, not the full upstream crate. Its original MIT license
is bundled under legal/upstream/chrome-lens-ocr-LICENSE.txt.
https://github.com/KolbyML/chrome-lens-ocr
https://github.com/KolbyML/Manatan

These code licenses do not grant Google's service authorization. Lens is optional,
unofficial and manually triggered with upload permission. No Google affiliation,
endorsement, service availability or deletion guarantee is claimed.
https://policies.google.com/terms https://policies.google.com/privacy

AnkiConnect: FooSoft and contributors, separately installed, not redistributed.
https://github.com/FooSoft/anki-connect
Anki and AnkiConnect are not represented as endorsing Komofuu. Field mapping and
rapid mining take workflow inspiration from Yomitan; no Yomitan code/card template
is copied. Komofuu's starter template is original. https://yomitan.wiki/anki/
Screenshots can contain private/copyrighted material and may be uploaded by Anki sync.
Listen uses an installed Windows Japanese voice; no recording corpus is bundled
or downloaded by the current app and no new Anki recording attachment is generated.

## Project provenance

This project was built with AI assistance. This statement describes the development
process and does not establish exclusive copyright. Third-party software, models
and dictionary data retain their respective licenses and attribution requirements.


## Website visual-novel demonstration

The website composite `assets/demos/visual-novel-demo.png` uses
[Korenanteeroge.png](https://commons.wikimedia.org/wiki/File:Korenanteeroge.png)
by [User:Eky](https://commons.wikimedia.org/wiki/User:Eky), via Wikimedia Commons,
under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
Changes: resized background with Komofuu and dictionary overlays. The composite
screenshot is licensed under CC BY-SA 3.0. No endorsement is implied.
See [demo media credits](assets/demos/README.md).


## Corresponding source delivery

Use the THIRD-PARTY-SOURCES.zip asset matching the installer version.
See [source availability](THIRD-PARTY-SOURCES.md) for MPL source delivery and
GEOS rebuild/replacement instructions. Those independent rights are unaffected
by the application EULA and repository proprietary scope notice.


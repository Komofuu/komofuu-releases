# Third-party source availability

Releases made with the 0.13.3 source-delivery workflow include a separate
**THIRD-PARTY-SOURCES.zip** asset on their matching version's release page:
https://github.com/Komofuu/komofuu-releases/releases

Choose the tag matching the installed version, not merely the latest release.
The source archive must be published alongside its installer and retained for as
long as that installer is offered. It is not a separate OCR runtime download and
is not needed to run Komofuu. Older releases may not have this asset; their own
legal information and outstanding obligations must be reviewed separately.

## MPL-covered source

The archive contains the exact locked Cargo source archives whose declared
license includes MPL, conservatively including target/build dependencies. The
build verifies each archive against Cargo.lock and compares the source files Cargo
uses directly with the verified upstream archives; it stops rather than silently shipping
modified sources without their modifications. Covered files retain MPL-2.0 and
their original notices; original Komofuu code is not relicensed by this delivery.

certifi and tqdm preferred Python source files, certificate data and individual
license notices are supplied both inside the runtime and in the source archive.
Other Python modules and their individual notices remain in the installed runtime.
No changes to covered third-party modules are made by this workflow. The archive's
CONTENTS.json records Cargo/native archive hashes; source-lock.json records exact
native source URLs and hashes. A .crate file is a gzip-compressed tar archive.

## GEOS through Shapely

The locked Shapely 2.2.0 Windows CPython 3.13 x64 wheel supplies GEOS 3.14.1
(C API 1.20.5). Both bundled GEOS DLL hashes were verified against that wheel;
its DLL version strings and pinned Shapely release build configuration agree.
The source archive includes the complete GEOS 3.14.1 release source and the
Shapely release source/build scripts at commit
229c71f7128713b37201f3c77336d32b52467454. Those upstream files retain their own
licenses, including the GEOS LGPL-2.1 license. Source hashes are pinned, and a
changed runtime GEOS hash stops source collection until provenance is reviewed.

The upstream Windows build is documented in Shapely's .github/workflows/release.yml
and ci/install_geos.cmd. It uses MSVC toolset 14.44, CMake/Ninja, a Release shared
build (BUILD_SHARED_LIBS=ON), BUILD_TESTING=OFF and a selected install prefix.
Build with the supplied GEOS source; use HTTPS if retrieving upstream materials.
Shapely's wheel repair uses delvewheel and changes dependency filenames.

GEOS remains dynamically loaded in the installed runtime at
resources/ocr/python/Lib/site-packages/shapely.libs (the installer may place the
resources directory within its application folder). The two names are recorded
in source-lock.json under geos_binaries. Close Komofuu and back up the originals
before replacing them with compatible x64 GEOS/C API shared libraries built from
modified source. Preserve the expected filenames, matching exported symbols and
DLL dependency names; use the supplied wheel build/repair scripts where needed.
An incompatible replacement can stop OCR; restore the originals to recover.
An app update can replace local modifications. Komofuu does not verify these
installed DLL hashes at runtime or prohibit compatible library replacement.

Recipients retain rights to modify these libraries and reverse engineer the
combined work for debugging such modifications as provided by LGPL-2.1. No
Komofuu usage terms restrict those rights. This delivery supplies source directly;
it does not rely on an unfulfilled written offer. Actual replacement/rebuild testing
on Windows remains required evidence before claiming that arrangement is verified.

## Scope and verification

The included Komofuu source-availability document uses MIT; its license is
KOMOFUU-DOCUMENTATION-LICENSE.md. Third-party source retains its own licenses.
This archive exports selected third-party source, not the private application
repository, credentials or user data. It does not resolve Microsoft redistribution
eligibility, model provenance or every inventory warning. Review the exact build's
NOTICE-COVERAGE.md and dependency inventory before publication. Do not substitute
an archive from a different version or claim an unbuilt source asset exists.

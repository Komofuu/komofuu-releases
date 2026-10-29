# Microsoft runtime file review

Reviewed 30 October 2026. This records technical provenance and applicable
conditions; it is not a legal clearance certificate.

The owner supplied a screenshot of Visual Studio Community 2022 version
17.14.42 installed. Community is an eligible free edition for qualifying
individual developers; paying for Professional is not inherently required.
The screenshot identifies the edition, rather than independently proving every
condition of the publisher's licence.

## Exact file comparisons

All nine separately shipped Microsoft runtime DLLs listed in the locked OCR
manifest match the original reference bytes by SHA-256. No runtime binary was
changed during this review.

| Bundled file | File version | Original reference | Result |
| --- | --- | --- | --- |
| `python/Lib/site-packages/numpy.libs/msvcp140-a4c2229bdc2a2a630acdc095b4d86008.dll` | 14.40.33810.0 | Microsoft symbol server | Exact byte match |
| `python/Lib/site-packages/shapely.libs/msvcp140-0fa7eb792d3fbcf2233e4ea47e9144b9.dll` | 14.44.35229.0 | Microsoft symbol server | Exact byte match |
| `python/msvcp140.dll` | 14.44.35211.0 | Official Microsoft x64 redistributable | Exact byte match |
| `python/msvcp140_1.dll` | 14.44.35211.0 | Official Microsoft x64 redistributable | Exact byte match |
| `python/msvcp140_2.dll` | 14.44.35211.0 | Official Microsoft x64 redistributable | Exact byte match |
| `python/msvcp140_atomic_wait.dll` | 14.44.35211.0 | Official Microsoft x64 redistributable | Exact byte match |
| `python/msvcp140_codecvt_ids.dll` | 14.44.35211.0 | Official Microsoft x64 redistributable | Exact byte match |
| `python/vcruntime140.dll` | 14.51.36247.0 | Official Python 3.13.17 embedded archive | Exact byte match |
| `python/vcruntime140_1.dll` | 14.51.36247.0 | Official Python 3.13.17 embedded archive | Exact byte match |

The machine-readable [provenance record](microsoft-runtime-provenance.json)
contains full hashes and the original download URLs. The NumPy and Shapely
copies were also verified against their locked wheel hashes. Their filenames
have a hash suffix, but their file contents match Microsoft's originals exactly.
This byte comparison does not claim that Microsoft has separately approved a
particular filename or deployment arrangement.

Five files match the cabinet in Microsoft's official 14.44.35211 x64
redistributable. Two match the checksum-locked official CPython embedded archive
and report version 14.51.36247.0. The other two match Microsoft symbol-server
originals at versions 14.40.33810.0 and 14.44.35229.0. Different upstream versions
are recorded explicitly rather than treated as a single toolset build.

## Distribution conditions still apply

Microsoft's Visual Studio Community 2022 terms, section 4, require substantive
application functionality and terms protecting the Microsoft distributable code.
The official redistribution list excludes debug/nonredistributable and preview
components and requires unmodified permitted files. Matching bytes establishes
file identity; it does not replace those licensing conditions or the publisher's
agreement to them.

The installer now presents complete Microsoft 2015-2022 and v14 runtime terms,
with a checkbox explicitly scoped to Microsoft components. Komofuu’s MIT grant
and other components’ LGPL/MPL rights are preserved. The terms revision is derived
from the complete displayed document. New/changed terms force an interactive
review even when an older updater requests passive installation. A silent run
without a matching receipt aborts before any replacement begins. The receipt is
written only after acceptance and installation, under the existing current-user
uninstall registry key; normal uninstall removes it.

This explicit page is the project’s implementation choice. Validate the final
installer/update behaviour using INSTALLER-LICENSE-TESTING.md; it is not a claim
that a particular checkbox is universally prescribed by Microsoft.

Repeat the file comparison against the final restored runtime before publication,
and review new versions or deployment changes. Also inspect statically linked
Microsoft code and the final installer's component scope; this nine-DLL inventory
is not an exhaustive legal audit of every compiled object.

## Official references

- https://visualstudio.microsoft.com/license-terms/vs2022-ga-community/
- https://visualstudio.microsoft.com/wp-content/uploads/2021/11/Visual-Studio-2022-Community-License-EN.docx
- https://learn.microsoft.com/en-us/visualstudio/releases/2022/redistribution
- https://learn.microsoft.com/en-us/cpp/windows/redistributing-visual-cpp-files
- https://www.microsoft.com/licensing/guidance/Visual-Studio
- https://docs.python.org/3.13/using/windows.html

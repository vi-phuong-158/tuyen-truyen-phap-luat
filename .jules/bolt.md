## 2024-05-23 - [Defer Render Blocking Scripts]
**Learning:** Deferring third-party library scripts (like Lucide Icons) significantly improves First Contentful Paint (FCP) by unblocking the HTML parser. However, inline scripts that depend on these libraries must be wrapped in `DOMContentLoaded` listeners to prevent `ReferenceError`.
**Action:** Always audit `<head>` scripts for `defer` opportunities and ensure dependent inline code waits for the DOM/Scripts to be ready.

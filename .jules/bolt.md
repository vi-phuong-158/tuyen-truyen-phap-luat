## 2025-01-26 - Hidden LCP Assets
**Learning:** The hero banner (`ba-nhat-banner.jpg`) is defined in an inline `style` attribute on a `div`, not an `img` tag or CSS file. This hides it from the browser's preload scanner, delaying LCP.
**Action:** In future optimizations, prioritize adding `<link rel="preload" as="image">` for this specific asset, or converting it to an `img` tag with `fetchpriority="high"`.

## 2024-05-23 - Large Inline Data Blocks
**Learning:** The `docData` object containing large HTML strings for modals was embedded directly in `index.html`, increasing the initial download size and parsing time.
**Action:** Extracted static data objects to external JS files (e.g., `js/doc-data.js`) and loaded them with `defer`. This allows the browser to cache the data separately and reduces the critical path payload. Always audit `index.html` for large inline scripts.

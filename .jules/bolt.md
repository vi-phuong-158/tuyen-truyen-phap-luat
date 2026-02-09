## 2025-01-26 - Hidden LCP Assets
**Learning:** The hero banner (`ba-nhat-banner.jpg`) is defined in an inline `style` attribute on a `div`, not an `img` tag or CSS file. This hides it from the browser's preload scanner, delaying LCP.
**Action:** In future optimizations, prioritize adding `<link rel="preload" as="image">` for this specific asset, or converting it to an `img` tag with `fetchpriority="high"`.

## 2025-02-09 - Inline Script Extraction
**Learning:** The application had massive inline scripts (especially `docData` and `translations`) in `index.html`. This prevented browser caching of static logic/data and increased the initial HTML download size, potentially delaying First Contentful Paint (FCP).
**Action:** Extracted these into separate files (`js/doc-data.js`, `js/i18n.js`, `js/app.js`, `js/tailwind-config.js`) to enable caching and parallel downloading. Used `window.` assignment to ensure global availability of functions/data previously in the global scope of the inline script.

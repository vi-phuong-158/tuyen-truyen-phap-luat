## 2025-01-26 - Hidden LCP Assets
**Learning:** The hero banner (`ba-nhat-banner.jpg`) is defined in an inline `style` attribute on a `div`, not an `img` tag or CSS file. This hides it from the browser's preload scanner, delaying LCP.
**Action:** In future optimizations, prioritize adding `<link rel="preload" as="image">` for this specific asset, or converting it to an `img` tag with `fetchpriority="high"`.

## 2025-02-04 - Manual SW Cache Versioning
**Learning:** The Service Worker (`sw.js`) uses a hardcoded `CACHE_NAME` (e.g., `tuyen-truyen-v1`) that must be manually incremented when adding new assets to `ASSETS_TO_CACHE`. Failure to do so results in clients using the stale cache without the new assets.
**Action:** Always `grep` for `CACHE_NAME` and increment the version number when modifying static assets or the cache list.

## 2025-01-26 - Hidden LCP Assets
**Learning:** The hero banner (`ba-nhat-banner.jpg`) is defined in an inline `style` attribute on a `div`, not an `img` tag or CSS file. This hides it from the browser's preload scanner, delaying LCP.
**Action:** In future optimizations, prioritize adding `<link rel="preload" as="image">` for this specific asset, or converting it to an `img` tag with `fetchpriority="high"`.

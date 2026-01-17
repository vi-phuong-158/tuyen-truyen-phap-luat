# Bolt's Journal ⚡

## 2024-05-23 - [Initial Setup]
**Learning:** This project lacks a build system (no `package.json`), relying on CDN-loaded Tailwind and inline JS.
**Action:** Performance optimizations must focus on raw HTML/JS improvements (e.g., lazy loading, CLS reduction) rather than build-time optimizations (minification, tree-shaking).

## 2024-05-23 - [Image Optimization]
**Learning:** Images lacked explicit `width`/`height` attributes, causing potential CLS, and off-screen images were eager-loaded.
**Action:** Added `width="96" height="96"` (and similar) to `<img>` tags to reserve layout space. Added `loading="lazy"` and `decoding="async"` to below-the-fold images to improve LCP and main thread responsiveness.

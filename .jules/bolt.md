# Bolt's Journal

## 2024-05-22 - [HTML Optimization]
**Learning:** In a vanilla HTML/JS environment without a build step, manual optimization of asset loading (like `loading="lazy"` on images and `defer` on scripts) is critical for First Contentful Paint (FCP) and Cumulative Layout Shift (CLS).
**Action:** Always check `index.html` for unoptimized `<img>` and `<script>` tags.

## 2024-05-22 - [Icon Handling]
**Learning:** Inline SVG icons or icon libraries (like Lucide) can block the main thread if not handled correctly.
**Action:** Verify how icons are loaded and rendered.

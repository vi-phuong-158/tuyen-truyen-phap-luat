# Palette's Journal

## 2025-05-23 - Dynamic Icon Rendering
**Learning:** Lucide Icons (`lucide.createIcons()`) scans the DOM on load. When injecting dynamic content (like modal bodies) via `innerHTML`, icons won't render automatically.
**Action:** Must manually call `lucide.createIcons()` immediately after updating `innerHTML` with dynamic content containing `data-lucide` attributes.

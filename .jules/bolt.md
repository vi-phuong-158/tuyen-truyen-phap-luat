# BOLT'S JOURNAL

## 2024-05-22 - [LCP Optimization via Preload]
**Learning:** Background images defined in inline styles or CSS are discovered late by the browser, delaying Largest Contentful Paint (LCP).
**Action:** Use `<link rel="preload" as="image" href="...">` in `<head>` for critical background images to trigger early download.

## 2024-05-22 - [CLS Prevention]
**Learning:** Missing `width` and `height` attributes on images causes layout shifts as the browser doesn't know the aspect ratio until the image downloads.
**Action:** Always add explicit `width` and `height` attributes to `<img>` tags, even if CSS controls the final display size.

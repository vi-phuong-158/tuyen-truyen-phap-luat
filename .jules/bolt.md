## 2024-05-23 - Missing Image Dimensions & Lazy Loading
**Learning:** HTML images without explicit `width` and `height` attributes cause Cumulative Layout Shift (CLS) as the browser reflows content once the image dimensions are known. Images below the fold should be lazy-loaded to prioritize LCP assets.
**Action:** Always add `width` and `height` attributes to `<img>` tags, even when using CSS for sizing. Apply `loading="lazy"` and `decoding="async"` to non-critical/below-the-fold images.

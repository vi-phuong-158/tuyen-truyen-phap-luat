## 2025-02-09 - [Inline Scripts & CSP]
**Vulnerability:** Extensive reliance on inline scripts (`<script>...</script>`) for core application logic (translations, modal handling, configuration) in `index.html`, `documents.html`, and `news.html`. This requires the Content Security Policy (CSP) to include `'unsafe-inline'` for `script-src`.
**Learning:** Legacy patterns with inline event handlers (e.g., `onclick="..."`) make it extremely difficult to enforce a strict CSP without a complete rewrite of the UI interaction layer.
**Fix:** Refactored all inline `<script>` blocks into external files (`js/app.js`, `js/i18n.js`, `js/doc-data.js`, `js/tailwind-config.js`).
**Limitations:** CSP `script-src` still requires `'unsafe-inline'` to support the existing inline event handlers in HTML.
**Prevention:**
1.  Enforce a "no inline script" policy.
2.  Use `addEventListener` instead of `onclick` attributes.
3.  Use external configuration files.

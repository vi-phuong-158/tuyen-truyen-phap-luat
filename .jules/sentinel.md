## 2026-01-27 - Tailwind Play CDN CSP Constraints
**Vulnerability:** Weak Content Security Policy (CSP) configuration required by development tools in production.
**Learning:** The project relies on `cdn.tailwindcss.com` (Tailwind Play CDN), which uses JIT compilation in the browser. This forces the CSP `script-src` to allow `'unsafe-eval'` and `'unsafe-inline'`, significantly reducing protection against XSS.
**Prevention:** For production security, replace the Play CDN with a build process (e.g., `tailwindcss` CLI) to generate a static CSS file, allowing for a strict CSP without `unsafe-eval` or `unsafe-inline`.

## 2026-01-12 - [Unpinned External Dependencies & Missing CSP]
**Vulnerability:** Static site relied on `latest` versions of CDN libraries and lacked CSP, exposing users to supply chain attacks and XSS.
**Learning:** Even simple static sites need CSP to mitigate script injection. `unsafe-eval` is a necessary evil for runtime-compiled Tailwind CDN in this architecture.
**Prevention:** Always pin versions (e.g., `x.y.z`) and implement strict CSP to control execution sources.

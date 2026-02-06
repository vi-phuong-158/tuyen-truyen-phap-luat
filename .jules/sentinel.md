# Sentinel's Journal

## 2025-10-28 - Service Worker Cache Consistency
**Vulnerability:** Supply Chain Risk / Cache Inconsistency
**Learning:** In a static site using a Service Worker, relying on unpinned CDN assets (e.g., `@latest`) creates a risk where the Service Worker caches a specific version of "latest" indefinitely, potentially leading to inconsistencies or exposure to compromised updates without a mechanism to force a refresh.
**Prevention:** Pin all external CDN dependencies to specific versions in both `index.html` and `sw.js`, and bump `CACHE_NAME` to force a client-side update.

## 2026-02-04 - Dependency Pinning and SRI
**Vulnerability:** Use of `latest` tags and unpinned CDNs exposes the application to supply chain attacks and breaking changes.
**Learning:** `cdn.tailwindcss.com` does not serve `Access-Control-Allow-Origin` headers, making it impossible to use Subresource Integrity (SRI) as `crossorigin` is required for SRI but blocked by the CDN policy.
**Prevention:** Pin all dependencies to specific versions. Use SRI where supported (e.g., `unpkg.com`). For CDNs without CORS support, version pinning is the only available mitigation.

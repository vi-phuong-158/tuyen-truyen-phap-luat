## 2024-05-23 - Unpinned CDN Usage
**Vulnerability:** The application relies on unpinned CDN links (e.g., `unpkg.com/lucide@latest`, `cdn.tailwindcss.com`) for core functionality.
**Learning:** This introduces significant supply chain risks (malicious updates) and stability issues (breaking changes in new versions). While Lucide can be pinned and secured with SRI, the Tailwind Play CDN is designed for development and lacks stable versioning for SRI.
**Prevention:** Pin all external dependencies to specific versions and implement Subresource Integrity (SRI) hashes. For production, replace runtime-compiled CSS (Tailwind Play CDN) with a build process generating static CSS assets.

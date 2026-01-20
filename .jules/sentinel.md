# Sentinel's Journal

## 2025-01-28 - Supply Chain Risk via Unpinned CDNs
**Vulnerability:** The application loads core libraries (Tailwind CSS, Lucide Icons) via public CDNs using `@latest` or unversioned URLs.
**Learning:** This architecture prioritizes development speed but introduces a significant supply chain risk. If the CDN or the package is compromised, malicious code is automatically executed on the user's browser without any changes to the codebase.
**Prevention:** In future iterations, pin all CDN dependencies to specific versions (e.g., `lucide@0.292.0`) and implement Subresource Integrity (SRI) hashes to ensure code integrity.

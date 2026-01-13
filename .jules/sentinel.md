# Sentinel's Journal

## 2025-10-26 - CDN Dependency Pinning
**Vulnerability:** External dependencies were loaded via `@latest` or unpinned URLs (e.g., `unpkg.com/lucide@latest`).
**Learning:** Using `@latest` allows third parties to introduce breaking changes or malicious code into the application without any checks. It bypasses the immutability principle of production deployments.
**Prevention:** Always pin dependencies to specific versions (e.g., `lucide@0.562.0`). This ensures build reproducibility and prevents supply chain attacks via version hijacking.

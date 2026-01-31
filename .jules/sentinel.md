# Sentinel's Journal

This journal records CRITICAL security learnings, vulnerability patterns, and reused security solutions.

## Journal Entries

## 2026-01-31 - Pinning CDN Dependencies
**Vulnerability:** Supply Chain Risk / Uncontrolled Updates
**Learning:** Using `@latest` or unversioned CDN links (e.g., `unpkg.com/package@latest`, `cdn.tailwindcss.com`) exposes the application to immediate breakage if a new version introduces bugs or breaking changes. It also increases the attack surface for supply chain attacks where a compromised latest version is automatically served to users. In PWA contexts (`sw.js`), this can lead to cache inconsistencies where the Service Worker caches a version that might differ from what the application expects if re-installed or updated.
**Prevention:** Always pin dependencies to specific, immutable version numbers in both `index.html` (or other entry points) and `sw.js` cache lists. Review and bump versions manually.

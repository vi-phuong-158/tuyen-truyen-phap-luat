# Sentinel's Security Journal

## 2026-02-06 - CSP Enhancement (Defense in Depth)
**Vulnerability:** The existing Content Security Policy (CSP) was functional but permissive. It lacked restrictions on `<object>`/`<embed>` tags (`object-src`) and `<base>` tags (`base-uri`), potentially allowing Flash/Java exploits or base tag hijacking. It also didn't strictly enforce HTTPS upgrades.
**Learning:** Even static sites relying on CDNs should lock down legacy vectors. `object-src` defaults to `*` if not specified, which is dangerous even if not explicitly used. `base-uri` can change the base URL for relative links if injected.
**Prevention:** Explicitly added `object-src 'none'`, `base-uri 'self'`, and `upgrade-insecure-requests` to the CSP meta tag. This hardens the browser environment against class of injection attacks without breaking existing functionality.

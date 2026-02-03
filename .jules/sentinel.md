## 2026-02-03 - [CSP Meta Tag Limitations]
**Vulnerability:** Clickjacking (missing X-Frame-Options/frame-ancestors).
**Learning:** `frame-ancestors` directive is ignored when delivered via `<meta http-equiv="Content-Security-Policy">`. It must be sent as an HTTP Response Header.
**Prevention:** For static sites (like GitHub Pages) where headers cannot be easily controlled, rely on frame-busting scripts (with known limitations) or accept the risk. Do not add `frame-ancestors` to meta tags as it creates false security and console errors.

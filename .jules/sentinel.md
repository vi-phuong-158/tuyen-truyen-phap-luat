## 2026-01-22 - Reverse Tabnabbing
**Vulnerability:** Found multiple `target="_blank"` links without `rel="noopener noreferrer"`, allowing opened pages to access `window.opener` and potentially redirect the user to a malicious site (phishing).
**Learning:** Even in static sites, external links pose a risk if they can manipulate the origin page.
**Prevention:** Always include `rel="noopener noreferrer"` (or at least `noopener`) when using `target="_blank"`.

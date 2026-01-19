## 2026-01-12 - Reverse Tabnabbing Vulnerability
**Vulnerability:** Found 6 instances of `target="_blank"` links without `rel="noopener noreferrer"`. This allows the opened page to access `window.opener` of the original page, potentially redirecting the user to a malicious site (Reverse Tabnabbing).
**Learning:** Even in static sites with trusted links (e.g., Google NotebookLM), it is best practice to treat all external links as untrusted.
**Prevention:** Always add `rel="noopener noreferrer"` to any link with `target="_blank"`.

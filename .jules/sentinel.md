## 2024-05-23 - Reverse Tabnabbing Vulnerability
**Vulnerability:** Found multiple external and local links using `target="_blank"` without `rel="noopener noreferrer"`.
**Learning:** Even on static sites, `target="_blank"` allows the new page to access `window.opener` of the original page. This can be exploited via "Reverse Tabnabbing" where a malicious external site redirects the original tab to a phishing page.
**Prevention:** Always add `rel="noopener noreferrer"` to any link with `target="_blank"`. This ensures `window.opener` is null in the new tab.

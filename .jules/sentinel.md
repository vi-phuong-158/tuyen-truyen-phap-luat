## 2026-01-12 - [Reverse Tabnabbing Vulnerability]
**Vulnerability:** Found multiple `target="_blank"` links (pointing to external sites like Google NotebookLM and internal PDFs) without `rel="noopener noreferrer"`.
**Learning:** Even in static sites, links that open in new tabs expose the `window.opener` object to the target page, allowing it to potentially redirect the original page to a malicious site (Reverse Tabnabbing).
**Prevention:** Always add `rel="noopener noreferrer"` to any `<a>` tag with `target="_blank"`. This should be enforced via linting or manual review in static HTML projects.

## 2024-05-23 - Multilingual Accessibility Attributes
**Learning:** In static sites with client-side translation (JS-based), attributes like `placeholder`, `aria-label`, and `title` are often overlooked because `innerText` replacement is the common pattern. This leaves non-visual users and users relying on placeholders with untranslated content.
**Action:** When implementing or auditing multilingual support, explicitly check and update attributes (`setAttribute`) in the language switching function, not just text content.

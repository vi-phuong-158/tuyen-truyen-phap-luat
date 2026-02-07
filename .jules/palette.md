## 2024-05-22 - Multilingual Attribute Updates
**Learning:** The existing translation system (`data-i18n`) only updated text content (`innerText`), leaving accessibility attributes (`aria-label`, `placeholder`) stale when language changed. This created a jarring experience for screen reader users and non-native speakers relying on placeholders.
**Action:** Extend `setLanguage` to support attribute mapping for dynamic elements, ensuring screen readers and placeholders remain localized alongside visible text.

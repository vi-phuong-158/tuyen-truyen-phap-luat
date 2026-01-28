## 2026-01-28 - Modal Focus Management
**Learning:** Custom modals in vanilla JS often neglect keyboard focus, breaking navigation flow for assistive technology users.
**Action:** Always capture `document.activeElement` before opening and restore it after closing. Explicitly focus the modal (or its close button) upon opening.

## 2026-01-28 - Bilingual Accessibility
**Learning:** Dynamic language switchers must update `aria-label` attributes on icon-only buttons to maintain accessibility for screen readers.
**Action:** Include ARIA attribute updates in the localization logic.

## 2026-02-02 - Accessibility in Dynamic Content
**Learning:** Functions that update content for i18n (like `setLanguage`) often miss non-visible attributes like `aria-label`. Always check that localized controls update their accessibility attributes, not just visible text.
**Action:** When implementing i18n, explicitly target and update `aria-label`, `aria-description`, and `title` attributes for interactive elements.

## 2026-02-02 - Modal Focus Management
**Learning:** Simple CSS-based modals often lack focus management. Restoring focus to the trigger element is crucial for keyboard navigation but requires state tracking (`lastFocusedElement`).
**Action:** Always implement a `lastFocusedElement` tracker for modals and use `setTimeout` to set focus inside the modal to ensure the DOM is ready and visible.

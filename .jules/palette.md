# Palette's Journal

## 2023-10-27 - Modal Accessibility Pattern
**Learning:** Modals in this codebase were missing `role="dialog"` and focus management, making them invisible or confusing to screen reader users.
**Action:** Always wrap modal visibility toggles with focus capture (save `activeElement`) and restoration logic. Ensure `aria-modal="true"` is present.

## 2023-10-27 - Script Loading Safety
**Learning:** Calling `lucide.createIcons()` immediately in an inline script crashed the execution when the library was loaded with `defer`.
**Action:** Always wrap 3rd-party library calls in `DOMContentLoaded` listeners or check for existence (`typeof lib !== 'undefined'`) to prevent blocking subsequent script execution.

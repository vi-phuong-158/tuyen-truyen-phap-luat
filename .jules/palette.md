## 2026-02-04 - Modal Focus Management & Script Execution Order
**Learning:**
- **Modal Accessibility:** Modals must explicitly manage focus. Simply removing `hidden` class is insufficient for keyboard/screen reader users. Focus must be moved to an interactive element within the modal (like a Close button) upon opening, and restored to the triggering element upon closing.
- **Script Execution:** Inline scripts executing `lucide.createIcons()` immediately will crash if the Lucide library is loaded via `<script defer>`. `defer` scripts execute before `DOMContentLoaded` but *after* inline scripts. Always wrap library initialization in `DOMContentLoaded` or check for existence.
- **Focus Restoration:** Using `document.activeElement` to capture the trigger element before opening a modal is a robust pattern for restoring focus.

**Action:**
- Always add `id`s to modal close buttons and primary actions to facilitate focus targeting.
- Use `setTimeout(..., 50)` when setting focus on newly visible elements to ensure the browser has processed the visibility change.
- Verify library availability before calling initialization functions in inline scripts.

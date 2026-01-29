## 2024-05-23 - Modal Focus Management
**Learning:** Modals must explicitly manage focus to ensure keyboard accessibility. Simply removing the `hidden` class is not enough; focus remains on the triggering element (or body), leaving keyboard users "stranded" outside the modal.
**Action:** Always implement a `lastFocusedElement` tracker and move focus to a specific element (like the close button or primary action) inside the modal upon opening, and restore it upon closing. Use `setTimeout` to ensure the element is visible/interactive before focusing.

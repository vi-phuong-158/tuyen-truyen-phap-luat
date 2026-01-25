## 2024-05-23 - Modal Focus Management
**Learning:** Vanilla JS modals (built without a library like Headless UI) completely break keyboard accessibility if focus isn't manually managed. Users navigating via keyboard are lost when a modal opens but focus stays on the background, or when it closes and focus resets to the top of the body.
**Action:** Always implement `lastFocusedElement` tracking and explicit focus moving (`element.focus()`) in `openModal`/`closeModal` functions for vanilla JS projects.

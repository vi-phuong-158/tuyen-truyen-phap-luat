## 2024-05-23 - Focus Management in Vanilla JS Modals
**Learning:** Modals implemented with simple CSS visibility toggles (`display: none` or `hidden` class) do not automatically manage focus. This leaves keyboard users stranded on the underlying content or lost in the DOM.
**Action:** For every modal open action, explicitly save `document.activeElement`. For every close action, restore it. Use a small timeout (e.g., 50ms) or `requestAnimationFrame` when focusing elements inside a newly revealed modal to ensure the browser acknowledges the visibility change.

## 2026-01-12 - Modal Accessibility Focus Trap
**Learning:** Modals without focus management trap keyboard users in a confusing state. Simply showing/hiding a div is not enough; `focus()` management is critical for a "real" dialog experience.
**Action:** Always implement `lastFocusedElement` tracking and shift focus to the modal's close button (or first input) immediately upon opening.

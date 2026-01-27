## 2026-01-14 - Modal Focus Management
**Learning:** Users, especially those using keyboards, lose context when a modal closes if focus isn't restored to the triggering element.
**Action:** Always store `document.activeElement` before opening a modal and restore it upon closing. For auto-opening modals, set initial focus to the primary action.

## 2026-02-05 - Modal Accessibility Pattern
**Learning:** Custom modals in this project rely solely on visual styling (Tailwind classes) and lack semantic roles (`dialog`, `aria-modal`), making them invisible to screen reader navigation modes.
**Action:** Always add `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` to the modal container `div` when touching modal code.

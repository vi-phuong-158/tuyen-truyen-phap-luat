## 2024-05-22 - Mobile Menu Accessibility and Security
**Learning:** Icon-only buttons (like mobile hamburger menus) often get overlooked for accessibility. Adding `aria-label` and managing `aria-expanded` state is a low-effort, high-impact win for screen reader users. Also, securing `target="_blank"` links with `rel="noopener noreferrer"` is a standard pattern that should be applied universally.
**Action:** When auditing mobile interfaces, always check if the menu trigger communicates its state (`aria-expanded`) and purpose (`aria-label`). Automated checks often miss the *state* aspect.

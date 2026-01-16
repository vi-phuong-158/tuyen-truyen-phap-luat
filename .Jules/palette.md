## 2026-01-16 - Icon-Only Button Accessibility
**Learning:** Icon-only buttons (like hamburger menus and close 'X' icons) in this codebase are consistently missing `aria-label` attributes, making them inaccessible to screen readers.
**Action:** When working on navigation or modal components, always verify and add descriptive `aria-label` attributes to any button that relies solely on an icon for visual context.

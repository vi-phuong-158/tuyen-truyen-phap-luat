# Bolt's Journal

This journal tracks critical performance learnings.

## 2024-05-24 - Resource Loading Race Condition
**Learning:** When adding `defer` to an external library script (like Lucide icons), inline scripts that depend on it must be wrapped in `DOMContentLoaded` or they might execute before the library is loaded.
**Action:** Always wrap dependent inline initialization code in `document.addEventListener('DOMContentLoaded', ...)` when optimizing script loading with `defer`.

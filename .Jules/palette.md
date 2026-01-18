## 2026-01-14 - Vanilla JS Focus Timing
**Learning:** When managing focus in vanilla JS modals using Tailwind's `hidden` class, a small delay (`setTimeout`) is required after removing the class before `.focus()` works reliably, as the browser needs a layout cycle to register the element as interactive.
**Action:** Use a 50ms timeout when moving focus to newly revealed elements in this codebase.

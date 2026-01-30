## 2026-01-30 - DOM XSS in Manual HTML Construction
**Vulnerability:** Found a DOM-based Cross-Site Scripting (XSS) vulnerability in the chat interface where user input was interpolated directly into an HTML string using template literals (`${query}`) and inserted via `insertAdjacentHTML`.
**Learning:** The project relies on vanilla JavaScript and manual HTML string construction without a framework's built-in sanitization (like React or Vue provides). This makes it highly susceptible to XSS if input isn't manually escaped.
**Prevention:** Always use a helper function like `escapeHtml()` before interpolating user input into HTML strings. Better yet, use `textContent` when possible to set text, which automatically escapes HTML.

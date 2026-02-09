## 2024-05-23 - Dynamic ARIA Label Management
**Learning:** `data-i18n` attribute only updates `innerText`. Elements relying on `aria-label` for accessibility (like icon-only buttons) retain their default language label unless explicitly updated in the language switcher logic.
**Action:** When adding multilingual support, always check if `aria-label` or `placeholder` attributes need to be updated dynamically alongside text content. Use a mapping array in `setLanguage` to handle these attributes.

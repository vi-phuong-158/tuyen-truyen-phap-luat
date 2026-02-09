from playwright.sync_api import sync_playwright
import time

def verify(page):
    # Hook console
    page.on("console", lambda msg: print(f"Browser Console: {msg.text}"))
    page.on("pageerror", lambda exc: print(f"Browser Error: {exc}"))

    page.goto("http://localhost:8080/index.html")

    # Wait for things to settle
    time.sleep(2)

    # Check if a translation worked (e.g. Home button)
    # The default text is "Trang chủ" in HTML.
    # The script sets it to "Trang chủ" (VI).
    # Let's switch language to EN to verify script logic!

    # Click English button
    # id="lang-btn-en"
    page.click("#lang-btn-en")
    time.sleep(1)

    # Check if text changed
    # data-i18n="home" -> "Home"
    home_link = page.locator('[data-i18n="home"]').first
    print(f"Home link text: {home_link.inner_text()}")

    if home_link.inner_text() == "Home":
        print("SUCCESS: Language switch worked! Scripts are running.")
    else:
        print("FAILURE: Language switch did not work.")

    page.screenshot(path="verification.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        verify(page)
        browser.close()

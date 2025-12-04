from playwright.sync_api import sync_playwright

def verify_light_theme():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the app (assuming it's running on localhost:5173 which is Vite's default)
        try:
            page.goto("http://localhost:5173")

            # Wait for content to load
            page.wait_for_selector(".hero-section")

            # Take a screenshot of the hero section
            page.screenshot(path="verification/light_theme_verification.png", full_page=True)
            print("Screenshot taken: verification/light_theme_verification.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_light_theme()

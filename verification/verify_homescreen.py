from playwright.sync_api import sync_playwright

def verify_homescreen():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # Wait a bit for the server to start (though usually fast)
            page.goto("http://localhost:5173")

            # Wait for key elements to be visible
            page.wait_for_selector(".navbar")
            page.wait_for_selector(".hero-section")
            page.wait_for_selector(".features-section")

            # Take a screenshot of the top part (Hero)
            page.screenshot(path="verification/homescreen_hero.png")

            # Scroll down to features and take another screenshot
            features = page.locator(".features-section")
            features.scroll_into_view_if_needed()
            page.screenshot(path="verification/homescreen_features.png")

            # Scroll down to steps and take another screenshot
            steps = page.locator(".steps-section")
            steps.scroll_into_view_if_needed()
            page.screenshot(path="verification/homescreen_steps.png")

            print("Screenshots taken successfully")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_homescreen()

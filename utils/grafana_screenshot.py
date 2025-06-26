from playwright.sync_api import sync_playwright
from PIL import Image
import os
import time

def capture_grafana_dashboard(url, output_path, dashboard_uid, username="admin", password="admin"):
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Login
        page.goto(f"{url}/login")
        page.fill('input[name="user"]', username)
        page.fill('input[name="password"]', password)
        page.click('button[type="submit"]')
        page.wait_for_timeout(2000)

        # Navigate to the dashboard using UID
        dashboard_url = f"{url}/d/{dashboard_uid}?orgId=1&from=now-5m&to=now"
        page.goto(dashboard_url)
        page.wait_for_timeout(5000)  # Let it render

        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        page.screenshot(path=output_path, full_page=True)

        browser.close()
        print(f"✅ Screenshot saved to {output_path}")

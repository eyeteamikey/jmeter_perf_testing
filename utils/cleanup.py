import shutil
import os

REPORT_PATHS = [
    "reports/volume",
    "reports/stress",
    "reports/spike",
    "reports/endurance",
    "reports/scalability",
    "reports/advanced"
]

def clean_reports():
    for path in REPORT_PATHS:
        if os.path.exists(path):
            shutil.rmtree(path)
            print(f"Removed: {path}")
        os.makedirs(path)
        print(f"Created empty folder: {path}")

if __name__ == "__main__":
    clean_reports()

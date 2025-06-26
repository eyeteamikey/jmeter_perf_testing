import argparse
import subprocess
import os
import datetime
from utils.file_utils import clean_directory
from utils.config_loader import ConfigLoader
from utils.grafana_screenshot import capture_grafana_dashboard

# Parse CLI arguments
parser = argparse.ArgumentParser(description="Run a JMeter test.")
parser.add_argument("--test-type", required=True, help="Test type (e.g., stress, load, spike)")
parser.add_argument("--env", default="config/env_config.yml", help="Path to environment config YAML")
parser.add_argument("--skip-monitoring", action="store_true", help="Disable InfluxDB/Grafana metrics")
args = parser.parse_args()

# Load configuration
config = ConfigLoader(env=args.env)
paths = config.paths
settings = config.env_config

def run_test(test_type):
    print("Loaded test scripts:", paths["scripts"].keys())
    print("Loaded test reports:", paths["reports"].keys())

    if test_type not in paths["scripts"] or test_type not in paths["reports"]:
        print(f"❌ Invalid test type: {test_type}")
        return

    # Pick appropriate JMX file
    base_jmx_path = paths["scripts"][test_type]
    if args.skip_monitoring:
        nometrics_jmx = base_jmx_path.replace(".jmx", "_nometrics.jmx")
        jmx_path = nometrics_jmx if os.path.exists(nometrics_jmx) else base_jmx_path
    else:
        jmx_path = base_jmx_path

    # Timestamped report folder
    timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    report_dir = os.path.join(paths["reports"][test_type], f"run_{timestamp}")
    os.makedirs(report_dir, exist_ok=True)
    jtl_file = os.path.join(report_dir, "results.jtl")

    # Clean previous data
    clean_directory(report_dir)

    # Construct JMeter CLI command
    cmd = [
        settings["jmeter_path"],
        "-n",
        "-t", jmx_path,
        "-l", jtl_file,
        "-e",
        "-o", report_dir,
        f"-Jthreads={settings['threads']}",
        f"-Jramp_up={settings['ramp_up']}",
        f"-Jloops={settings['loops']}",
        f"-Jbase_url={settings['base_url']}"
    ]

    print(f"\n▶ Running test: {test_type}")
    print("📄 JMX path:", jmx_path)
    print("📁 Report output:", report_dir)
    print("🔧 Command:", " ".join(cmd))

    try:
        subprocess.run(cmd, check=True)
        print(f"✅ Test '{test_type}' completed successfully.")
    except subprocess.CalledProcessError as e:
        print(f"❌ Test '{test_type}' failed with exit code {e.returncode}.")
        return
    except FileNotFoundError:
        print("❌ JMeter not found. Please check your path in config.")

    # Only capture screenshot if monitoring is enabled
    if not args.skip_monitoring:
        grafana = settings.get("grafana", {})
        capture_grafana_dashboard(
            url=grafana.get("url"),
            dashboard_uid=grafana.get("dashboard_uid"),
            username=grafana.get("admin_user"),
            password=grafana.get("admin_password"),
            output_path=os.path.join(report_dir, "grafana_dashboard.png")
        )
    else:
        print("⚠️ Monitoring disabled. Skipping Grafana screenshot.")

if __name__ == "__main__":
    run_test(args.test_type)

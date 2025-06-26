import argparse
import subprocess
import os
import datetime
from utils.file_utils import clean_directory
from utils.config_loader import ConfigLoader


# Parse CLI arguments
parser = argparse.ArgumentParser(description="Run a JMeter test.")
parser.add_argument("--test-type", required=True, help="Test type (e.g., stress, load, spike)")
parser.add_argument("--env", default="config/env_config.yml", help="Path to environment config YAML")
parser.add_argument("--skip-monitoring", action="store_true", help="Disable InfluxDB/Grafana metrics")
args = parser.parse_args()

# Initialize ConfigLoader with the selected environment config
config = ConfigLoader(env=args.env)
paths = config.paths
settings = config.env_config


def run_test(test_type):
    print("Loaded test scripts:", paths["scripts"].keys())
    print("Loaded test reports:", paths["reports"].keys())

    if test_type not in paths["scripts"] or test_type not in paths["reports"]:
        print(f"Invalid test type: {test_type}")
        return

    jmx_path = paths["scripts"][test_type]

    # Timestamped report directory
    timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    report_dir = os.path.join(paths["reports"][test_type], f"run_{timestamp}")
    os.makedirs(report_dir, exist_ok=True)
    jtl_file = os.path.join(report_dir, "results.jtl")

    # Clean directory
    clean_directory(report_dir)

    # Construct JMeter command
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

    if args.skip_monitoring:
        print("Skipping backend listener integration.")
    else:
        print("Backend listener will be active.")

    print(f"Running test: {test_type}")
    print("Command:", " ".join(cmd))

    try:
        subprocess.run(cmd, check=True)
        print(f"Test '{test_type}' completed successfully.")
    except subprocess.CalledProcessError as e:
        print(f"Test '{test_type}' failed with exit code {e.returncode}.")
    except FileNotFoundError:
        print("JMeter not found. Please check the path in config settings.")

run_test(args.test_type)

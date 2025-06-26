import argparse
import subprocess
import os
import yaml
from utils.file_utils import clean_directory

# Load YAML config files
def load_yaml(path):
    with open(path, 'r') as f:
        return yaml.safe_load(f)

paths = load_yaml('config/paths.yml')
settings = load_yaml('config/env_config.yml')

def run_test(test_type):
    print("Loaded test scripts:", paths["scripts"].keys())
    print("Loaded test reports:", paths["reports"].keys())
    if test_type not in paths["scripts"] or test_type not in paths["reports"]:
        print(f"Invalid test type: {test_type}")
        return

    jmx_path = paths["scripts"][test_type]
    report_dir = paths["reports"][test_type]
    jtl_file = os.path.join(report_dir, "results.jtl")

    # Clean the report directory before running
    clean_directory(report_dir)

    # Construct the JMeter command
    cmd = [
        settings["jmeter_path"],
        "-n",
        "-t", jmx_path,
        "-l", jtl_file,
        "-e",
        "-o", report_dir
    ]

    print(f"Running test: {test_type}")
    print("Command:", " ".join(cmd))

    try:
        subprocess.run(cmd, check=True)
        print(f"Test '{test_type}' completed successfully.")
    except subprocess.CalledProcessError as e:
        print(f"Test '{test_type}' failed with exit code {e.returncode}.")
    except FileNotFoundError:
        print("JMeter not found. Please check the path in config/settings.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Run a JMeter test by type.")
    parser.add_argument("type", help="Test type (e.g. stress, volume, load, spike, endurance, scalability)")
    args = parser.parse_args()

    run_test(args.type)
# This script runs a JMeter test based on the provided type.
# It cleans the report directory before running the test and constructs the JMeter command accordingly.
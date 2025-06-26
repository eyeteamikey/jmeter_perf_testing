import yaml
import os

def load_config(config_path="config/env_config.yml"):
    with open(config_path, "r") as f:
        return yaml.safe_load(f)

# Usage:
# config = load_config()
# print(config["base_url"])

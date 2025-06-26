import yaml

class ConfigLoader:
    def __init__(self, env="default", env_config_path="config/env_config.yml", paths_path="config/paths.yml"):
        self.env_config = self.load_yaml(env_config_path)
        self.paths = self.load_yaml(paths_path)
        self.env = env

    def load_yaml(self, path):
        with open(path, "r") as f:
            return yaml.safe_load(f)

    def get_jmeter_path(self):
        return self.env_config.get("jmeter_path")

    def get_test_parameters(self):
        return {
            "threads": self.env_config.get("threads", 10),
            "ramp_up": self.env_config.get("ramp_up", 10),
            "loops": self.env_config.get("loops", 1),
            "base_url": self.env_config.get("base_url", "http://localhost")
        }

    def get_script_path(self, test_type):
        return self.paths.get("scripts", {}).get(test_type)

    def get_report_path(self, test_type):
        return self.paths.get("reports", {}).get(test_type)

# JMeter Performance Testing Suite

This repository contains a modular, CI-integrated performance testing suite using **Apache JMeter**, built for API performance analysis with CI/CD integration via **GitHub Actions**. It supports multiple test scenarios, monitoring integration (Grafana/InfluxDB), and local or containerized execution.

---

## Project Structure

```
jmeter_perf_testing/
├── .github/workflows/perf-test.yml       # GitHub Actions CI workflow
├── config/
│   └── env_config.yml                    # Configurable test parameters
├── test_scripts/
│   ├── stress/
│   │   └── basic_stress_test.jmx
│   ├── advanced/
│   │   └── spike_and_recovery_test.jmx
│   └── ...
├── reports/
│   └── <test_type>/run_YYYYMMDD_HHMMSS/  # Test outputs (JTL + HTML + screenshots)
├── utils/
│   ├── config_loader.py
│   ├── grafana_screenshot.py
│   └── file_utils.py
├── run_test.py                           # CLI for test execution
└── requirements.txt                      # Python dependencies
```

---

## Configuration (`config/env_config.yml`)

```yaml
threads: 50
ramp_up: 30
loops: 10
base_url: "https://fakerestapi.azurewebsites.net"

jmeter_path: "C:/.../apache-jmeter-5.6.3/bin/jmeter.bat"

grafana:
  url: "http://localhost:3000"
  dashboard_uid: "abc123"
  admin_user: "admin"
  admin_password: "admin"
```

---

## Local Test Execution

1. Ensure JMeter is installed and path is correct in config or env.
2. Create virtual environment and install requirements:
   ```bash
   python -m venv venv
   source venv/bin/activate  # or venv\Scripts\activate
   pip install -r requirements.txt
   ```
3. Run test:
   ```bash
   python run_test.py --test-type spikeandrecovery --env config/env_config.yml --skip-monitoring
   ```

---

## Docker Services (Optional)

To monitor metrics via Grafana + InfluxDB, you can enable:

```yaml
services:
  influxdb:
    image: influxdb
    ports: ["8086:8086"]

  grafana:
    image: grafana/grafana
    ports: ["3000:3000"]
```

---

## Test Types

| Name               | Description                               |
| ------------------ | ----------------------------------------- |
| `stress`           | High load with max threads and short ramp |
| `load`             | Steady growth of users                    |
| `spikeandrecovery` | Sudden burst and drop                     |
| `volume`           | Many requests over time                   |
| `timeout_retry`    | Handle failures/retries                   |

---

## GitHub Actions CI/CD

**Workflow File:** `.github/workflows/perf-test.yml`

Main highlights:

- Python + Playwright setup
- Downloads & extracts JMeter
- Runs specified test
- Uploads JTL, PNG, and HTML as artifacts

```yaml
- name: Upload JMeter Results as Artifact
  uses: actions/upload-artifact@v4
  with:
    name: jmeter-results
    path: |
      reports/**/*.jtl
      reports/**/*.png
      reports/**/*.html
```

> Ensure the JMeter report HTML output is complete before artifact upload.

---

## Dependencies

- Python 3.10+
- JMeter 5.6.3
- `playwright`, `pyyaml`
- Grafana (optional)
- InfluxDB (optional)

---

Let me know if you’d like this `README.md` pushed into your repo or want the structure split into sections for internal docs!

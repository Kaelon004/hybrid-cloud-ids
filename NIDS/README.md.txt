# NIDS (nids-script.py)

## Overview
The Network-based Intrusion Detection System (NIDS) monitors network traffic in real time to detect anomalies such as DoS attacks and SYN flood attempts. It operates by capturing and analyzing packets on specified network interfaces.

## Features
- **Packet Capture**: Monitors network traffic using `pyshark`.
- **DoS Detection**: Identifies potential DoS attacks based on UDP traffic thresholds.
- **SYN Flood Detection**: Detects SYN floods by monitoring TCP packets with SYN flags.
- **Dashboard Integration**: Sends structured alerts to the centralized dashboard for real-time monitoring.

## Requirements
- Python 3.8+
- Dependencies:
  - `pyshark`
  - `colorama`
  - `psutil`
  - `requests`

Install all required packages using:
```bash
pip install -r requirements.txt
```

## Setup Instructions

### Step 1: Configure the NIDS
1. Specify the network interfaces to monitor in the `INTERFACES` variable in `nids-script.py`. Example:
   ```python
   INTERFACES = ['eth0']
   ```
2. Adjust the detection thresholds in the `ALERT_RULES` dictionary if necessary.

### Step 2: Run the NIDS
Start the NIDS using the following command:
```bash
python nids-script.py
```

The script will begin monitoring the specified network interfaces for anomalies.

## Usage
- **Anomaly Detection**: Monitors network traffic for DoS and SYN flood attacks.
- **Alert Reporting**: Sends detected anomalies to the centralized dashboard.
- **Logs**: Saves detected alerts and system activity in `nids_alerts.log`.

## Integration
- The NIDS integrates with:
  - **Centralized Dashboard**: Alerts are sent to the dashboard for visualization.
  - **Attack Simulation Tools**: Used for validating detection capabilities.

## Example Workflow
1. Start the centralized dashboard.
2. Launch the NIDS on a host monitoring network traffic.
3. Simulate attacks using the provided tools.
4. Monitor the dashboard for alerts.

## Logs and Debugging
- Logs are saved in `nids_alerts.log`.
- Debugging details include captured packet data, alert triggers, and errors encountered during monitoring.

## Notes
- Ensure the `pyshark` library is correctly installed and configured.
- The default dashboard endpoint is `http://127.0.0.1:5000/api/add_alert`. Update this in the script if needed.
- The NIDS is designed for continuous operation on dedicated monitoring interfaces.

## License
This component is part of the Hybrid Cloud-based IDS System and is licensed under the MIT License.

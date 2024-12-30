# HIDS Agent (cs-super-agent.py)

## Overview
The HIDS Agent is responsible for monitoring host-level activities, including file integrity and login attempts, and reporting detected anomalies to the HIDS Manager. It operates as a lightweight daemon on the host machine.

## Features
- **File Integrity Monitoring**: Tracks changes to critical files and directories.
- **Log Analysis**: Monitors authentication logs for failed login attempts or brute-force attacks.
- **Event Reporting**: Sends detected events to the HIDS Manager.
- **Resource Monitoring**: Logs CPU and memory usage for performance tracking.

## Requirements
- Python 3.8+
- Dependencies:
  - `psutil`
  - `socket`
  - `json`
  - `logging`
  - `threading`
  - `watchdog`

Install all required packages using:
```bash
pip install -r requirements.txt
```

## Setup Instructions

### Step 1: Configure the HIDS Agent
1. Modify the `HIDS_MANAGER_HOST` and `HIDS_MANAGER_PORT` variables in `cs-super-agent.py` to match the HIDS Manager's IP and port.
2. Specify the paths to monitor by updating the `MONITORED_PATHS` variable. Default paths include `/home/samuel/Documents` and `/etc`.
3. Ensure the `MONITORED_LOG_PATHS` variable is set to the appropriate log file paths (e.g., `/var/log/auth.log`).

### Step 2: Run the HIDS Agent
Start the HIDS Agent using the following command:
```bash
python cs-super-agent.py
```

The agent will monitor specified paths and logs, sending detected anomalies to the HIDS Manager.

## Usage
- **File Monitoring**: Tracks file creation, modification, deletion, and movement.
- **Log Monitoring**: Scans authentication logs for suspicious activities.
- **Event Reporting**: Sends structured event data to the HIDS Manager.
- **Logs**: Saves activity and debug logs in `s_hids_agent.log`.

## Integration
- The HIDS Agent integrates seamlessly with:
  - **HIDS Manager**: Receives and processes events from the agent.
  - **Centralized Dashboard**: Displays alerts sent via the HIDS Manager.

## Example Workflow
1. Start the HIDS Manager.
2. Run the HIDS Agent on one or more host machines.
3. Monitor the centralized dashboard for alerts.

## Logs and Debugging
- Logs are saved in `s_hids_agent.log`.
- Debugging details include event detection, file changes, and resource usage metrics.

## Notes
- The agent's default configuration monitors critical system files and directories. Customize as needed for your environment.
- Ensure connectivity between the HIDS Agent and the HIDS Manager (check firewalls and network configurations).

## License
This component is part of the Hybrid Cloud-based IDS System and is licensed under the MIT License.

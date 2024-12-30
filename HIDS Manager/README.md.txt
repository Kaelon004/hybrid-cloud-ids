# HIDS Manager (hmscript.py)

## Overview
The HIDS Manager is a central component of the Host-based Intrusion Detection System (HIDS). It receives and processes events from distributed HIDS Agents, calculates metrics such as latency and throughput, and forwards alerts to the centralized dashboard for visualization.

## Features
- **Event Reception**: Listens for incoming events from HIDS Agents over a TCP connection.
- **Latency and Throughput Calculation**: Measures and logs the delay and event processing rate.
- **Dashboard Integration**: Sends structured alerts to the centralized dashboard for real-time monitoring.
- **Event Queue Management**: Handles event processing using a thread-safe queue.

## Requirements
- Python 3.8+
- Dependencies:
  - `requests`
  - `socket`
  - `json`
  - `logging`
  - `threading`

Install all required packages using:
```bash
pip install -r requirements.txt
```

## Setup Instructions

### Step 1: Configure the HIDS Manager
1. Ensure the dashboard backend is running at `http://127.0.0.1:5000`.
2. Modify `hmscript.py` if needed to match your network configuration (e.g., host and port).

### Step 2: Run the HIDS Manager
Start the HIDS Manager using the following command:
```bash
python hmscript.py
```

The manager will start listening on the configured IP and port (default: `0.0.0.0:9000`).

## Usage
- The HIDS Manager continuously listens for incoming events from the HIDS Agents.
- Events are processed and sent to the dashboard for real-time alerting.
- Logs are stored in `hids_manager_debug.log` for debugging and record-keeping.

## Integration
- The HIDS Manager is designed to work in conjunction with:
  - **HIDS Agents**: These report host-level anomalies.
  - **Centralized Dashboard**: Visualizes alerts.

## File Structure
- `hmscript.py`: Main script for the HIDS Manager.

## Example Workflow
1. Start the HIDS Manager.
2. Launch one or more HIDS Agents.
3. Monitor the dashboard for alerts sent by the HIDS Manager.

## Logs and Debugging
- Logs are saved in `hids_manager_debug.log`.
- Debugging information includes event reception details, latency measurements, and any errors encountered during processing.

## Notes
- Ensure the `requests` module is correctly installed for dashboard integration.
- The default dashboard endpoint is `http://127.0.0.1:5000/api/add_alert`. Modify this in the script if your setup uses a different address.

## License
This component is part of the Hybrid Cloud-based IDS System and is licensed under the MIT License.

# Attack Simulation Tools (dos_up.py & brutef.py)

## Overview
The attack simulation tools provide scripts for generating network and host-based attacks to test the detection capabilities of the HIDS and NIDS components. These include:

1. **DoS Attack Simulation** (`dos_up.py`): Simulates a UDP-based Denial of Service attack.
2. **Brute-force Attack Simulation** (`brutef.py`): Simulates SSH brute-force attacks using a password list.

## Features
### DoS Attack Simulation (`dos_up.py`)
- Sends high volumes of UDP packets to a target.
- Configurable packet size, target IP/port, and duration.

### Brute-force Attack Simulation (`brutef.py`)
- Attempts SSH login with a list of passwords.
- Validates the SSH password file before starting the attack.

## Requirements
- Python 3.8+
- Dependencies:
  - `paramiko`
  - `socket`
  - `argparse`
  - `threading`

Install all required packages using:
```bash
pip install -r requirements.txt
```

## Setup Instructions

### Step 1: Configure the Scripts
#### `dos_up.py`
1. Modify the script arguments to set the target IP, port, and other parameters.

#### `brutef.py`
1. Ensure a valid SSH password list file is available.
2. Update the target host, port, username, and password file path when running the script.

### Step 2: Run the Scripts
#### Run the DoS Attack Simulation:
```bash
python dos_up.py --ip <TARGET_IP> --port <TARGET_PORT> --packet-size <PACKET_SIZE> --threads <NUM_THREADS> --duration <DURATION>
```

Example:
```bash
python dos_up.py --ip 192.168.1.10 --port 80 --packet-size 1024 --threads 50 --duration 60
```

#### Run the Brute-force Attack Simulation:
```bash
python brutef.py <HOST> <PORT> <USERNAME> <PASSWORD_FILE>
```

Example:
```bash
python brutef.py 192.168.1.10 22 root passwords.txt
```

## Usage
- Use these scripts to validate the detection and alerting capabilities of the HIDS and NIDS components.
- Monitor the centralized dashboard for alerts triggered by these simulated attacks.

## Integration
- The tools work in conjunction with:
  - **NIDS**: Detects the DoS attack.
  - **HIDS**: Detects brute-force login attempts.

## Example Workflow
1. Run the NIDS and HIDS components.
2. Execute the attack simulation tools.
3. Observe the alerts generated on the centralized dashboard.

## Notes
- Ensure the target machine is configured to allow incoming traffic for testing.
- Use these tools responsibly and only in controlled environments.
- Adjust parameters such as packet size, number of threads, and duration to simulate varying attack intensities.

## License
These tools are part of the Hybrid Cloud-based IDS System and are licensed under the MIT License.

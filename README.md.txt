# Hybrid Cloud-based IDS System (HIDS + NIDS)

## Overview
This project is a hybrid Intrusion Detection System (IDS) that integrates both Host-based IDS (HIDS) and Network-based IDS (NIDS) functionalities into a cloud-based environment. It is designed to provide advanced usability for junior analysts with minimal technical expertise. The system includes the following core components:

1. **HIDS**: Monitors host-level activities such as file integrity and authentication logs.
2. **NIDS**: Monitors network traffic to detect anomalies like DoS and SYN flood attacks.
3. **Centralized Dashboard**: A real-time, user-friendly interface for monitoring and visualizing alerts.
4. **Seed Emulator Network**: Simulates a real-world network environment for testing and validation.
5. **Attack Simulation Tools**: Custom scripts to simulate DoS and brute-force attacks for testing IDS capabilities.

## Features
- **HIDS Functionality**: Detects unauthorized file modifications and brute-force attempts.
- **NIDS Functionality**: Detects network-level threats such as DoS attacks and SYN floods.
- **Centralized Dashboard**: Provides real-time alerts, visualizations, and actionable insights.
- **Simulated Network Environment**: Facilitates testing with a realistic network topology.
- **Custom Development**: All components are custom-built using Python, Flask, and other libraries.

## Requirements

### General Requirements
- Python 3.8+
- Virtual Environment (`venv`) for dependency management

### Python Libraries
Install the following libraries in your Python environment:
- `pyshark`
- `colorama`
- `flask`
- `flask-cors`
- `psutil`
- `requests`
- `watchdog`

Run the following command to install all required packages:
```bash
pip install -r requirements.txt
```

### Other Tools
- Seed Emulator framework

## System Architecture
The system consists of the following:

- **VM1**: Runs the NIDS, HIDS Manager, and Centralized Dashboard.
- **VM2**: Hosts the HIDS Agent.
- **VM3**: Simulates attacks (e.g., brute-force and DoS).

### Network Adapter Setup
The hypervisor setup involves two network adapters:

1. **Adapter 1: Bridged Adapter**
   - Provides access to the live internet for components that depend on external connectivity.

2. **Adapter 2: Internal Network**
   - Ensures secure communication between the three VMs while isolating them from the external network in case of security incidents.

## Setup Instructions

### Step 1: Set Up Virtual Machines
Ensure the virtual machines (VMs) are configured as follows:
- **VM1**: NIDS, HIDS Manager, and Dashboard
- **VM2**: HIDS Agent
- **VM3**: Attack simulation tools

### Step 2: Configure the Environment
1. Clone the project repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

### Step 3: Run Individual Components
1. **Run the Seed Emulator Network**:
   ```bash
   python network.py
   ```
2. **Run the NIDS**:
   ```bash
   python nids-script.py
   ```
3. **Run the HIDS Manager**:
   ```bash
   python hmscript.py
   ```
4. **Run the HIDS Agent**:
   ```bash
   python cs-super-agent.py
   ```
5. **Run the Centralized Dashboard Backend**:
   ```bash
   python app2.py
   ```
6. **Open the Dashboard Frontend**:
   Open `frontend.html` in a browser.
7. **Run the Attack Simulation Tools**:
   ```bash
   python dos_up.py
   python brutef.py <host> <port> <username> <password_file>
   ```

### Testing
- Use the Seed Emulator to simulate traffic and validate system functionality.
- Run attack simulation scripts to test detection capabilities.

## Usage
- Access the dashboard at `http://127.0.0.1:5000`.
- Monitor alerts in real-time, categorized by severity and type.

## File Structure
- `nids-script.py`: NIDS implementation.
- `hmscript.py`: HIDS Manager.
- `cs-super-agent.py`: HIDS Agent.
- `app2.py`: Backend for the dashboard.
- `frontend.html` and `app.js`: Frontend for the dashboard.
- `dos_up.py`: DoS attack simulation.
- `brutef.py`: Brute-force attack simulation.
- `network.py`: Seed Emulator Network.

## Contributions
Contributions to the project are welcome. Please fork the repository, make your changes, and submit a pull request.

## License
This project is open-source and licensed under the MIT License.

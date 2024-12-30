# Seed Emulator Network (network.py)

## Overview
The Seed Emulator Network provides a simulated network environment for testing the functionality of the HIDS and NIDS components. It emulates realistic network topologies, enabling effective validation of the system’s detection capabilities.

## Features
- **Custom Topology**: Configurable autonomous systems (AS) and networks.
- **Realistic Environment**: Includes hosts, routers, and services.
- **Docker-based Deployment**: Easy setup and execution using Docker and Docker Compose.

## Requirements
- Docker
- Docker Compose
- Python 3.8+
- Seed Emulator Framework
- Dependencies:
  - `seedemu`
  - `web3`

Install additional tools using:
```bash
sudo apt-get install docker.io docker-compose python3-pip
pip install web3
```

## Setup Instructions

### Step 1: Clone and Prepare the Seed Emulator Repository
1. Clone the Seed Emulator repository:
   ```bash
   git clone <seed-emulator-repo-url>
   ```
2. Update permissions:
   ```bash
   sudo chmod -R 777 seed-emulator
   ```
3. Source the development environment:
   ```bash
   source development.env
   ```

### Step 2: Configure and Run the Network Script
1. Navigate to the `examples` directory:
   ```bash
   cd examples
   ```
2. Create a project directory and copy `network.py` into it:
   ```bash
   mkdir project
   cp ../path/to/network.py project
   cd project
   ```
3. Execute the network script:
   ```bash
   python3 network.py
   ```

### Step 3: Build and Deploy the Network
1. Navigate to the output directory:
   ```bash
   cd output
   ```
2. Build and start the Docker containers:
   ```bash
   sudo docker-compose build
   sudo docker-compose up
   ```

### Step 4: Start the Client Interface
1. Open a new terminal and navigate to the Seed Emulator client directory:
   ```bash
   cd seed-emulator/client
   ```
2. Build and start the client interface:
   ```bash
   sudo docker-compose build
   sudo docker-compose up
   ```

## Usage
- Use the Seed Emulator to simulate network traffic and interactions.
- Integrate with HIDS and NIDS to validate anomaly detection.

## Integration
- **NIDS**: Monitors traffic within the simulated network.
- **HIDS**: Operates on simulated hosts.
- **Attack Simulation Tools**: Generate attacks to validate system responses.

## Example Workflow
1. Deploy the Seed Emulator network.
2. Launch the HIDS and NIDS components.
3. Simulate attacks and monitor the centralized dashboard for alerts.

## Notes
- Ensure Docker and Docker Compose are installed and running.
- Customize the `network.py` script to modify the network topology.
- Check the Seed Emulator documentation for advanced configurations.

## License
This component is part of the Hybrid Cloud-based IDS System and is licensed under the MIT License.

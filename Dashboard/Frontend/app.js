// Fetch and display alerts from the backend
let alertChart = null;

// Function to display error messages
function displayErrorMessage(message) {
    const errorDiv = document.getElementById('errorMessage') || createErrorMessageElement();
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}

// Create error message element if it doesn't exist
function createErrorMessageElement() {
    const errorDiv = document.createElement('div');
    errorDiv.id = 'errorMessage';
    errorDiv.style.color = 'red';
    errorDiv.style.marginBottom = '10px';
    document.body.insertBefore(errorDiv, document.body.firstChild);
    return errorDiv;
}

// Fetch initial alerts
async function fetchAlerts() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/alerts');
        const alerts = await response.json();
        populateTable(alerts);
        renderChart(alerts);
    } catch (error) {
        console.error('Error fetching alerts:', error);
        displayErrorMessage('Failed to fetch alerts');
    }
}

// Populate table with alert data
function populateTable(alerts) {
    const table = document.getElementById('alertTable');
    // Clear existing rows before adding new ones
    table.innerHTML = '';
    alerts.forEach(alert => {
        const row = document.createElement('tr');
        // Add severity-based class for color coding
        row.classList.add(`severity-${alert.severity.toLowerCase()}`);
        row.innerHTML = `
            <td>${new Date(alert.timestamp).toLocaleString()}</td>
            <td>${alert.source_ip}</td>
            <td>${alert.destination_ip}</td>
            <td>${alert.protocol}</td>
            <td>${alert.severity}</td>
            <td>${alert.message}</td>
        `;
        table.appendChild(row);
    });
}

// Render chart using Chart.js
function renderChart(alerts) {
    const ctx = document.getElementById('alertChart').getContext('2d');
    const severities = alerts.reduce((acc, alert) => {
        acc[alert.severity] = (acc[alert.severity] || 0) + 1;
        return acc;
    }, {});

    // Destroy existing chart if it exists
    if (alertChart) {
        alertChart.destroy();
    }

    // Color mapping for severity
    const severityColors = {
        'Low': '#36a2eb',     // Blue
        'Medium': '#ffce56',  // Yellow
        'High': '#ff6384'     // Red
    };

    alertChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(severities),
            datasets: [{
                data: Object.values(severities),
                backgroundColor: Object.keys(severities).map(sev => severityColors[sev])
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Alert Severity Distribution'
            }
        }
    });
}

// Set up Server-Sent Events for real-time updates
function setupAlertStream() {
    const eventSource = new EventSource('http://127.0.0.1:5000/api/stream_alerts');

    eventSource.onmessage = function(event) {
        try {
            const newAlert = JSON.parse(event.data);
            
            // Add new alert to table
            const table = document.getElementById('alertTable');
            const row = document.createElement('tr');
            row.classList.add(`severity-${newAlert.severity.toLowerCase()}`);
            row.innerHTML = `
                <td>${new Date(newAlert.timestamp).toLocaleString()}</td>
                <td>${newAlert.source_ip}</td>
                <td>${newAlert.destination_ip}</td>
                <td>${newAlert.protocol}</td>
                <td>${newAlert.severity}</td>
                <td>${newAlert.message}</td>
            `;
            // Insert new row at the top of the table
            table.insertBefore(row, table.firstChild);

            // Refetch and re-render chart to update severity distribution
            fetchAlerts();
        } catch (error) {
            console.error('Error processing new alert:', error);
        }
    };

    eventSource.onerror = function(error) {
        console.error('EventSource failed:', error);
        eventSource.close();
        displayErrorMessage('Lost connection to alert stream');
    };
}

// Initialize the dashboard
function initDashboard() {
    // Fetch initial alerts
    fetchAlerts();
    
    // Set up real-time alert streaming
    setupAlertStream();
}

// Add a refresh button to fetch metrics
function fetchMetrics() {
    fetch('http://127.0.0.1:5000/api/metrics')
        .then(response => response.json())
        .then(metrics => {
            console.log('Metrics:', metrics);
            document.getElementById('metrics').innerHTML = `
                <p>Throughput: ${metrics.throughput} events/second</p>
                <p>CPU Usage: ${metrics.resource_usage.cpu}%</p>
                <p>Memory Usage: ${metrics.resource_usage.memory}%</p>
            `;
        })
        .catch(error => console.error('Error fetching metrics:', error));
}

window.addEventListener('load', fetchMetrics);

// Start the dashboard when the page loads
window.addEventListener('load', initDashboard);





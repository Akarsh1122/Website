let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
    
    // Call function to fetch bus data and update map
    fetchBusData();
}

function fetchBusData() {
    // Simulate fetching bus data from GPS devices
    const buses = [
        { id: 'Bus101', position: { lat: -34.397, lng: 150.644 } },
        { id: 'Bus102', position: { lat: -34.407, lng: 150.654 } },
        { id: 'Bus103', position: { lat: -34.417, lng: 150.664 } }
    ];

    buses.forEach(bus => {
        new google.maps.marker.AdvancedMarkerElement({
            position: bus.position,
            map: map,
            title: bus.id,
        });
    });
}

function fetchBusHistory() {
    const historyData = [
        { routeId: 'Route1', busId: 'Bus101', departureTime: '08:00 AM', arrivalTime: '08:45 AM', status: 'On Time' },
        { routeId: 'Route2', busId: 'Bus102', departureTime: '09:00 AM', arrivalTime: '09:50 AM', status: 'Delayed' }
    ];

    const historyList = document.getElementById('history-list');
    historyList.innerHTML = ''; // Clear previous entries

    historyData.forEach(record => {
        const div = document.createElement('div');
        div.classList.add('history-record');
        
        div.innerHTML = `
            <strong>Route: ${record.routeId} | Bus ID: ${record.busId}</strong><br>
            Departure: ${record.departureTime} | Arrival: ${record.arrivalTime}<br>
            Status: <span class="${record.status === 'On Time' ? 'on-time' : 'delayed'}">${record.status}</span>
        `;
        
        historyList.appendChild(div);
    });
}

// FAQ Dialog Functions
document.getElementById('faq-button').onclick = function() {
    document.getElementById('faq-dialog').style.display = 'block';
};

function closeFAQ() {
    document.getElementById('faq-dialog').style.display = 'none';
}

// Fetch bus schedules
function fetchBusSchedules() {
    const scheduleList = document.getElementById('schedule-list');
    scheduleList.innerHTML = '';

    const busSchedules = [
        {
            routeId: 'Route1', 
            busId: 'Bus101', 
            stops: ['Stop A', 'Stop B', 'Stop C'], 
            timings: ['08:00 AM', '08:20 AM', '08:45 AM']
        },
        {
            routeId: 'Route2', 
            busId: 'Bus102', 
            stops: ['Stop D', 'Stop E'], 
            timings: ['09:00 AM', '09:30 AM']
        }
    ];

    busSchedules.forEach(schedule => {
        const div = document.createElement('div');
        div.classList.add('schedule-record');

        const stopsWithTimings = schedule.stops.map((stop, index) => `${stop} - ${schedule.timings[index]}`).join('<br>');

        div.innerHTML = `
            <strong>Route: ${schedule.routeId} | Bus ID: ${schedule.busId}</strong><br>
            Stops:<br> ${stopsWithTimings}
        `;
        
        scheduleList.appendChild(div);
    });
}

// Load bus schedules on page load
window.onload = function() {
    fetchBusSchedules();
};

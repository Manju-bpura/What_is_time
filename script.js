function updateTime() {
    const utcTimeElement = document.getElementById('utc-time');
    const localTimeElement = document.getElementById('local-time');
    const localTimeElement1 = document.getElementById('local-time1');
    const timeZoneSelect = document.getElementById('time-zone');

    // Get current UTC time
    const nowUtc = new Date();
    const utcHours = nowUtc.getUTCHours().toString().padStart(2, '0');
    const utcMinutes = nowUtc.getUTCMinutes().toString().padStart(2, '0');
    const utcSeconds = nowUtc.getUTCSeconds().toString().padStart(2, '0');
    const utcMilliseconds = nowUtc.getUTCMilliseconds().toString().padStart(3, '0');
    utcTimeElement.textContent = `UTC: ${utcHours}:${utcMinutes}:${utcSeconds}.${utcMilliseconds}`;

    // Get current local time based on the selected time zone
    const selectedTimeZone = timeZoneSelect.value;
    const localTime = new Date(
        nowUtc.toLocaleString('en-US', { timeZone: selectedTimeZone })
    );
    const localHours = localTime.getHours().toString().padStart(2, '0');
    const localMinutes = localTime.getMinutes().toString().padStart(2, '0');
    const localSeconds = localTime.getSeconds().toString().padStart(2, '0');
    const localMilliseconds = localTime.getMilliseconds().toString().padStart(3, '0');
    localTimeElement.textContent = `Time in ${selectedTimeZone}:/n ${localHours}:${localMinutes}:${localSeconds}.${localMilliseconds}`;
    localTimeElement1.textContent = `Time in india`;
}

// Update time continuously without pauses
setInterval(updateTime, 50); // Refresh every 50ms for smooth updates

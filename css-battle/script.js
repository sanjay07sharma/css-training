function updateClock() {
    const now = new Date();
    const digitalClock = document.getElementById('digital-clock');
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');

    // Digital Clock
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    digitalClock.textContent = `${hours}:${minutes}:${seconds}`;

    // Analog Clock
    const secondDegrees = now.getSeconds() * 6;
    const minuteDegrees = now.getMinutes() * 6 + secondDegrees / 60;
    const hourDegrees = now.getHours() * 30 + minuteDegrees / 12;

    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial call to set clock immediately
updateClock();

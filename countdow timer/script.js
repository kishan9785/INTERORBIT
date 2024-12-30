document.getElementById("startButton").addEventListener("click", function () {
    const dateInput = document.getElementById("date").value;
    const timeInput = document.getElementById("time").value;

    if (!dateInput || !timeInput) {
        alert("Please enter both date and time!");
        return;
    }

    const targetDateTime = new Date(`${dateInput}T${timeInput}:00`); // Append seconds for full ISO format
    if (isNaN(targetDateTime.getTime())) {
        alert("Invalid date or time!");
        return;
    }

    startCountdown(targetDateTime);
});

function startCountdown(targetDate) {
    const timerElement = document.getElementById("timer");

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            timerElement.textContent = "Time's up!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown(); // Call immediately to avoid a delay
    const interval = setInterval(updateCountdown, 1000);
}

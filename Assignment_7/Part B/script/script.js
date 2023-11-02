const timerLabel = document.getElementById('timer');
// const datePicker = document.getElementById('datePicker');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let interval; // Used with setInterval
let seconds = 0;

async function updateTimer() { // Async and Await
    return new Promise(resolve => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        const formattedTime = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        timerLabel.textContent = formattedTime;
        resolve();
    });
}

async function startTimer() { // Async and Await
    startButton.disabled = true;
    // datePicker.disabled = true;

    interval = setInterval(async () => { // Set Interval
        await updateTimer();
        seconds++;
    }, 1000);
}

function stopTimer() {
    clearInterval(interval); // Clear Interval
    startButton.disabled = false;
    datePicker.disabled = false;
}

function resetTimer() {
    clearInterval(interval); // Clear Interval
    seconds = 0;
    updateTimer();
    startButton.disabled = false;
    datePicker.disabled = false;
}



const datePicker = document.getElementById('datePicker');

function setInitialDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const currentDate = `${year}-${month}-${day}`;

    datePicker.value = currentDate;
}

setInitialDate();

datePicker.addEventListener('keydown', function(e) {
    e.preventDefault(); // Prevent keyboard input
});

datePicker.addEventListener('click', function() {
    this.blur(); // Remove focus to prevent keyboard input
});


startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

setInitialDateTime();
updateTimer();

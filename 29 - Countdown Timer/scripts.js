let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    //immediately run it
    displayTimeLeft(seconds);
    // show end time on DOM
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we should stop the timer
        if (secondsLeft < 0) {
            return;
        }

        //display it - run function again
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${
        remainderSeconds < 10 ? '0' : ''
    }${remainderSeconds}`;
    document.title = display; // set tab title to timer
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    const adjustedHour = hour > 12 ? hour - 12 : hour;

    endTime.textContent = `Be back At ${adjustedHour}:${
        minutes < 10 ? '0' : ''
    }${minutes}`;
}

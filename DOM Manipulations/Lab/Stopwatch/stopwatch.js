function stopwatch() {
    let startButton = document.getElementById('startBtn');
    let stopButton = document.getElementById('stopBtn');
    let time = document.getElementById('time');

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);

    let min = 0;
    let sec = 0;
    let interval = null;

    function startTimer() {
        sec = '00';
        min = '00';

        time.textContent = `${min}:${sec}`;
        interval = setInterval(add, 1000);

        startButton.setAttribute('disabled', 'true');
        stopButton.removeAttribute('disabled');
    }

    function stopTimer() {
        stopButton.setAttribute('disabled', 'true');
        startButton.removeAttribute('disabled');
        clearInterval(interval);
    }

    function add() {
        sec++;
        if (sec < 10) {
            sec = `0${sec}`;
        }
        if (sec >= 60) {
            sec = '00';
            min++;

            if (min < 10) {
                min = `0${min}`;
            }
        }
        if (min === 0) {
            min = `0${min}`;
        }

        time.textContent = `${min}:${sec}`;
    }
}
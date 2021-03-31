function calculateTime(...params) {
    let stepsNumber = params[0];
    let lengthStep = params[1];
    let studentSpeed = params[2];

    let distance = stepsNumber * lengthStep;
    let breaks = Math.floor(distance / 500) * 60;

    let time = Math.round(distance / studentSpeed * 3.6 + breaks);
    let sec = time % 60;
    let min = ((time - sec) / 60) % 60;
    let hour = ((time - sec - min * 60) / 60) % 60;

    sec = replaceZero(sec);
    min = replaceZero(min);
    hour = replaceZero(hour);

    console.log(`${hour}:${min}:${sec}`);

    function replaceZero(value){
        if(0 <= value && value <= 9){
            value = '0' + value;
        }
        return value;
    }

}

// calculateTime(4000, 0.60, 5);
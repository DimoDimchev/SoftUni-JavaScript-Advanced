function checkSpeed(speed, location) {
    let limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }   

    if(limits[location] >= speed){
        console.log(`Driving ${speed} km/h in a ${limits[location]} zone`);
    }
    else if(speed <= (limits[location] + 20)){
        console.log(`The speed is ${speed - limits[location]} km/h faster than the allowed speed of ${limits[location]} - speeding`);
    }
    else if(speed <= (limits[location] + 40)){
        console.log(`The speed is ${speed - limits[location]} km/h faster than the allowed speed of ${limits[location]} - excessive speeding`);
    }
    else{
        console.log(`The speed is ${speed - limits[location]} km/h faster than the allowed speed of ${limits[location]} - reckless driving`);
    }
}
function result(name, age, weight, height) {
    let findBMI = (() => Math.round(weight / (height/100 * height / 100)))();

    let calculateStatus = () => {
        if (findBMI < 18.5) {
            return 'underweight';
        } else if (findBMI < 25) {
            return 'normal';
        } else if (findBMI < 30) {
            return 'overweight';
        } else {
            return 'obese';
        }
    }

    let finalObject = {
        name: name,
        personalInfo: {
            age: Math.round(age),
            weight: Math.round(weight),
            height: Math.round(height),
        },
        BMI: findBMI,
        status: calculateStatus(),
    }
    if (finalObject.status === "obese") {
        finalObject['recommendation'] = "admission required";
    }

    return finalObject
}

// console.log(result("Peter", 29, 75, 182));
function checkNumbers(number) {
    let numberArray = String(number).split("").map((number)=>{
        return Number(number)
      })
    let allSame = true
    let sum = 0

    for (let i = 0; i < numberArray.length; i++) {
        let currentElement = Number(numberArray[i])
        sum += currentElement

        if (currentElement != numberArray[0]) {
            allSame = false
        }
    }

    console.log(allSame)
    console.log(sum)
}

// checkNumbers(1234)
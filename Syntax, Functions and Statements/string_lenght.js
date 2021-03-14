function stringLenghtSum(arg1, arg2, arg3) {
        let len1 = arg1.length
        let len2 = arg2.length
        let len3 = arg3.length

        let sumLenghts = len1 + len2 + len3
        let averageLeght = Math.floor(sumLenghts / 3)

        console.log(sumLenghts)
        console.log(averageLeght)
}


// stringLenghtSum('chocolate', 'ice cream', 'cake')
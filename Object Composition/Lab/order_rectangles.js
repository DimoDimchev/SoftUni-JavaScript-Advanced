function solve(input) {
    let output = [];
    input.forEach((element) => {
        let [width, height] = element;
        let currentObj = {
            width: width,
            height: height,
            area: function () {
                return width * height
            },
            compareTo: function(other) {
                return other.area() - this.area() || other.width - this.width;
            },
        }
        output.push(currentObj);
    });

    return output.sort((a, b) => {
        if (b.area() === a.area()) {
            return b.width - a.width
        } else {
            return b.area() - a.area()
        }
    })
}

// console.log(solve([[10,5], [3,20], [5,12]]))
class Hex {
    constructor(value) {
        this.value = Number(value);
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${((this.value).toString(16)).toUpperCase()}`;
    }

    plus(number) {
        let result =  `0x${((this.value + Number(number.valueOf())).toString(16)).toUpperCase()}`;
        return new Hex(result);
    }

    minus(number) {
        let result =  `0x${((this.value - Number(number.valueOf())).toString(16)).toUpperCase()}`;
        return new Hex(result);
    }

    parse(text) {
        return parseInt(text, 16);
    }
}

//
// let FF = new Hex(255);
// console.log(FF.toString());
// // console.log(FF.valueOf() + 1);
// let a = new Hex(10);
// let b = new Hex(5);
// console.log(a.plus(b).toString());
// console.log(a.plus(b).toString()==='0xF');
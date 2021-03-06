class Circle {
    constructor(radius) {
        this.radius = Number(radius);
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    get area() {
        return Math.PI * (this.radius ** 2);
    }
}
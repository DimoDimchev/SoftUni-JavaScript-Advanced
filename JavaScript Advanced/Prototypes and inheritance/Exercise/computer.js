function createComputerHierarchy() {
    class BaseClass {
        constructor(manufacturer) {
            this.manufacturer = manufacturer;
        }
    }

    class Computer extends BaseClass{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error('Cannot instantiate directly.');
            }
            super(manufacturer);
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Keyboard extends BaseClass{
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    class Monitor extends BaseClass{
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }

    class Battery extends BaseClass{
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery() { return this._battery; }

        set battery(battery) {
            if (!(battery instanceof Battery)) {
                throw new TypeError('Unvalid battery');
            }
            this._battery = battery;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() { return this._keyboard; }

        set keyboard(keyboard) {
            if (!(keyboard instanceof Keyboard)) {
                throw new TypeError('Unvalid keyboard');
            }
            this._keyboard = keyboard;
        }

        get monitor() { return this._monitor; }

        set monitor(monitor) {
            if (!(monitor instanceof Monitor)) {
                throw new TypeError('Unvalid monitor');
            }
            this._monitor = monitor;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop}
}
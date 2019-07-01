function produceDrivingRange(blockRange) {
    return function(startLocation, endLocation) {
        const distance = Math.abs(parseInt(endLocation) - parseInt(startLocation));
        if(blockRange - distance < 0) {
            return `${distance - blockRange} blocks out of range`;
        } else {
            return `within range by ${blockRange - distance}`;
        }
    }
}

function produceTipCalculator(tip) {
    return function(fare) {
        return fare * tip;
    };
}

function createDriver() {
    let driverID = 0;
    return class {
        constructor(name) {
            this.id = ++driverID;
            this.name = name;
        };
    };
}
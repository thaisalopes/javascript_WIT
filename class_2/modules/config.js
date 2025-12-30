//create a calculator - add, subtract, multiply, divide using modules

//shipping cost
// in config.js
//create a data for rate and zones
// rate - standard: 14, perDistance: 4
// Zone - local: 1.0, remote: 1.5

//in shipingcalculator.js
//use the rate and zone to calculate the cost
//cost = rate.standard + (rate.perDistance + weight)

let rate = {
    standard: 14,
    perDistance: 4,
}

let zone = {
    local: 1,
    remote: 1.5,
}

module.exports = {rate, zone}
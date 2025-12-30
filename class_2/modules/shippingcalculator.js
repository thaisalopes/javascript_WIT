const config = require("./config.js");
console.log(config.rate)
console.log(config.zone)
let weight = 22;

cost = config.rate.standard + (config.rate.perDistance + weight);
console.log(cost)

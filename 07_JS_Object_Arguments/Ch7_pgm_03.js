// A function to create planets

var buildPlanet;
var getPlanetInfo;
var planet1;
var planet2;

buildPlanet = function (name, position, type, radius, rank) {
    return {
        name: name,
        position: position,
        type: type,
        radius: radius,
        sizeRank: rank
    };
};

getPlanetInfo = function (planet) {
    return planet.name.toUpperCase() + ": planet " + planet.position;
};

planet1 = buildPlanet("Jupiter", 5, "Gas Giant", 69911, 1);
planet2 = buildPlanet("Neptune", 8, "Ice Giant", 24622, 4);

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));

var car1;
var car2;
var buildCar;
var getCarInfo;

buildCar = function(name, color, type, price){
    return{
        name: name,
        color: color,
        type: type,
        price: price
    };
};

getCarInfo = function (car) {
    return car.name.toUpperCase() + ": color- " + car.color + ", type- " + car.type + " price - " + car.price;
};

car1 = buildCar("Bently", "Black Crystal", "Bentayga","5Cr");
car2 = buildCar("Jaguar", "Portofino Blue Metallic", "F-Pace", "72 L");

console.log(getCarInfo(car1));
console.log(getCarInfo(car2));


/* Further Adventures
 *
 * 1) Write a similar program to create and
 *    display objects that represent cars.
 *
 */
// Converting a string to upper case

var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();


console.log(planet + " becomes " + bigPlanet);

var getBig = function(string){
    return string.toUpperCase();

}
var getSmall = function(string){
    return string.toLowerCase();

}

console.log("India is my country " + getSmall("India"));
console.log("JavaScript is a SCRIPTING LANGUAGE " + getSmall("SCRIPTING language"));



/* Further Adventures
 *
 * 1) Create a getBig function that accepts a
 *    string as an argument and returns it
 *    converted to upper case.
 *
 * There is also a toLowerCase string method.
 *
 * 2) Create a getSmall function that accepts a
 *    string as an argument and returns it
 *    converted to lower case.
 *
 */
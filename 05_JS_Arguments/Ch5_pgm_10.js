// Displaying a player's health via object properties

var player1;
var player2;
var showPlayerHealth;
var playerHealthMultiplier;


showPlayerHealth = function (playerName, playerHealth, playerHealthMultiplier) {
    var health2 = playerHealth * playerHealthMultiplier;
    console.log(playerName + " has health " + health2);
};

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50,
    healthMultiplier:1.5

};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40,
    healthMultiplier:2
};

showPlayerHealth(player1.name, player1.health, player1.playerhealthMultiplier );
showPlayerHealth(player2.name, player2.health, player2.playerhealthMultiplier);



/* Further Adventures
 *
 * 1) Add a new property to the player objects
 *    called healthMultiplier.
 *
 * 2) Add a third parameter to the definition
 *    of the showPlayerHealth function
 *    called playerHealthMultiplier
 *
 * 3) Update the function so that the health
 *    displayed is first multiplied by
 *    the health multiplier.
 *
 * 4) Add the player's healthMultiplier property
 *    as a third argument to the two calls
 *    to the showPlayerHealth function.
 *
 */
// Finding the total shopping bill

var costs = [ 1.99, 4.95, 2.50, 9.87, 3.75 ]; 
var numOfEach = [ 2, 1, 5, 2, 3 ]; 

console.log("The total cost is $" + getTotalBill(costs, numOfEach));
var getTotalBill = function(itemCosts, itemCounts) {
    var total = 0;

    itemCounts.forEach(function(count, i) {
        total += itemCosts[i] * count;
    });

    return total;
};

var items = [
    { cost: 1.99, numberBought: 2 },
    { cost: 4.95, numberBought: 1 },
    { cost: 2.50, numberBought: 5 },
    { cost: 9.87, numberBought: 2 },
    { cost: 3.75, numberBought: 3 }
];
var getTotalBill = function(items) {
    var total = 0;

    items.forEach(function(item) {
        total += item.cost * item.numberBought;
    });

    return total;
};

console.log("The total cost is $" + getTotalBill(items));



/* Further Adventures
 *
 * 1) Add an extra item to the shopping trip.
 *
 * 2) Change the function so that forEach iterates
 *    over itemCounts instead of itemCosts.
 *    Can you make it work?
 *
 * 3) Create a single array of objects with
 *    cost and numberBought properties.
 *
 *    items = [ { cost: 1.99, numberBought: 2 },
 *              { cost: 4.95, numberBought: 1 } ];
 *
 * 4) Update getTotalBill to accept a single array
 *    of items.
 *
 */
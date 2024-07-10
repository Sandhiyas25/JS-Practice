// A function with two arguments

var showSum;

showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};

showSum(30, 23);
showSum(2.8, -5);
showSum(56,74);

showProduct = function(number1, number2){
	var total= number1 * number2;
	console.log("The Multiplication is " + total);
};

showProduct (3, 10);
showProduct (20, 7);
showProduct (25, 8);

showDifference = function(number1, number2){
	var total= number1 - number2;
	console.log("The Subtraction is " + total);
};

showDifference(70, 10);
showDifference(82, 66);
showDifference(75, 28);

showQuotient = function(number1, number2){
	var total= number1 / number2;
	console.log("The Division is " + total);
};

showQuotient(700, 10);
showQuotient(823, 8);
showQuotient(250, 3);



/* Further Adventures
 *
 * 1) Use the showSum function to add 56 and 74.
 *
 * To multiply two numbers, use the * symbol.
 * e.g. 3 * 5 is 3 multiplied by 5.
 *
 * 2) Create a showProduct function to multiply two numbers.
 *
 * 3) Use your function to multiply three pairs of numbers.
 *
 * To divide one number by another, use /.
 * e.g. 10 / 2 is 10 divided by 2.
 *
 * 4) What about showDifference and showQuotient
 *    for subtraction and division?
 *
 */
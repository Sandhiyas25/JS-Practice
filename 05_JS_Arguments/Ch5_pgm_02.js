// Breaking a function by changing a variable name

var msg;
var showMessage;
var message;
var m;

msg = "It's full of stars!";
message = "It's a Moon!";
m = msg + message;

showMessage = function (msg) {
	console.log(msg);
};

showMessage = function(message) {
	console.log(message);
}

showMessage = function (m) {
	console.log(m);
}
showMessage(msg);
showMessage(message);
showMessage(m);



/* Further Adventures
 *
 * 1) Update the console.log so the program works.
 *
 * 2) Declare another message variable
 *    and assign it a value.
 *
 * 3) Display the new message as well as the old one.
 *
 * 4) Display a single message created by joining
 *    the two strings.
 *
 */
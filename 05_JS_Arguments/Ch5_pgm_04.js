// Calling the same function with different arguments

var showMessage;
var myMessage;

showMessage = function (message) {
	console.log("The message is: \n" + message);
};

showMessage = function (myMessage){
	console.log("Under the sky!");
};

showMessage("It's full of stars!");
showMessage("Hello to Jason Isaacs");
showMessage("Hello to Jason Isaacs and Stephen Fry");

showMessage(myMessage);



/* Further Adventures
 *
 * 1) Change the showMessage function to
 *    display its prefixed text on a
 *    separate line to the message.
 *
 * 2) Declare a myMessage variable and
 *    assign it a string value.
 *
 * 3) Call the showMessage function with
 *    myMessage as the argument.
 *
 */
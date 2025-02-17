// Using Math.min and Math.max


var showSmaller = function(num1, num2, num3){
    var smaller = Math.min(num1, num2, num3);
    var larger = Math.max(num1, num2, num3);

    console.log(smaller + " is smaller than " + larger);
};

var showLarger = function(num1,num2){
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);
    console.log(larger + " is larger than " + smaller);
};


showSmaller(20,100,2);
showSmaller(-10,-70, 1);
showLarger(22,-22);
showLarger(100,1000);





/* Further Adventures
 *
 * 1) Try out some different arguments.
 *
 * 2) Write a showLarger function.
 *
 * 3) Write a showSmallest function that takes
 *    three arguments and displays the smallest
 *    of the three.
 *
 */
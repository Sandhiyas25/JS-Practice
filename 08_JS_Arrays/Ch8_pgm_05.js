// Passing an array to a function

var getVisitorReport = function(visitorArray, dayInWeek) {
  var days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
  ];
  var index = dayInWeek - 1;
  var visitorReport;

  visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
  visitorReport += "on " + days[index];

  return visitorReport;
};

var visitors = [354, 132, 210, 221, 481, 312, 176]; // Adjusted for Saturday and Sunday

var reportFriday = getVisitorReport(visitors, 5);
var reportSaturday = getVisitorReport(visitors, 6);
var reportSunday = getVisitorReport(visitors, 7);

console.log(reportFriday);   
console.log(reportSaturday); 
console.log(reportSunday);  

var getMonthlyVisitorReport = function(monthArray, weekNumber, dayInWeek) {
  var week = monthArray[weekNumber - 1]; 

  
  return getVisitorReport(week, dayInWeek);
};


var month = [
  [354, 132, 210, 221, 481, 312, 176], 
  [400, 150, 190, 200, 450, 300, 150], 
  [370, 140, 220, 215, 490, 310, 180], 
  [380, 160, 200, 210, 470, 320, 170] 
];


var reportWeek1Wednesday = getMonthlyVisitorReport(month, 1, 3); // Week 1, Wednesday
var reportWeek2Sunday = getMonthlyVisitorReport(month, 2, 7);   // Week 2, Sunday

console.log(reportWeek1Wednesday); 
console.log(reportWeek2Sunday);    

/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */
// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

var ques1, ques2, ques3, ques, showques;

ques1 = {
    text : "Which planet is known as the Red Planet?",
    options: ["A:Earth","B:Mars","C:Uranus","D:Saturn"],
    correctoption:"B"
};

ques2 = {
    text : "What is the largest mammal in the world?",
    options: ["A:Dolphin","B:Shark","C:Blue Whale","D:Octopus"],
    correctoption:"c"
};

ques3 = {
    text : "What is the closest star to Earth?",
    options: ["A:Sun","B:Moon","C:Mars","D:Neptune"],
    correctoption:"A"
};

showques = function () {
    console.log("Question: " + ques.text);
    console.log("Options: ");
    for (var i = 0; i < ques.options.length; i++) {
        console.log(ques.options[i]);
    }
    console.log("Correct Answer: " + ques.correctoption);
    console.log("------------------------------");
};

ques = ques1;
showques();

ques = ques2;
showques();

ques = ques3;
showques();

/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */
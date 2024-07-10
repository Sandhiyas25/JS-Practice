// Using variables to represent a book

var bookTitle;
var bookAuthor;
var book2Title;

bookTitle = "The Hobbit";
bookAuthor = "J. R. R. Tolkien";

book2Title = "As You Like it";
Book2Author = "William Shakesphere";

book3Title = "A Tale of Two Cities";
book3author = "Charles Dickens";

console.log(bookTitle + " by " + bookAuthor);

let books=[
    {title:"Harry Potter and the Philosopher's Stone", author:"J.K. Rowling"},
    {title:"War and Peace", author:"Leo Tolstoy"},
    {title:"Ulysses", author:"James Joyce"},
    {title:"Utopia", author:"Sir Thomas Moor"},
    {title:"Waste Land", author:"T.S Eliot"},
    {title:"Treasure Island", author:"R.L. Stevenson"},
    {title:"Time Machine", author:"H.G Wells"},
    {title:"The Tempest", author:"William Shakespeare"},
    {title:"Mein Kamph", author:"Adolf Hitler"},
    {title:"Wealth of Nations", author:"Adam Smith"},
];

for (let a = 0; a < books.length; a++) {
    console.log(Book ${a + 1} - title: ${books[a].title}, author: ${books[a].author});
}




/* Further Adventures
 *
 * 1) Declare variables for a second book
 *    and assign them values.
 *
 * 2) Add code to log its details to the console.
 *
 * 3) Repeat steps 1 and 2 for a third book.
 *
 * 4) Consider the code needed for 10 books.
 *    For 100 books.
 *
 */
const myLibrary = [];

var modal = document.getElementById("myModal");
var btn = document.getElementById("add");
var span = document.getElementById("close");
var cancel = document.getElementById("cancel");
var submit = document.getElementById("submit");

//converted the function to a class
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

/*function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
}*/

function addBookToLibrary (title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayOnPage () {
    var cardsContainer = document.querySelector(".cards");

    //clear existing content
    cardsContainer.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        var book = myLibrary[i];

        var card = document.createElement("div");
        card.className = "card";

        var bookTitle = document.createElement("h6");
        bookTitle.textContent = book.title;

        var author = document.createElement("p");
        author.textContent = "Author: " + book.author;

        var pages = document.createElement("p");
        pages.textContent = "Pages: " + book.pages;

        var read = document.createElement("p");
        read.textContent = "Read: " + (book.read ? "yes" : "no");

        //creating a container for the buttons
        var buttonsDiv = document.createElement("div");
        buttonsDiv.className = "buttons";

        //creating the delete button
        var deleteButton = document.createElement("button");
        deleteButton.className = "delete";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener('click', function() {
            //Removing the book from the array
            myLibrary.splice(i, 1);
            //Updating the display
            displayOnPage();
        })

        //Creating the read toggle button
        var readToggleButton = document.createElement("button");
        readToggleButton.className = "read-toggle";
        readToggleButton.textContent = book.read ? "Read" : "Not Read";

        //Adding event listener to toggle read status
        readToggleButton.addEventListener('click', function() {
            //Toggling the book's read status, if book.read is 
            //true (indicating the book is read), it will be set 
            //to false (indicating the book is unread), and vice versa. 
            //This effectively changes the read status each time the 
            //button is clicked.
            //The ! operator is used to invert the boolean value of book.read
            book.read = !book.read;
            displayOnPage();
        });

        buttonsDiv.appendChild(readToggleButton);

        //Appending the delete button to the buttons container
        buttonsDiv.appendChild(deleteButton);

        //Appending the title, author, pages, read status, and buttons to the card
        card.appendChild(bookTitle);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);

        //Appending buttons container to card
        card.appendChild(buttonsDiv);

        //Appending the card to the cards container
        cardsContainer.appendChild(card);
    }
}

function openModal () {
    modal.style.display = "block";
}

function closeModal () {
    modal.style.display = "none";
}

function submitInfo () {
    const book_title = document.getElementById("book_title").value;
    const book_author = document.getElementById("book_author").value;
    const book_pages = document.getElementById("book_pages").value;

    if (book_title == "" || book_author == "" || book_pages == "") {
        alert("Please provide input for all fields");
        return;
    }

    addBookToLibrary(book_title, book_author, book_pages);

    //clear input fields
    document.getElementById("book_title").value = "";
    document.getElementById("book_author").value = "";
    document.getElementById("book_pages").value = "";

    //close the modal
    closeModal();

    //update the display
    displayOnPage();
}

btn.onclick = openModal;
span.onclick = closeModal;
cancel.onclick = closeModal;
submit.onclick = submitInfo;


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
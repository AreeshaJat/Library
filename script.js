const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
}

function addBookToLibrary (title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayOnPage () {
    for (var i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
}

//manually add book
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read');
addBookToLibrary('The Fault in Our Stars', 'John Green', '300 pages', 'read');

//show books on console
displayOnPage();
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
    //this.info = function() {
    //    return (title + " by " + author + pages + read);
    //}; 
}

function addBookToLibrary () {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayOnPage () {
    
}

//const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');
//theHobbit.info();
//console.log(theHobbit.info());
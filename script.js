const myLibrary = []

function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    book.call(this, title, author, pages, read);

    this.info = function (){
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
    }
    myLibrary.push(this);
}

Object.setPrototypeOf(addBookToLibrary.prototype, book.prototype);
//theHobbit = new book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read');

const hobbit = new addBookToLibrary('The Hobbit', 'Tolkien', 500, 'Not read');

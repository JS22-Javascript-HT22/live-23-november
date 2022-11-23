class Book {
    constructor(title, author, borrowed) { // Varje klass har en konstruktor som initierar alla egenskaper
        this.title = title;
        this.author = author;
        this.borrowed = borrowed;
    }

    getTitle() {
        return this.title;
    }

    getInfo() {
        return this.title + ' ' + this.author + ' ' + this.borrowed;
    }

    setTitle(title) {
        this.title = title;
    }
}

const firstBook = new Book('Alice in wonderland', 'Lewis Carroll', false);
const secondBook = new Book('The importance of being Earnest', 'Oscar Wilde', true);
console.log(firstBook);
console.log(firstBook.getTitle());
firstBook.setTitle('Through the looking glass');
console.log(firstBook);
console.log(secondBook.getInfo());

const book = {
    title: 'Alice in wonderland',
    author: 'Lewis Carroll',
    borrowed: false,
    getTitle: function() {
        return this.title;
    }
}

console.log(book.getTitle());
console.log(window);

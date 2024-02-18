/**
  |============================
  | Базові типи
  |============================
*/
// //bolean
// let isDone: boolean = false;
class Product {
    constructor(id, name, price, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }
    getShortDescription() {
        return this.description.slice(0, 10) + "...";
    }
}
const product = new Product(12, "sds", 23, "sdaqwqwwqŵŵeqweqwedasdw");
class Electronics extends Product {
    constructor(brand, id, name, price, description) {
        super(id, name, price, description);
        this.brand = brand;
    }
    powerOn() {
        return "Пристрій включено";
    }
}
const iron = new Electronics("qw", 23, "213", 33, "213");
class Clothing extends Product {
    constructor(size, id, name, price, description) {
        super(id, name, price, description);
        this.size = size;
    }
    wear() {
        return "Річ вдіта";
    }
}
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
    }
    markAsBorrowed() {
        this.isBorrowed = true;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    add(book) {
        this.books.push(book);
    }
    borrowBook(title) {
        const book = this.books.find((book) => book.title === title);
        if (!book) {
            console.log(`There is no such book wsth title ${title}`);
            return;
        }
        if (book.isBorrowed) {
            console.log(`The book ${book.title} is already borrowed`);
            return;
        }
        book.markAsBorrowed();
    }
    getBorrowedBook() {
        return this.books.filter((book) => book.isBorrowed);
    }
}
const book1 = new Book("Three friends", "Rom");
const book2 = new Book("Two friends", "Rom2");
const library = new Library();
library.add(book1);
library.add(book2);
library.borrowBook("Three friends");
console.log("Library", library.getBorrowedBook());

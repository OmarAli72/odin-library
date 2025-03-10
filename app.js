const myLibrary = [];

function Book(id, author, pages, price) {
    this.id = id;
    this.author = author;
    this.pages = pages;
    this.price = price;
}

function addBookToLibrary(name, author, pages, price) {
    let localId = crypto.randomUUID();
    const BN = new Book(localId, name, author, pages, price);
    myLibrary.push(BN);
}


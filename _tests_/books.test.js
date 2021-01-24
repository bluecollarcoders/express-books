// Integration tests for books route

process.env.Node_ENV = "test"

const request = require("supertest");

const app = require("../app");
const db = require("../db");

// isbn of sample book
let book_isbn;

beforeEach(async () => {
    let result = await db.query(`
    INSERT INTO
    books(isbn, amazon_url,author,language,pages,publisher,title,year)
    VALUES(
        '123432122',
        'https://amazon.com/taco',
        'Elie',
        'English',
        100,
        'Nothing publishers',
        'my first book', 2008)
        RETURNING isbn`);
});
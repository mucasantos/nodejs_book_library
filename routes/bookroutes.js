
const express = require("express")
const router = express.Router();

//Controller
const bookController = require("../controller/bookcontroller");
const { titleValidator, isbnValidator } = require("../service/validators");

router.get('/books', bookController.listBooks);

router.post ('/book',[titleValidator, isbnValidator], bookController.addNewBook);

module.exports = router;


const { check } = require("express-validator");
const Book = require("../model/book")

module.exports = {
    isbnValidator: check('isbn')
        .isLength({ min: 13 })
        .withMessage("O isbn precisa ter 13 números!")
        .custom(async (value, { req }) => {

            try {
                const isbnFound = await Book.findOne({ isbn: value });
                if (isbnFound) {
                    return Promise.reject("Este ISBN já está cadastrado no banco!");
                }
            } catch (err) {

                //console.log(err);
            }
            return true;
        }),

    titleValidator: check('title')
        .isLength({ min: 10 })
        .withMessage("Pelo menos 10 caracters!")
}
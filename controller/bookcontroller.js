const Book = require("../model/book")
const { validationResult } = require("express-validator");

exports.addNewBook = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const error = new Error("Erro ao salvar livro!!")
        error.statusCode = 422 || 500;
        error.data = errors.array()
        throw error;
    }

    const book = new Book(req.body);

    book.save().then(result => {
        res.status(200).json({ message: "Livro adicionado com sucesso.", result: result });
    }).catch(err => {
        res.status(500).json({ message: "Erro ao adicionar livro no DB!", error: err });
    });
};

exports.listBooks = (req, res, next) => {
    Book.find().then(result => {
        res.status(200).json({ message: "Listagem de livros.", result: result });
    }).catch(err => {
        res.status(500).json({ message: "Erro ao listar livros...", error: err });
    })
};
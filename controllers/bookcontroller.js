//Acessar o nosso banco de dados
const Book = require("../model/book");

exports.listBooks = (req, res, next) => {
    res.json({
        message: "Livros disponíveis no DB...",
        books: [
        ]
    })
}

exports.saveBook = (req, res, next) => {

    const book = new Book(
        {
            "title": "NodeJS por Samuel Santos",
            "numberPages": 255,
            "isbn": "123456789kuk9",
            "author": "Leonardo Santos",
            "category": "Technology",
            "price": 95.89,
            "publisher": "Abril SA",
            "quantity": 5
        }
    )

    book.save().then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    })

    res.json({
        message: "Livro salvo com sucesso no DB!"
    })
}
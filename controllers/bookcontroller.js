//Acessar o nosso banco de dados
const Book = require("../model/book");

exports.listBooks = (req, res, next) => {

Book.find().then(result => {

    res.json({
        message: "Livros disponíveis no DB...",
        books: result
    })
})
}

exports.saveBook = (req, res, next) => {

    const book = new Book(req.body)

    book.save().then(result => {

        res.json({
            message: "Livro salvo com sucesso no DB!",
            book_id: result._id,
        })
    }).catch(error => {
        console.log(error);
    })


}
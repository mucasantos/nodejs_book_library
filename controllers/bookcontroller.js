exports.listBooks = (req,res,next)=> {
    res.json({
        message: "Livros disponíveis...", 
        books: [
        ]
    })
}

exports.saveBook = (req,res,next)=>{
    res.json({
        message: "Livro salvo com sucesso!"
    })
}
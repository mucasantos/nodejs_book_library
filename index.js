//Express Framework

const express = require("express");
const app = express();

const PORT = 3300;

//Controllers book

const bookControllers = require("./controllers/bookcontroller")
//Rota (endpoint) que devolve a lista de livros

app.get('/books', bookControllers.listBooks
);

//Post salva o livro
app.post('/book', bookControllers.saveBook);


app.listen(PORT, ()=>{
    console.log("Server online..." + PORT);
})
//Express Framework
const express = require("express");
const app = express();
const mongoose = require("mongoose");


const PORT = 3300;
const DB_STRING = "mongodb://localhost:27017/book-library";

//Book Rotas
const bookRoutes = require("./routes/bookroutes");

//Receber o JSON no server 
app.use(express.json());

app.use(bookRoutes);

mongoose.connect(DB_STRING).then(result => {
    console.log("Conectado ao banco de dados: " + DB_STRING);

    //Iniciar o servidor
app.listen(PORT, ()=>{
    console.log("Server online..." + PORT);
})
}).catch(err => console.log(err));


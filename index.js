const express = require("express")
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")

const PORT = 3300;
const DB_STRING = "mongodb://localhost:27017/library";

//routes
const bookRoutes = require("./routes/bookroutes")
const validateErros = require("./service/errorcheck");
//Para receber o JSON corretamente
app.use(express.json());
app.use(cors())

app.use('/library', bookRoutes)

//tratamento de erros
app.use(validateErros);

mongoose.connect(DB_STRING).then(result => {
    app.listen(PORT, ()=> {
        console.log("Servidor Online na porta: " + PORT)
    })
}).catch(err => {
    console.log(err);
})


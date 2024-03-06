//importar o express
//importar o router
const  express = require("express");
const router = express.Router();
//Importar o controller
const bookController = require("../controllers/bookcontroller")

//Rotas que eu necessite na aplicação

router.get('/books',bookController.listBooks);
router.post('/book', bookController.saveBook);


module.exports = router;
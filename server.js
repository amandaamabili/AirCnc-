const express = require ('express');
const mongoose = require ('mongoose');
const routes = require  ('./backend/src/routes')

const app = express();
mongoose.connect('mongodb+srv://AMANDA:aABH1234@cluster0-objfj.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
//GET (BUSCAR), POST (CRIAR), PUT(EDITAR), DELETE(DELETAR)
//req.query = Acessar query params => post/ (para filtros)
//req.paramns= Acessar rout params => put / (para edição, delete)
//req.body = Acessar corpo da requisição (para criação, deleção)

app.use(express.json());
app.use (routes);









app.listen(3001);
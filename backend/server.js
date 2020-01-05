const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const path = require ('path');//path é responsavel por criar caminhos

const routes = require  ('./routes')

const app = express();
mongoose.connect('mongodb+srv://AMANDA:aABH1234@cluster0-objfj.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
//GET (BUSCAR), POST (CRIAR), PUT(EDITAR), DELETE(DELETAR)
//req.query = Acessar query params => post/ (para filtros)
//req.paramns= Acessar rout params => put / (para edição, delete)
//req.body = Acessar corpo da requisição (para criação, deleção)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'uploads')));//statica retorna arquivos estaticos
app.use (routes);









app.listen(3001);
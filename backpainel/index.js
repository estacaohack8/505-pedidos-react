const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('express-mongo-db');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(mongo('mongodb://localhost/lanches-eh'));

app.get('/lanches', (req, res) => {
    req.db.collection('lanches').find().toArray((erro, dados) => {
        if(!erro){
            return res.send({lanches: dados});
        }
        return res.status(500).send({erro: "Problema ao consultar o banco de dados"});
    });
});

app.post('/lanche/novo', (req, res) => {
    if(!req.body.user || !req.body.lanche){
        return res.status(400).send({erro: "Parâmetros obrigatórios ausentes"});
    }

    req.db.collection('lanches').insert(req.body, erro => {
        if(!erro){
            return res.send({mensagem: "Pedido cadastrado"});
        }
        return res.status(500).send({erro: "Problema ao consultar o banco de dados"});
    }); 
});


app.listen(5000, ()=>{
    console.log("Serviço de pedidos está sendo executado");
});
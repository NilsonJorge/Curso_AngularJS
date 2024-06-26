const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
var contatos = [
  {
    nome: "Nilson",
    telefone: "99922-9147",
    data: new Date(),
    operadora: { nome: "Oi", codigo: 14 },
    cor: "yellow",
  },
  {
    nome: "Fabiana",
    telefone: "99627-0841",
    data: new Date(),
    operadora: { nome: "Oi", codigo: 14 },
    cor: "yellow",
  },
  {
    nome: "Maria",
    telefone: "99922-6544",
    data: new Date(),
    operadora: { nome: "Oi", codigo: 14 },
    cor: "yellow",
  },
];

var operadoras = [
  { nome: "Oi", codigo: 14, categoria: "Celular", preco: 3 },
  { nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1 },
  { nome: "Tim", codigo: 41, categoria: "Celular", preco: 2 },
  { nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1 },
  { nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 3 },
];

app.get("/api/contatos", (req, res) => {
  res.json(contatos);
});

app.post("/api/contatos", (req, res) => {
  var contato = {
    serial: req.body.serial,
    nome: req.body.nome,
    telefone: req.body.telefone,
    data: req.body.data,
    operadora: req.body.operadora,
  };
  contatos.push(contato);
  res.status(201).json(contato);
});

app.get("/api/operadoras", (req, res) => {
  res.json(operadoras);
});

app.listen(8080, () => {
  console.log("App rodando");
});

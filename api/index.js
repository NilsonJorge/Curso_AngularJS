const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
var id_contato = 4;
var contatos = [
  {
    id: 1,
    nome: "Nilson jorge",
    telefone: "99922-9147",
    data: new Date(),
    operadora: { nome: "Oi", codigo: 14, categoria: "Celular", preco: 3 },
    cor: "yellow",
  },
  {
    id: 2,
    nome: "Fabiana maria",
    telefone: "99627-0841",
    data: new Date(),
    operadora: { nome: "Oi", codigo: 14, categoria: "Celular", preco: 3},
    cor: "yellow",
  },
  {
    id: 3,
    nome: "maria de fátima",
    telefone: "99922-6544",
    data: new Date(),
    operadora: {  nome: "Oi", codigo: 14, categoria: "Celular", preco: 3 },
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

app.get("/api/contatos/:id", (req, res) => {
  const id = req.params.id;
  const contato = contatos.find((c) => c.id == id);
  if (contato) {
    res.json(contato);
  } else {
    res.status(404).json({ message: "Contato não encontrado" });
  }
});

app.post("/api/contatos", (req, res) => {
  var contato = {
    id: id_contato,
    serial: req.body.serial,
    nome: req.body.nome,
    telefone: req.body.telefone,
    data: req.body.data,
    operadora: req.body.operadora,
  };
  contatos.push(contato);
  id_contato++;
  res.status(201).json(contato);
});

app.get("/api/operadoras", (req, res) => {
  res.json(operadoras);
});

app.listen(8080, () => {
  console.log("App rodando");
});

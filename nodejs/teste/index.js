const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.json("Seja -bem vindo!");
});

app.get("/sobre", (req, res) => {
  res.json("Minha pagina Sobre")
});

app.get("/blog", (req, res) => {
  res.json("Bem-vindo ao Blog!")
});

app.get("/login/:cargo/:nome", (req, res) => {
  res.send("<h1 style='color: red;'>Brighting Enterprise</h1>\n <h2>Ola, "+req.params.nome+"</h2>");
})

app.listen(8081, () => {console.log("Servidor funcionando na url http://localhost:8081")});
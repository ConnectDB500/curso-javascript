const express = require('../teste/node_modules/express');
const app = express();

app.get("/", function(req, res){
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/about", function(req, res){
  res.sendFile(__dirname + "/html/about.html")
});

app.get("/blog", function(req, res){
  res.sendFile(__dirname + "/html/blog.html")
});

app.get("/hello/:job/:name/color", function(req, res){
  res.send(`
    <h1>Hello, ${req.params.name}</h1>
    <h2>Your job is: ${req.params.job}</h2>
    <h3>Your favorite color is: ${req.params.color}</h3>
    `)
})

app.listen(8081, function(){console.log("Servidor funcionando ...");});

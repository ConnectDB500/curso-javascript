const Dev = function(nome, idade, linguagem, tipoDev) {
    this.nome = nome;
    this.idade = idade;
    this.linguagem = linguagem;
    this.tipoDev = tipoDev;
    this.saudacao = function(){
    console.log(`Ola, eu sou ${this.nome} e trabalho com a linguagem ${this.linguagem} 
    e sou ${this.tipoDev} \n\n`);
    }
}

const Frontend = function(nome, idade, linguagem, framework){
  const newDev = new Dev(nome, idade, linguagem, "Frontend");
  newDev.framework = framework;
  Object.setPrototypeOf(this, newDev);
}

const Backend = function(nome, idade, linguagem, bancoDeDados){
  const newDev = new Dev(nome, idade, linguagem, "Backend");
  newDev.bancoDeDados = bancoDeDados;
  Object.setPrototypeOf(this, newDev);
}

const desenvolvedor = new Dev("Pedro", 25, "C#", "Fullstack");
const Frontend1 = new Frontend("Roberta", 19, "Typescript", "Nextjs");
const Backend1 = new Backend("Jonathan", 35, "C#", "SQL Server");

console.log(desenvolvedor);
desenvolvedor.saudacao();

console.log(Frontend1);
Frontend1.saudacao();

console.log(Backend1);
Backend1.saudacao();

console.log('debug teste');
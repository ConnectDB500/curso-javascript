class Dev {
  constructor(nome, idade, linguagem){
    this.nome = nome;
    this.idade = idade;
    this.linguagem = linguagem;
  }
  saudacao(){
    console.log(`Ola, eu sou ${this.nome} e trabalho com a linguagem ${this.linguagem} \n\n`);
  }
}

class Frontend extends Dev {
  constructor(nome, idade, linguagem, framework){
    super();
    this.nome = nome;
    this.idade = idade;
    this.linguagem = linguagem;
    this.framework = framework;
  }
  saudacao() {
    console.log(`Ola, eu sou ${this.nome} e trabalho com a linguagem ${this.linguagem} e o framework ${framework} \n\n`);
  }
}

class Backend extends Dev {
  constructor(nome, idade, linguagem, bancoDeDados){
    super();
    this.nome = nome;
    this.idade = idade;
    this.linguagem = linguagem;
    this.db = bancoDeDados;
  }
  saudacao() {
    console.log(`Ola, eu sou ${this.nome} e trabalho com a linguagem ${this.linguagem} e o banco de dados ${db} \n\n`);
  }
}

const desenvolvedor = new Dev("Pedro", 25, "C#");
const Frontend1 = new Frontend("Roberta", 19, "Typescript", "Nextjs");
const Backend1 = new Backend("Jonathan", 35, "C#", "SQL Server")

console.log(desenvolvedor);
desenvolvedor.saudacao();

console.log(Frontend1);
Frontend1.saudacao();

console.log(Backend1);
Backend1.saudacao();

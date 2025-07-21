const nome = "Dev Full stack";
const idade = 2025 - 2000;

const str = "Ola eu sou "+ nome + " \nEu tenho "+ idade + "anos";

const templateStr = 
`
Ola, eu sou ${nome}
Eu tenho ${idade} anos
`
console.log(str);
console.log(templateStr);
// Chamar o this diretamente no console nos traz o objeto global do console em que 
// o javascript esta executando. O 'this' no devtools do chrome nos traz o objeto
// 'Window', ja no Node nos traz o objeto 'global'

console.log(this.document === document);

console.log(this === window);

console.log(this === global);

this.a = 37
console.log(window.a);
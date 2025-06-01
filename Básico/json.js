// MÉTODOS
// JSON.parse() - Analisar uma sequência como JSON, opcionalmente transformar o
// valor produzido e suas propriedades, e retornar o valor.
const json = '{"result": true, "count": 42}';
const obj = JSON.parse(json);

console.log(obj.count);

console.log(obj.result);

// JSON.stringfy() - Retorna uma string JSON correspondente ao valor especificado,
// pode incluir apenas determinadas propriedades ou substituir valores de 
// propriedade de acordo com a definiçção do usuario.
JSON.stringifi({});
JSON.stringifi(true);
JSON.stringifi('foo');
JSON.stringifi([1, 'false', false]);
JSON.stringifi({x: 5});

JSON.stringifi({x: 5, y: 6});
JSON.stringifi([new Number(1), new String('false'), new Boolean(false)]);


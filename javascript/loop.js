let num = 1;

//DO WHILE LOOP
do {
  console.log(num);
  num++;
}while(num <= 9)

console.log("------" + "\n");
//WHILE LOOP
while(num >= 0){
  console.log(num);
  num--;
}
console.log("------" + "\n");

// Imprimindo caracteres numa string
//DO WHILE LOOP-
let str = 'hello';
let count = 0;

do {
  console.log(str[count]);
  count++;
}while(count < str.length)

console.log("------" + "\n");

count = 0;

while(count < str.length){
  console.log(str[count]);
  count++;
}
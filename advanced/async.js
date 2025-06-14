const cincoMil = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('promise cinco mil resolvida'), 5000);
});

const mil = () => new Promise((resolve, promise) => {
  setTimeout(() => resolve('promise mil resolvida'), 1000);
});

const quinhentos = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('promise quinhentos resolvida'), 500);
});

const cem = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('promise cem resolvida'), 100);
});

const resolvePromiseAsync = async () => {
  const resultado1 = await cincoMil();
  console.log('\n1º Codigo sem o await');
  const resultado2 = await mil();
  console.log('\n2º Codigo sem o await');
  const resultado3 = await quinhentos();
  console.log('\n3º Codigo sem o await');
  const resultado4 = await cem();
  console.log('\n4º Codigo sem o await');

  console.log(`Mensagem: \n${resultado1} \n${resultado2} \n${resultado3} \n${resultado4}`)
}

resolvePromiseAsync();
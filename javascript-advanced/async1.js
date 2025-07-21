const cincoMil = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('a) promise cinco mil resolvida'), 5000);
});

const mil = () => new Promise((resolve, reject) => {
  setTimeout(() => reject('b) promise mil resolvida'), 1000);
});

const resolvePromiseAsync = async () => {
  const resultado1 = await cincoMil().then((res) => {
    console.log(res);
    return res;  
  }).catch((err) => {
    console.log(err);
  })

  console.log('\n1º Codigo sem o await');

  const resultado2 = await mil().then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });

  console.log('\n2º Codigo sem o await');

  console.log(`Mensagem: \n${resultado1} \n${resultado2}`)
}

resolvePromiseAsync();
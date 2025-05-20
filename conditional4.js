const item = 5

switch(item) {
  case 1:
    console.log('Item 1 - setor de brinquedos')
    break
  case 2:
    console.log('Item 2 - setor de maquiagem')
    break
  case 3:
    console.log('Item 3 - setor de calcados')
    break
  case 4:
    console.log('Item 4 - setor de vestuario feminino VESTUARIO 1') // UNIFICANDO O SETOR A SESSAO DE VESTUARIO
  case 5:
    console.log('Item 5 - setor de vestuario feminino VESTUARIO 2') // UNIFICANDO O SETOR A SESSAO DE VESTUARIO
  case 6:
    console.log('Item 6 - setor de vestuario masculino VESTUARIO 3') // UNIFICANDO O SETOR A SESSAO DE VESTUARIO
  break
  case 7:
    console.log('Item 7 - setor de eletrodomesticos LAR 1') // UNIFICANDO O SETOR A SESSAO DE LAR
  case 8:
    console.log('Item 8 - setor de utensilios domesticos LAR 2') // UNIFICANDO O SETOR A SESSAO DE LAR
    break
  default:
    console.log('Numero informado e invalido')
}
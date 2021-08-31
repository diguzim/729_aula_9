const meuVetor = [
  {
    nome: 'Dodó',
    idade: 10
  },
  {
    nome: 'Nina',
    idade: 9
  },
  {
    nome: 'Rodrigo',
    idade: 32
  },
  {
    nome: "Lucia",
    idade: 53
  }
]

// find
function findRodrigo(pessoa) {
  return pessoa.nome === 'Rodrigo'
}
let resultado = meuVetor.find(findRodrigo)
console.log('resultado find: ', resultado)
console.log('\n')

// findIndex
function findRodrigoPosition(pessoa) {
  return pessoa.nome === 'Rodrigo'
}
resultado = meuVetor.findIndex(findRodrigo)
console.log('resultado findIndex: ', resultado)
console.log('\n')

// forEach
console.log('Prints relativos ao forEach:')
function printAlegria(pessoa) {
  console.log(`Olá, meu nome é ${pessoa.nome} e eu tenho ${pessoa.idade} anos`)
}
meuVetor.forEach(printAlegria)
console.log('\n')

// map
function duplicaIdade(pessoa) {
  return pessoa.idade * 2
}
resultado = meuVetor.map(duplicaIdade)
console.log('resultado map: ', resultado)
console.log('\n')

// filter
function somenteMaioresDeIdade(pessoa) {
  return pessoa.idade >= 18
}
resultado = meuVetor.map(somenteMaioresDeIdade)
console.log('resultado filter: ', resultado)
console.log('\n')
// Crie um objeto com os seus dados pessoais deve possui pelo menos duas propriedades nome e sobrenome
var meusDadosPessoais = {
  nome: 'Leonardo',
  sobrenome: 'Klestadt Luz',
  idade: 40,
  altura: 1.78,
  peso: 82.00
}
console.log(meusDadosPessoais)

// Crie um método no objeto anterior, que mostre o seu nome completo
var meusDadosPessoais = {
  nome: 'Leonardo',
  sobrenome: 'Klestadt Luz',
  idade: 40,
  altura: 1.78,
  peso: 82.00,
  showNomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
  }
}
console.log(meusDadosPessoais.showNomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000

console.log(carro.preco)

// Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem
var verHomem = true
var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir() {
    if(verHomem) {
      return 'AU AU AU AU'
    } else {
      return 'Rzrzrzrzrzrz'
    }
  }
}
console.log(cachorro.latir())

















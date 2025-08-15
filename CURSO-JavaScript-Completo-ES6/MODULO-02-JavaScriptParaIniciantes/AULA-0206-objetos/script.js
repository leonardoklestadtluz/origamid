// Objetos

// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos

// var pessoa = {
//   nome: "André",
//   idade: 28,
//   profissão: "Designer",
//   possuiFaculdade: true,
// };

// console.log(pessoa);
// console.log(pessoa.nome); // 'André'
// console.log(pessoa.possuiFaculdade); // true

// Métodos

// É uma propriedade que poissui uma função no local de seu valor.
// var quadrado = {
//   lados: 4,
//   area: function (lado) {
//     // os : e a palavra chave function pode ser omitida
//     return lado * lado;
//   },
//   perimetro: function (lado) {
//     // os : e a palavra chave function pode ser omitida
//     return this.lados * lado;
//   },
// };
// console.log(`Lados = ${quadrado.lados}`); // 4
// console.log(`Área = ${quadrado.area(5)}`); // 25
// console.log(`Perímetro = ${quadrado.perimetro(5)}`); // 20

// Organizar o Código

// Objetos servem para organizar o código em pequenas partes reutilizáveis

// Math.PI; // 3,14
// Math.random(); //número aleatório

// var pi = Math.PI;
// console.log(pi); // 3,14

// Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() é um método?

// Criar um objeto

// Um objeto é criado utilizando as {}

// var carro = {}
// var pessoa = {}
// console.log(typeof carro) // object

// Dot Notation Get
// Acesse propriedades de um objeto utilizando o ponto final . 

// var menu = {
//   width: 800,
//   height: 50,
//   backgroundColor: '#84e'
// }

// var bg = menu.backgroundColor // '#84e'
// console.log(bg)

// menu.backgroundColor = '#000'
// console.log(menu)

// menu.esconder = function() {
//   console.log('Esconder')
// }

// menu.esconder()


// Palavra-chave this
// this irá fazer uma referência ao próprio objeto

// var heigth = 120
// var menu = {
//   width: 800,
//   height: 50,
//   metadeHeight() {
//     return this.height / 2
//   }
// }

// console.log(menu.metadeHeight()) // 25
// sem o this seria 60

// this irá retornar o próprio objeto













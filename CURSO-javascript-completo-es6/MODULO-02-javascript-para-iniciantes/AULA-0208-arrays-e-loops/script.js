// Array
// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.
// var videoGames = ['Switch', 'PS4' , 'XBox']

// console.log(videoGames[2])

// Acesse um elemento da array utilizando [n]

// Métodos e propriedades de uma Array
// var videoGames = ['Switch', 'PS4' , 'XBox']

// videoGames.pop() // remove o último item e retorna ele
// videoGames.push('3DS') // adiciona ao final da array
// videoGames.length // 3

// Existem diversos outros métodos,
// como map, reduce, forEach e 
// mais que veremos mais à frente

// For Loop
// Fazem algo repetidamente até que uma condição seja atingida

// for (var numero = 0; numero <= 100; numero++) { // retorna de 0 a 9 no console
//   console.log(numero)
// }

// o for loop possuí três partes - início, condição, incremento

// While Loop
// var i = 0
// while (i < 10) { // retorna de 0 a 9 no console
//   console.log(i)
//   i++
// }

// o for loop é mais comum

// var videoGames = ['Switch', 'PS4' , 'XBox', '3DS', 'Nintendo']

// for (var item = 0; item < videoGames.length; item++) {
//   console.log(videoGames[item])
// }

// Break

// O loop irá parar caso encontre a palavra break

// var videoGames = ['Switch', 'PS4' , 'XBox', '3DS', 'Nintendo']
// for (let i = 0; i < videoGames.length; i++) {
//   console.log(videoGames[i]);
//   if (videoGames[i] === 'PS4') {
//     break
//   }
// }


// forEach

// forEach é um método que executa uma função para cada item da Arrey. É uma forma mais simples de utilizarmos um loop com arrays(ou array like).

// var videoGames = ['Switch', 'PS4' , 'XBox', '3DS', 'Nintendo']
// videoGames.forEach(function(item) {
//   console.log(item)
// }) 
// O argumento item será atribuído dinâmicamente
 
// var marcas = ['Ford', 'Redragon', 'Acer', 'Technos']
// marcas.forEach(function(marca) {
//   console.log(marca)
// })

// var marcas = ['Ford', 'Redragon', 'Acer', 'Technos']
// marcas.forEach(function(marca, index, array) {
//   console.log(marca, index, array)
// })

// Podemos passar os seguintes parâmetros: item, index e array

// Não se confunda com a sintaxe

var numero = 0
var maximo = 50
for(; numero < maximo;) {
  console.log(numero)
  numero++
}

// Não aconselho escrever desta forma acima, mas funciona normalmente.










































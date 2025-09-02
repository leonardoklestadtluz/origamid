// Seleção de Elementos

// ID
// getElementById seleciona e retorna elementos do DOM

// Seleciona pelo ID
// const animaisSection = document.getElementById('animais')
// const contatoSection = document.getElementById('contato')

// // Retorna null caso não exista
// const naoExiste = document.getElementById('teste')


// console.log(animaisSection)
// console.log(contatoSection)
// console.log(naoExiste)


// Classe e Tag

// getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

// Seleciona pela classe, retorna uma HTMLCollection

// const gridSection = document.getElementsByClassName('grid-section')
// const contato = document.getElementsByClassName('grid-section contato')
// console.log(gridSection)
// console.log(contato)

// // Seleciona todas as UL's, retorna uma HTMLCollection
// const ul = document.getElementsByTagName('ul')
// console.log(ul)

// // Retorna o primeiro elemento
// console.log(gridSection.length)

// Seletor Geral Único

// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

// const animais = document.querySelector('.animais')
// const contato = document.querySelector('#contato')
// const ultimoItem = document.querySelector('.animais-lista li:last-child')
// const linkCSS = document.querySelector('[href^="https://"]')
// const primeiroUL = document.querySelector('ul')

// console.log(animais)
// console.log(contato)
// console.log(ultimoItem)
// console.log(linkCSS)
// console.log(primeiroUL)

// // Busca dentro do UL apenas
// const navItem = primeiroUL.querySelector('li')

// console.log(navItem)


// const linkInterno = document.querySelector('[href^="#"]')
// console.log(linkInterno)


// Seletor Geral Lista

// querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList


const gridSection = document.querySelectorAll('.grid-section')
const listas = document.querySelectorAll('ul')
const titulos = document.querySelectorAll('.titulo')
const fotosAnimais = document.querySelectorAll('.animais-lista img')

console.log(gridSection)
console.log(listas)
console.log(titulos)
console.log(fotosAnimais)
console.log(gridSection[1])

// Diferente do getElementsByClassName, a lista aqui é estática





























































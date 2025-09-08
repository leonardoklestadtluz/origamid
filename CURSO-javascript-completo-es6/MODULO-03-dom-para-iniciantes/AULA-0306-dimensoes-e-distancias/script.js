// Height e Width

// Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only
// const section = document.querySelector('.animais');

// section.clientHeight; // height + padding
// section.offsetHeight; // height + padding + border
// section.scrollHeight; // height total, mesmo dentro de scroll

// Mesma coisa para o Width, clientWidth

// offsetTop e offsetLeft

// const listaAnimais = document.querySelector('.animais-lista')

// const height = listaAnimais.scrollHeight
// const animaisTop = listaAnimais.offsetTop
// console.log(height)

// const primeiroH2 = document.querySelector('h2')
// const h2Left = primeiroH2.offsetLeft
// console.log(h2Left)

// getBoundingClientRect()

// Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

// const primeiroH2 = document.querySelector('h2')
// const rect = primeiroH2.getBoundingClientRect()
// console.log(rect.top)

// Window

// console.log(
//   window.innerWidth, // width do janela
//   window.outerWidth, // soma dev tools também
//   window.innerHeight, // height do janela
//   window.outerHeight, // soma a barra de endereço
  
//   window.pageYOffset, // distância total do scroll vertical
//   window.pageXOffset // distância total do scroll horizontal
// )

// if(window.innerWidth < 600) {
//   console.log('Tela menor que 600px');
// }


const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}































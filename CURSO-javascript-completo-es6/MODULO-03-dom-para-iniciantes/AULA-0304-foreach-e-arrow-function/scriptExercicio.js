// Mostre no console cada parágrado do site
const cadaParagrafo = document.querySelectorAll('p')
// cadaParagrafo.forEach((paragrafo) => {console.log(cadaParagrafo)})


// Mostre o texto dos parágrafos no console
const textoParagrafo = document.querySelectorAll('p')
textoParagrafo.forEach((paragrafo) => {console.log(paragrafo.innerText)})


// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);























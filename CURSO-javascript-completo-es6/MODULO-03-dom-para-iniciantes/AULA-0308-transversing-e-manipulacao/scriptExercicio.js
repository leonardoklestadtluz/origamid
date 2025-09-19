// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')

const cloneMenu = menu.cloneNode(true)
console.log(cloneMenu)

const copy = document.querySelector('.copy')
copy.appendChild(cloneMenu)


// Selecione o primeiro DT da dl de Faq
const primeiroDt = document.querySelector('.faq-lista')
console.log(primeiroDt.children[0])

// Selecione o DD referente ao primeiro DT
const primeiroDd = document.querySelector('.faq-lista')
console.log(primeiroDd.children[1])

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais')
faq.innerHTML = animais.innerHTML



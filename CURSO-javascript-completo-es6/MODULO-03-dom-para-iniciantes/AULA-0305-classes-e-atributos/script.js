// classList

// Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

// const menu = document.querySelector('.menu')

// console.log(menu.className) // string
// console.log(menu.classList) // lista de classes
// menu.classList.add('ativo') // adiciona a classe ativo
// menu.classList.add('ativo', 'mobile') // adiciona mais de uma classe
// menu.classList.remove('ativo') // remove a classe ativo
// menu.classList.toggle('ativo') // adiciona ou remove a classe
// menu.classList.contains('ativo') // verifica se a classe existe ou não, true ou false
// menu.classList.replace('ativo', 'inativo') // substitui a classe ativo por inativo, neste caso


// menu.classList.add('ativo', 'teste')
// menu.classList.add('possui-azul')

// if (menu.classList.contains('azul')) {
//   menu.classList.add('possui-azul')
// } else {
//   menu.classList.add('não-possui-azul')
// }

// attributes
// Retorna uma array-like com os atributos do elemento.

// const animais = document.querySelector('.animais');

// console.log(animais.attributes); // retorna todos os atributos
// console.log(animais.attributes[1]); // retorna o primeiro atributo


// getAttribute e setAttribute
// Métodos que retornam ou definem de acordo com o atributo selecionado

// const img = document.querySelector('img');

// img.getAttribute('src'); // valor do src
// img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
// img.hasAttribute('id'); // true / false
// img.removeAttribute('alt'); // remove o alt

// img.hasAttributes(); // true / false se tem algum atributo

// É muito comum métodos de get e set;


// Read Only vs Writable

// Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.

const animais = document.querySelector('.animais');

animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, read-only

// Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = ''



































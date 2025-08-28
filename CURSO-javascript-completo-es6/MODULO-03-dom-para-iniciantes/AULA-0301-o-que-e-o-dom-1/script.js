// Document Object Model (DOM)

//É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

// console.log(window);
// // window é o objeto global do browser
// // possui diferentes métodos e propriedades

// window.innerHeight; // retorna a altura do browser


// Ao inspecionar elemento com o Chrome, você está vendo a representação oficial do DOM.


// Window e Document

// São os objetos principais do DOM, boa parte da manipulação é feita através de seus métodos e propriedades.


// window.alert('Isso é um alerta')
// alert('Isso é um alerta') // FUnciona

// document.querySelector('h1') // Seleciona o primeiro h1
// document.body // Retorna o body

// window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades.

// const href = window.location.href
// console.log(href)

// if (href === 'http://127.0.0.1:5500/AULA-0301-o-que-e-o-dom-1/index.html') {
//   console.log('IGUAL')
// } else {
//   console.log('DIFERENTE')
// }


// const element = document.querySelector('h1')
// console.log(element.innerHTML)


// Node

// Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo









































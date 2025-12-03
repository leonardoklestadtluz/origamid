// const comida = 'pizza'

// const agua = new String('AGUA')

// console.log(comida.length)

// const frase = 'A melhor comida'
// console.log(frase[frase.length - 1])
// console.log(frase.charAt(frase.length))


// const frase = 'A melhor linguagem é '
// const linguagem = 'Javascript'
// const fraseFinal = frase.concat(linguagem, '!!')


// const fruta = 'Banana';
// const listaFrutas = 'Melancia, Banana, Laranja';

// listaFrutas.includes(fruta); // true
// fruta.includes(listaFrutas); // false

// const fruta = 'Banana';
// const listaFrutas = 'Melancia, Banana, Laranja';

// listaFrutas.includes(fruta); // true
// fruta.includes(listaFrutas); // false


// const fruta = 'Banana';

// fruta.endsWith('nana'); // true
// fruta.startsWith('Ba'); // true
// fruta.startsWith('na'); // false



// const transacao1 = 'Depósito de cliente';
// const transacao2 = 'Depósito de fornecedor';
// const transacao3 = 'Taxa de camisas';

// transacao1.slice(0, 3); // Dep
// transacao2.slice(0, 3); // Dep
// transacao3.slice(0, 3); // Tax

// transacao1.slice(12); // cliente
// transacao1.slice(-4); // ente
// transacao1.slice(3, 6); // ósi


// const linguagem = 'JavaScript';
// linguagem.substring(3,5); // aS
// linguagem.substring(0,4); // Java
// linguagem.substring(4); // Script
// linguagem.substring(-3); // JavaScript

// const instrumento = 'Guitarra';

// instrumento.indexOf('r'); // 5
// instrumento.lastIndexOf('r'); // 6
// instrumento.indexOf('ta'); // 3


// const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

// listaPrecos.forEach((preco) => {
//   console.log(preco.padStart(10, '.'));
// })

// listaPrecos[0].padStart(10, '.'); // .....R$ 99
// listaPrecos[0].padEnd(10, '.');   // R$ 99.....


// str.repeat(n)
// Repete a string (n) vezes.

// const frase = 'Ta';

// frase.repeat(5); // TaTaTaTaTa


// str.replace(regexp|substr, newstr|function)

//Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

// let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
// listaItens = listaItens.replace(/[ ]+/g, ', ');

// let preco = 'R$ 1200,43';
// preco = preco.replace(',', '.'); // 'R$ 1200.43


// Veremos mais sobre Regular Expression


// str.split(padrao)

// Divide a string de acordo com o padrão passado e retorna uma array.

// const listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
// const arrayItens = listaItens.split(' ');

// const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
// const htmlArray = htmlText.split('div');
// const htmlNovo = htmlArray.join('section');

// join é um método de Array


// str.toLowerCase() e str.toUpperCase()
// Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.

// const sexo1 = 'Feminino';
// const sexo2 = 'feminino';
// const sexo3 = 'FEMININO';

// (sexo1.toLowerCase() === 'feminino'); // true
// (sexo2.toLowerCase() === 'feminino'); // true
// (sexo3.toLowerCase() === 'feminino'); // true


// str.trim(), str.trimStart(), str.trimEnd()
// Remove espaço em branco do início ou final de uma string.

const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'















































































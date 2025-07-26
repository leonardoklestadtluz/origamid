// Números

// var idade = 28
// var gols = 1000
// var pi = 3.14 // ponto para decimal
// var exp = 2e32 // 20000000000

// console.log(idade, gols, pi, exp);

//  Operadores aritméticos

// var adicao = 10 + 8
// var subtracao = 74 - 89
// var multiplicacao = 14 * 7
// var divisao = 90 / 3
// var modulo = 45524879652145 % 3

// console.log(`Adição: ${adicao}`);
// console.log(`Subtracao: ${subtracao}`);
// console.log(`Multiplicação: ${multiplicacao}`);
// console.log(`Divisão: ${divisao}`);
// console.log(`Resto da divisão: ${modulo}`);


//  Operadores aritméticos (STRINGS)

// var soma = '100' + 50 // 10050
// var subtracao = '100' - 50 // 50
// var multiplicacao = '100' * '2' // 200
// var divisao = 'Comprei 100' / 2 // NaN (Not a Number)

// console.log(`Soma: ${soma}`);
// console.log(`Subtração: ${subtracao}`);
// console.log(`Multiplicação: ${multiplicacao}`);
// console.log(`Divisão: ${divisao}`);

/*
É possivel verificar se uma
variável é NaN ou não com a
função isNaN()
*/

//console.log(`Sim, isso ${isNaN(divisao)}, não é um número.`);

// A ordem importa

// Começa por multiplicação e divisão e depois adição e subtração

var total1 = 20 + 5 * 2  // 30
var total2 = (20 + 5) * 2  // 50 - () para priorizar uma expressão
var total3 = 20 / 2 * 5  // 50
var total4 = 10 + 10 * 2 + 20 / 2  // 40

console.log(`${total1}`);
console.log(`${total2}`);
console.log(`${total3}`);
console.log(`${total4}`);










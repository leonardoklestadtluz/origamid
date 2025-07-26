// A ordem importa

// Começa por multiplicação e divisão e depois adição e subtração

// var total1 = 20 + 5 * 2  // 30
// var total2 = (20 + 5) * 2  // 50 - () para priorizar uma expressão
// var total3 = 20 / 2 * 5  // 50
// var total4 = 10 + 10 * 2 + 20 / 2  // 40

// console.log(`${total1}`);
// console.log(`${total2}`);
// console.log(`${total3}`);
// console.log(`${total4}`);


// Operadores Aritméticos Unários

// incremento
// var incremento = 5
// console.log(incremento++); // 5
// console.log(incremento); // 6

// var incremento2 = 5
// console.log(++incremento2); // 6
// console.log(incremento2); // 6


// decremento
// var incremento = 5
// console.log(incremento--); // 5
// console.log(incremento); // 4

// var incremento2 = 5
// console.log(--incremento2); // 4
// console.log(incremento2); // 4


// O sinal de + e -, tentam transformar o valor seguinte em número

// var frase = 'Isso é um teste'
// +frase // NaN
// -frase // NaN

// var idade = '28'
// +idade // 28 (número)
// -idade // -28 (número)
// console.log(+idade + 5); // 33, ñ senhor, RETORNOU NaN

// var possuiFaculdade = true
// console.log(+possuiFaculdade); // 1


// =====================


// Qual o resultado da expressão?
var total = 10 + (5 * 2 / 2) + 20
console.log(total);

// Crie duas expressões que retornem NaN
var expressao1 = 'Teste' / 2
var expressao2 = 'Teste' - 2
console.log(expressao1);
console.log(expressao2);

// Somar a string '200' com número 50 e retornar 250
var string = '200'
var número = 50
var total = +string + 50
console.log(total);

// Incremente o número 5 e retorne o seu valor incrementado
var numeroCinco = 5
console.log(++numeroCinco);


// Como dividir o peso por 2?
var numero = +'80' / 2
var unidade = 'kg'
var peso = numero + unidade // '80kg'
console.log(peso);








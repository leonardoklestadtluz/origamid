// Verifique se a sua idade é maior do que a de algum parente
var minhaIdade = 40
var idadeParente = 39
if (minhaIdade > idadeParente) {
  console.log('É maior')
} else if (minhaIdade === idadeParente) {
  console.log('É igual')
} else {
  console.log('É menor')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // true
var idade = 28; // true
var possuiDoutorado = false; // false 
var empregoFuturo; // false
var dinheiroNaConta = 0; // false

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log('Sim, Brasil maior que China')
} else {
  console.log('Não, Brasil não é maior que a China')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
console.log('Verdadeiro');
} else {
console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
console.log('Gato' && 'Cão');
} else {
console.log('Falso');
}
















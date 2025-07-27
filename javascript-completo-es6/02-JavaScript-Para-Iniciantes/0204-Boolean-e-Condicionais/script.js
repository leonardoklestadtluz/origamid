// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

 var minhaIdade = 40
 var idadeParente = 16

if(minhaIdade > idadeParente) {
  console.log('É maior');
} else if(minhaIdade === idadeParente) {
  console.log('É igual');
} else {
  console.log('É menor');
}


// Qual valor é retornado na seguinte expressão? 3
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
 var nome = 'Andre';
 var idade = 28;
 var possuiDoutorado = false;
 var empregoFuturo;
 var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207000000;
var china = 1340000000;

if (brasil > china) {
  console.log(`Brasil tem mais habitantes, ${brasil} do que a China.`)
} else {
  console.log(`China tem mais habitantes, ${china} que o Brasil.`);
}


// O que irá aparecer no console? Falso
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
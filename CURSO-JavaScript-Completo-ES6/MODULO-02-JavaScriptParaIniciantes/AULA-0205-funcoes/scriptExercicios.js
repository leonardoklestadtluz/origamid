// Crie uma função para verificar se um valor é Truthy
function verificaTruthy(valor) {
  if (!!valor) {
    return `${valor} é truthy`;
  } else {
    return `${valor} é falsy`;
  }
}
console.log(verificaTruthy(2));
// console.log(verificaTruthy(0));
// console.log(verificaTruthy());
// console.log(verificaTruthy(""));
// console.log(verificaTruthy("     "));
// console.log(verificaTruthy("t"));
// console.log(verificaTruthy("2t"));

// Crie uma função matemática que retorne o perímetro de um quadrado lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return (perimetro = lado * 4);
}
console.log(`Perímetro = ${perimetroQuadrado(2)} cm.`);

// Crie uma função que retorne o seu nome completo ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `Meu nome completo: ${nome} ${sobrenome}`;
}
console.log(nomeCompleto("Leonardo", "Klestadt Luz"));

//Crie uma função que verifica se um número é par
function ehPar(numero) {
  var modulo = numero % 2 === 0;
  if (modulo) {
    return `Número ${numero} é PAR`;
  } else {
    return `Número ${numero} não é PAR`;
  }
}
// console.log(ehPar(1));
console.log(ehPar(2));
// console.log(ehPar(3));
// console.log(ehPar(4));
// console.log(ehPar(5));
// console.log(ehPar(6));

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function tipoDado(parametro) {
  return typeof parametro;
}
console.log(`Dado informado é um(a): ${tipoDado(function () {})}`);

// addEventListener é uma função nativa do JavaScript o primeiro parâmetro é o evento que ocorre e o segundo o Callback utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer.

addEventListener("scroll", function () {
  console.log("Leonardo", "Klestadt Luz");
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));

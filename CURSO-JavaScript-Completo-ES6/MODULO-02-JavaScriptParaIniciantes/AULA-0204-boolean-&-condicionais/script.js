// Boolean

// Existem dois valores de booleanos false ou true

// var possuiGraduacao = true
// var possuiDoutorado = false

// console.log(possuiGraduacao, possuiDoutorado);

// Condicionais if e else

// Verificar se uma expressão é verdadeira com if, caso contrário else será ativado.

// var possuiGraduacao = true

// if(possuiGraduacao) {
//   console.log('Possui graduação');
// } else {
//   console.log('Não possui graduação');
// }

// var idade = 12 + 47
// var minhaIdade = 40
// if(minhaIdade > idade) {
//   console.log('Minha idade é maior'); 
// } else {
//   console.log('Sua idade é maior');
// }

// console.log(idade);

// retorna Possui graduação e não executa o else

// O valor dentro dos () sempre será avaliado em true ou false

// Condicioais else if
// var possuiGraduacao = false
// var possuiDoutorado = true

// if (possuiDoutorado) {
//   console.log('Possui graduação e doutorado');
// } else if (possuiGraduacao) {
//   console.log('Possui graduação, mas não possuí doutorado');
// } else {
//   console.log('Não possui graduação');
// }
// retorna Possui graduação, mas não possui doutorado

// Truthy e Falsy

// Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana

// Falsy
// if(false)
// if(0) // ou // 0
// if(NaN)
// if(Null)
// if(undefined)
// if('') // ou "" ``

// var nome = ''
// if (nome) {
//   console.log(nome);
// } else {
//   console.log('Nome está vazio');
// }

// Truthy
// if(true)
//   if(1)
//     if(' ')
//       if('Andre')
//         if(// 5)
//           if({})


// Operador Lógico de Negação !

// O operado !, nega uma operação booleana. Ou seje, !true é igaul a false

// Truthy
// if(!true)      // false
// if(!1)         // false
// if(!'')        // true
// if(!undefined) // true 
// if(!!)         // true
// if(!!'')       // false

// if(!possuiGraduacao) {
//   console.log('Não possui graduação');
// }

// Operdadores de comparação
// Sempre retornarão um valor booleano
// 10 > 5 //  true
// 5 > 10 //  false
// 20 < 10 // false
// 10 <= 10 // true
// 10 >= 11 // false

// var numero = 165
// if (numero > 100) {
//   console.log(`Numero: ${numero}`);
// } else if (numero >= 100) {
//   console.log(`${numero} é maior ou igual`);
// } else if (numero <= 100) {
//   console.log(`${numero} é menor ou igual`);
// } else {
//   console.log(`Não sei`);
// }

// O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

// 10 == '10' // true
// 10 == 10 // true
// 10 === '10' // false
// 10 === 10 // true 
// 10 != 15 // true
// 10 != '10' // false
// 10 !== '10' // true

// var x = 10
// console.log(x === 10);

// var x = '10'
// console.log(x === 10);

// var x = '10'
// console.log(x !== 10);

// Operadores lógicos ||

// || = compara se ambas expressões são verdadeiras

// true || true // true
// true || false // false
// false || true // false
// 'Gato' || 'Cão' // 'Cão' --> aqui será retornado o valor
// (5 - 5) || (5 + 5) // 0 --> aqui será retornado o valor
// 'Gato' || false // false
// (5 >= 5) || (3 < 6) // true

// Se ambos valores forem true, ele irá retornar o último valor verificado. Se algum valorfor false, irá retornar o mesmo e não continuará veficando os próximos.

// if ((5 - 5) || (5 + 5)) {
//   console.log('verdadeiro');
// } else {
//   console.log('Falso')
// }

// var condicional = (5 - 10) || (5 + 5)
// if (condicional) {
//   console.log('verdadeiro')
// } else {
//   console.log('Falso')
// }

// Operadores Lógicos ||

// || verifica se ao menos uma das expressões é verdadeira
// true || true // true
// true || false // true
// false || true // true
// 'Gato' || 'Cão' // 'Gato' --> aqui será retornado o valor
// (5 - 5) || (5 + 5) // 10 --> aqui será retornado o valor
// 'Gato' || false // 'Gato'
// (5 >= 5) || (3 < 6) // true

// Retorna o 1º valor true que encontrar


// var condicional2 = (5-5) || (5+5) || (10-5)
// console.log(condicional2)
// if (condicional2) {
//   console.log('Verdadeiro')
// } else {
//   console.log('Falso')
// }

// Switch
// Com o switch você pode verificar se uma variável é igual a diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja veradeira.

var corFavorita = 'Rosa'
switch (corFavorita) {
  case 'Azul': 
    console.log('Olhe para o céu.')
    break
    case 'Vermelho':
      console.log('Olhe para rosas.')
      break
      case 'Amarelo':
        console.log('Olhe para o sol.')
        break
        default:
          console.log('Feche os olhos.')
          break
}







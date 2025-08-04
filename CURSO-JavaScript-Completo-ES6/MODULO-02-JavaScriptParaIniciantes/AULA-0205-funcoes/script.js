// Funções

// Bloco de ´codigo que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.

// function areaQuadrado(lado) {
//   return lado * lado
// }
// 
// areaQuadrado(4) // 16
// areaQuadrado(5) // 25
// areaQuadrado(2) // 4

//chamada de function declaration

// function areaQuadrado(lado) {
//   return lado * lado
// }

// console.log(areaQuadrado(3))



// function pi() {
//   return 3.14
// }

// var total = 5 * pi()
// console.log(total)


// Parâmetros e Argumentos

// Ao CRIAR uma função, você pode definir parâmetros.
// Ao EXECUTAR uma função, você pode passar argumentos.

// PESO e ALTURA são os argumentos
// function imc(peso, altura) {
//   const imc = peso / (altura ** 2)
//   return imc
// }

// console.log(imc (80, 1.80)) // 80 e 1.80 são os argumentos 
// console.log(imc (60, 1.70)) // 60 e 1.70 são os argumentos

// Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum.

// Parêntese executa a função

// function corFavorita(cor) {
//   if (cor === 'Azul') {
//     return 'Você gosta do céu'
//   } else if (cor === 'Verde') {
//     return 'Você gosta de mato'
//   } else {
//     return 'Você não gosta de nada'
//   } 
// }
// console.log(corFavorita()) // retorna 'Você não gosta de nada'

// Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer


// Argumentos podem ser funções

// Chamadas de Callback, geralmente são funções que ocorrem após algum evento

// addEventListener('click', function() {
//   console.log('Clicou')
// })

// A função possui dois argumentos
// Primeiro é a string 'click'
//Segundo é uma função anônima

// Funções anônimas são aquelas em que o nome da função não é definido, escritas como: function() {} ou () => {}



// Pode ou não retonar um valor

//Quando não definimos um return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir o valor do return ou não.

// function imc2(peso, altura) {
//   const imc2 = peso / (altura ** 2)
//   console.log(imc2)
// }

// imc2(80, 1.80) // retorna o imc2
// console.log(imc2(80, 1.80)) // retorna o imc e undefined

// Valores retornados
// Uma função pode retornar qualquer tipo de dado e até outras funções

// function terceiraIdade(idade) {
//   if (typeof idade !== 'number') {
//     return 'Informe a sua idade!'
//   } else if (idade >= 60) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(terceiraIdade(59))

// Cuidado, retornar diferentes tipos de dados em uma mesma função não é uma boa ideia.



// Escopo

// Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.


// function precisoVisitar(paisesVisitados) {
//   var totalPaises = 193
//   return `Ainda falta ${totalPaises - paisesVisitados} países.`
// }

// console.log(precisoVisitar(5)) // erro, tiotalPaises não definido


// console.log(precisoVisitar(5).totalPaises)


// Escopo Léxico

// Funções conseguem acessar variáveis que foram criadas no contexto pai.


var profissão = 'Designer'

function dados() {
  var nome = 'André'
  var idade = 28
  function outrosDados() {
    var endereco = 'Rio de Janeiro'
    var idade = 29
    return `${nome}, ${idade}, ${endereco}, ${profissão}`
  }
  return outrosDados()
}

console.log(dados())
console.log(outrosDados())



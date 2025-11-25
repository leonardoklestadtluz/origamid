function Pessoa(nome, idade) {
  this.nome = nome
  this.idade = idade
  this.abracar = function() {
    return 'Abraçou'
  }
}

Pessoa.prototype.andar = function() {
  return 'Pessoa andou'
}

const leonardo = new Pessoa('Leonardo', 41)

console.log(Pessoa.prototype)
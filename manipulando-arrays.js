console.log("Manipulando meu array.")

const avengers = [
  {
    "nome": "Capitão América",
    "genero": "H",
    "idade": 84,
    "habilidades": ["honestidade", "escudo", "porrada"]
  },
  {
    "nome": "Homem de Ferro",
    "genero": "H",
    "idade": 30,
    "habilidades": ["dinheiro", "inteligência", "porrada", "armadura"]
  },
  {
    "nome": "Capitã Marvel",
    "genero": "F",
    "idade": 45,
    "habilidades": ["porrada", "fogo", "super forte", "invencivel", "voar", "destreza"]
  },
  {
    "nome": "War Machine",
    "genero": "H",
    "idade": 40,
    "habilidade":["exercito", "armadura", "honestidade", "porrada"]
  },
  {
    "nome": "Gavião Arqueiro",
    "genero": "H",
    "idade": 36,
    "habilidade":["arco e flecha", "porrada"]
  }
]

// Quero listar todos os heróis que são homens
const masculino = avengers.filter(item => item.genero == "H")

console.log(masculino)

// Quero listar todos os nomes de heróis
// O que eu preciso retornar de fato? 
// Solução I
const nomes = avengers.map(item => [item.nome,item.genero])

// Solução II
const objetoDeHerois = avengers.map(item => {
  return {
    nome: item.nome,
    genero: item.genero
  }
})

// Preciso retornar o total de idade dos heróis
const totalIdade = avengers.reduce((total, item) => {
  return total + item.idade
}, 0)

// Listar um avenger que possua mais de 50 anos
const experiente = avengers.some((item) => item.idade > 50)

// Saber se todos os objetos do array possuem a habilidade porrada
const porrada = avengers.every(item => item.habilidades.includes("fogo"))

// Buscar avenger por genero = F
const buscaEspecifica = avengers.find(item => item.genero == "H")

console.log(objetoDeHerois)
console.log(nomes)
console.log(totalIdade)
console.log(experiente)
console.log(porrada)
console.log(buscaEspecifica)
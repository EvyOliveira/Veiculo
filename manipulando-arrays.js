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
const nomes = avengers.map(item => item.nome)

console.log(nomes)
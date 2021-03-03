console.log('Relembrando funções!')

/* 
* 1. Criar uma função que permita listar um veículo qualquer
* 2. Criar uma função que permita listar a placa de um veículo passando um ID
*/

function listarVeiculo() {
  console.log('Chamando a função listarVeículos');
  setTimeout(function() {
    return {
    id: 1,
    nome: "Gol"
    }
  }, 1000)
}

  function listarPlaca() {
    console.log('Chamando a função listarPlaca');
    let tempo = 2000;
    setTimeout(function() {
      return {
      id: id,
      nome: "Gol - placa do carro",
      placa: "XXX-YYYY"
    }
  }, tempo)
}

const veiculo = listarVeiculo();
const placa = listarPlaca(id = 1);

console.log(placa);
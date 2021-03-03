console.log('Relembrando funções!')

/* 
* 1. Criar uma função que permita listar um veículo qualquer
* 2. Criar uma função que permita listar a placa de um veículo passando um ID
*/

function listarVeiculo(callback){
  console.log('Chamando a função listarVeiculo()')
  setTimeout(function(){ return callback(null,{
      id: 1,
      nome:"Gol",});
  },3000)
}

function listarPlaca(id,callback){
  console.log('Chamando a função listarPlaca()')
  setTimeout(function(){
      return callback(null, {
          id:id,
          nome:'Gol',
          placa:"XXX-YXYY"
      });
  },4000)
}

listarVeiculo(function resolverVeiculo(erro,veiculo){
  listarPlaca(veiculo.id, function resolverPlaca(erroPlaca,placa){
      console.log(veiculo)
      console.log(placa)
  })
})

// const veiculo = listarVeiculo();
// const placa = listarPlaca(id = 1);

//console.log(placa);
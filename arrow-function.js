console.log('Exemplos de utilização de Arrow Function');
/*
* Criar uma  function que multiplica dois valores x e y
*/
function multNormal(x,y){
    return x * y;
}
console.log(' ')
console.log('multiplicação sem arrow Function:');
console.log(multNormal(2,3))
console.log(' ')

var arrowFunctionSemRetorno = (x,y)=> x * y;

console.log('multiplicação com arowFunction sem return:')
console.log(arrowFunctionSemRetorno(2,3));
console.log(' ')

var arrowFunctionComRetorno = (x,y)=>{
    if (y > x){
        return x * y;
    }else{
        return `${x} é maior que ${y}`
    }
}
console.log('multiplicação com arrowFunction com return :')
console.log(arrowFunctionComRetorno(2,3),"\n",arrowFunctionComRetorno(3,2));

var fnSplit = function(frase){
    return frase.split(' ');
}
 
var fnSplitAF = frase => frase.split(' ');

console.log(fnSplit('Olá estamos no CTT!'))
console.log('--------------------');
console.log(fnSplitAF('Olá estamos no CTT!'));

var fnSemParametros = function minhaFunction(){
    console.log('só uma saída normal!')
}
var fnSemParametrosAF = () => console.log('só uma saída normal');

console.log(fnSemParametros())
console.log(fnSemParametrosAF())

console.log("Exemplos de utilização de arrow function");

/*
 Eu preciso multiplicar dois valores denominados x e y
 */

 function multiplicarNormal(x, y) {
   return x * y
 }

 console.log(multiplicarNormal(2, 3))

 var arrowFunctionSemRetorno = (x, y ) => x * y;
 console.log(arrowFunctionSemRetorno(2, 3))

 var arrowFunctionSemRetorno = (x, y) => {
   if (y > x) {
     return x * y;
   } else {
     return console.log `${x} eh maior que ${y}`
   }
 }

 console.log(
   arrowFunctionSemRetorno(2, 3),
   arrowFunctionSemRetorno(2, 3)
 )
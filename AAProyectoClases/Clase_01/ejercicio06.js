"use strict";
/* 6. Realizar una función que reciba como parámetro un número y que retorne el cubo del mismo.
Nota : La función retornará el cubo del parámetro ingresado. Realizar una función que invoque a esta última y permita mostrar por consola el resultado.  */
function Cubo(numero) {
    return Math.pow(numero, 3);
}
function Mostrar(numero) {
    console.log(Cubo(numero));
}
var numero = 5;
//Muestro solo con la funcion "Cubo"
console.log(Cubo(numero));
//Muestro utilizando la funcion Mostrar
Mostrar(numero);
//# sourceMappingURL=ejercicio06.js.map
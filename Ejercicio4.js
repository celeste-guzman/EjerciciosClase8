//Ejercicio 4: Determinar si un número es par o impar 
//Enunciado: 
//En este ejercicio, aprenderás a utilizar operadores aritméticos y condicionales. 
//Debes escribir un programa que: 
//1. Solicite al usuario que ingrese un número entero. 
//2. Determine si el número es par o impar. 
//3. Muestre un mensaje indicando si el número es par o impar. 
//Requisitos: 
// Utiliza el operador módulo (%) para comprobar si el número es divisible por 2. 
//Usa una estructura if-else para mostrar el mensaje adecuado. 

const prompt= require("prompt-sync")();

const numero = parseFloat(prompt("Ingrese su numero: "));
let resultado = ''; 

if (numero == 0) {
    resultado = 'Su numero es cero'

} else if (numero > 0) {
    resultado = 'Su numero es positivo'
    
} else {
    resultado = 'Su numero es negativo'
}

console.log(resultado);

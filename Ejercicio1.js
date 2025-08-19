// En este ejercicio, practicarás el uso de variables y operadores aritméticos. Debes 
//escribir un programa en JavaScript que: 
//1. Solicite al usuario que ingrese un número cualquiera. 
//2. Calcule el doble de ese número. 
//3. Muestre el resultado en la consola. 
//Requisitos: 
//1. Utiliza la función prompt() para solicitar el dato al usuario. 
//2. Almacena el número ingresado en una variable. 
//3. Utiliza un operador aritmético para calcular el doble del número. 

const prompt = require ('prompt-sync')();

const numero = parseFloat(prompt('Ingrese un numero: '));

let calculo = numero * 4;

console.log('El doble de su numero es: ' + calculo);
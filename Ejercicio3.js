//Ejercicio 3: Suma de dos números ingresados por el usuario 
//Enunciado: 
//Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores 
//aritméticos. Escribe un programa que: 
//1. Pida al usuario que ingrese dos números. 
//2. Sume ambos números. 
//3. Muestre el resultado de la suma. 
//Requisitos: 
//Utiliza prompt() para recibir los números. 
//Utiliza parseFloat() para convertir las entradas a números. 
//Almacena los resultados en variables adecuadas y muestra el resultado. 

const prompt = require("prompt-sync") ();

let primerNumero = parseFloat(prompt('Ingrese el primer número: '));

let segundoNumero = parseFloat(prompt('Ingrese el segundo número: '));

function suma (numero1, numero2) {
  return numero1 + numero2;
}
let resultado = suma(primerNumero, segundoNumero)

console.log(`Resultado de la suma: ${resultado}`);
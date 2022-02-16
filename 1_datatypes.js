console.log(
  "1.datatypes: 👋 Bienvenidos, en este fichero se harán ejercicios sobre los tipos de datos"
);

/* Datos primitivos y no primitivos*/
//crear dos variables con el mismo contenido y comparar si ambas son iguales
var num = 3;
var num1 = 3;
if (num == num1) {
  console.log(num1);
}

//crear dos variables con el distinto contenido y comparar si ambas son iguales
var num2 = 10;
var num3 = 5;
if (num2 == num3) {
  console.log(num3);
}

//crear una variable de tipo string y otra de tipo int, ambas con el mismo valor numérico. Compararlas para ver si contienen el mismo valor

//utilizar las mismas variables del ejercicio anterior y realizar una comparación estricta

//crear dos arrays con el mismo contenido y comparar con "==" si ambos arrays son iguales

// crear un objeto "usuario", con tres propiedades
const usuario = {
  propiedad1: "Alberto",
  propiedad2: 22,
  propiedad3: "abril",
};
/* Operaciones con números */
//crear una constante para la gravedad y redondearla con el método Math.round
const gravedad = 9.8;
Math.round(gravedad, 10);
console.log(gravedad);
//incrementar una variable con otra variable con el operador  =+
console.log((num1 = +num2));
//eleva un número a otro utilizando **

//eleva un número a otro utilizando un bucle

// generar un número aleatorio del 0 al 100

// genera un array de 10 números aleatorios del 0 al 100 y muestra el máximo y mínimo

// lo mismo que el anterior, pero usando las funciones Math.min y Math.max

/* Operaciones con strings */
//crear una cadena de caracteres y convertirla a mayúsculas y minúsculas con los métodos predeterminados destinados para ello

//reemplazar Pascal por Javascript en la frase "Pascal es un lenguaje de programación moderno"

//crear una variable con frase/cadena de caracteres y comprobar la longitud

//eliminar "script" de la palabra Javascript con el método substr

//comprueba si la frase "Espero que esto me sirva para algo" contiene la palabra "algo"

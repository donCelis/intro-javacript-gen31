// comentarios a una línea -> documentar
/* comentarios a doble línea -> comentar código */

// Variables
// declaracion de variables
/* let nombre; */
// asignacion de variables
/* nombre = "Juan"; */

// declaracion y asignacion de variables
/* let apellido = "Perez"; */

// let o const
// let -> variable que puede cambiar su valor
let nombre = "Juan";
nombre = "Pedro";
// const -> variable que no puede cambiar su valor
const apellido = "Perez";

// tipos de datos primitivos
// string -> cadena de caracteres
const nombreEstudiante = "Frida";
const otroNombre = 'Frida';

// number -> números
const edad = 28;
const precio = 12.5;
const precioCelular = 12_000_000;
// boolean -> valores de verdad
const esEstudiante = true;
const test = '100' + 100;
// null -> vacío
const nada = null;
// undefined -> indefinido

// typeof -> devuelve el tipo de dato de una variable
console.log(typeof nombre);
console.log(test);
console.log(typeof test);

let x;
console.log(typeof x);

const valor = Symbol(10);
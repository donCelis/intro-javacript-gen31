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
const otroNombre = "Frida";

// number -> números
const edad = 28;
const precio = 12.5;
const precioCelular = 12_000_000;
// boolean -> valores de verdad
const esEstudiante = true;
const test = "100" + 100;
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

// operadores aritméticos
// + - * / % ++ --
let numero = 10;
let numero2 = 20;
let resultado = numero + numero2;
console.log(resultado);

// objetos
const userName = "Juan";
const userLastName = "Perez";
const userAge = 28;
const userIsStudent = true;

// objeto -> agrupación de datos
// clave: valor
console.log("----Objeto----");
const user = {
  firstName: "Juan",
  lastName: "Perez",
  age: 28,
  isStudent: true,
  apellido: false,
  state: {
    name: "Bogotá",
    country: "Colombia",
  },
  "color-preferido": "rojo",
};

// acceder a los valores de un objeto
console.log(user);
console.log(typeof user);
console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.isStudent);
console.log(user.state.name);
console.log(user["color-preferido"]);

console.log(user?.apellido ?? "No existe el apellido"); // null, undefined
console.log(user?.apellido || "No existe el apellido"); // null, undefined, 0, false, ''
console.log("false");
console.log(-10);

// arrays -> arreglos
console.log("----Arreglos----");
const frutas = ["manzana", "pera", "banano", "fresa", "uva"];
const verduras = ["tomate", "cebolla", "papa", "zanahoria"];
console.log(frutas[0]);
console.log(frutas[2]);

const frutasVerduras = [frutas, verduras];
const frutasVerduras2 = [
  ["manzana", "pera", "banano", "fresa", "uva"],
  ["tomate", "cebolla", "papa", "zanahoria"],
];
console.log(frutas);
console.log(frutasVerduras[1][1]); // verduras -> cebolla
console.log(frutasVerduras2[1][1]); // verduras -> cebolla
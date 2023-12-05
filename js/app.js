// comentarios a una línea -> documentar
/* comentarios a doble línea -> comentar código */

// Variables
// declaracion de variables -> var(x), let, const
/* let nombre; */
// asignacion de variables -> =
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
  nickName: "juancho",
  password: "123456",
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

console.log("----Operadores de comparación----");
// operadores de comparación -> devuelven un valor booleano
// == -> igualdad
console.log("10" == 10); // comparar valores
// === -> igualdad estricta
console.log("10" === 10); // comparar valores y tipos de datos

// != -> desigualdad
console.log("10" != 10); // comparar valores
// !== -> desigualdad estricta
console.log("10" !== 10); // comparar valores y tipos de datos
console.log(!undefined);

// mayor que -> >
console.log(10 > 9); // true
// menor que -> <
console.log(10 < 10); // false
// mayor o igual que -> >=
console.log(10 >= 10); // true
// menor o igual que -> <=
console.log(10 <= 10); // true

// operadores lógicos -> devuelven un valor booleano
// and -> && -> verdadero si todas las condiciones son verdaderas
console.log(10 < 10 && 10 >= 10); // false
console.log(true && false); // false
console.log(false && false); // false
console.log(true && true && true && true); // true
console.log(true && true && true && false); // false

// or -> || -> falso si todas las condiciones son falsas
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false || false || false); // false
console.log(false || false || true || false); // true

// not -> ! -> negación
console.log(!true); // false
console.log(!false); // true

// condicionales
/* const userNickInput = prompt("Ingrese su nombre");
const userPasswordInput = prompt("Ingrese su contraseña"); */

// condicional simple -> if
// si el usuario es juancho y la contraseña es 123456
/* if (userNickInput === user.nickName && userPasswordInput === user.password) {
  console.log("Bienvenido");
} */

// condicional compuesto -> if - else
// si el usuario es juancho y la contraseña es 123456
const userNickInput = 'juancho';
const userPasswordInput = '123456';
if (userNickInput === user.nickName && userPasswordInput === user.password) {
  console.log("Bienvenido");
} else {
  console.log("Usuario o contraseña incorrecta");
}

// condicional múltiple -> if - else if - else
// si el usuario es juancho y la contraseña es 123456
/* if (userNickInput === user.nickName && userPasswordInput === user.password) {
  console.log("Bienvenido");
} else if (
  userNickInput === user.nickName &&
  userPasswordInput !== user.password
) {
  console.log("Contraseña incorrecta");
} else {
  console.log("Usuario o contraseña incorrecta");
} */

// operador ternario
// condicion ? verdadero : falso
const validateLogin =
  userNickInput === user.nickName && userPasswordInput === user.password
    ? user
    : null;

/* 
  1 -> validateLogin -> user si es un objeto que tiene la propiedad firstName
  2 -> validateLogin -> null es null
*/

/* if (validateLogin?.nickName) {
  alert("Bienvenido");
} else {
  alert("Usuario o contraseña incorrecta");
} */

/* Ciclos */

let index = 11;
//let contador = 0;
/* while (index >= 0) {
  console.log("index:", index);
  index--;
} */

/* do {
  console.log("index:", index);
  index--;
} while (index >= 0) */

/* Alcance o scope */

{
  //FIXED:
  let contador = 58;
  console.log("alcance privado", contador);
}


//FIXED:
let contador = 5;


for (let i = 0; i < 10; i++) {
  //FIXED:
  let contador = 0;
  if (i % 2 === 0) {
    contador++;
    contador = contador * 2;
  }
  console.log("Dentro del for", contador);
}


console.log("Alcance global", contador);


/* Funciones */

/* const n1 = 2;
const n2 = 3;
const suma = n1 + n2;

const n3 = 123;
const n4 = 1028312;
const otraSuma = n3 + n4; */

/* 
  Funciones son fragmentos de código que se
  crean para resolver una tarea, y que pueden ser reutilizados

  Solo podemos retornar una sola vez por función
 */

/* function suma(primerNumero = 0, segundoNumero = 0) {
  if (isNaN(primerNumero) || isNaN(segundoNumero)) return "Valores no validos";
  return primerNumero + segundoNumero;
} */


/* console.log("suma con un valor", suma(5));
console.log("suma sin valores", suma());
console.log("suma normal", suma(5, 15)); */


function suma({ primerNumero = 0, segundoNumero = 0 }) {
  if (isNaN(primerNumero) || isNaN(segundoNumero)) return "Valores no validos";
  return primerNumero + segundoNumero;
}

let operandos = {
  tercerParametro: 15,
  segundoNumero: 18,
  primerNumero: 5
}
/* Destructuración */
const { primerNumero, segundoNumero, tercerParametro } = operandos;

console.log(primerNumero)
console.log(segundoNumero)

let operandos2 = {}

console.log("suma con un valor", suma({ segundoNumero: 18, primerNumero: 10 }));
//console.log("suma sin valores", suma());
//console.log("suma normal", suma(5, 15));

// alert(suma(2, 9));

/* const valorUsuario1 = Number(prompt("Ingrese el primer valor"));
const valorUsuario2 = Number(prompt("Ingrese el segundo valor"));

console.log(suma(valorUsuario1, valorUsuario2)); */

const valoresNumericos = {
  primerNumero: 80,
  segundoNumero: 20,
};

console.log(suma(valoresNumericos));
console.log(suma({ primerNumero: 30 }));

function operacionesMat(n1 = 0, n2 = 0) {
  function suma() {
    return n1 + n2;
  }

  function resta() {
    return n1 - n2;
  }

  function multi() {
    return n1 * n2;
  }

  return { suma, resta, multi };
}

const getNombre = () => console.log("José Hernández");

/* getNombre();
getNombre();
getNombre(); */

let alias = getNombre;

console.log(operacionesMat(3, 2).suma());
console.log(operacionesMat(3, 2).resta());



/* Desestructuración */

const valoresNumericosObj = {
  primerNumero: 80,
  segundoNumero: 20,
};

// console.log(valoresNumericos.primerNumero)

const { primerNumero: numeroUno } = valoresNumericos;
console.log(numeroUno);

const arregloDeNumeros = ["a", "b", "c", "d", "e", "z"];

const [primerDato, segundoDato] = arregloDeNumeros;

console.log("primer dato", primerDato);

function operacionesMat(n1 = 0, n2 = 0) {
  function suma() {
    return n1 + n2;
  }

  function resta() {
    return n1 - n2;
  }

  function multi() {
    return n1 * n2;
  }

  return { suma, resta, multi };
}

const { suma: sumaFunc, multi: multiFunc } = operacionesMat(3, 4);
const { multi } = operacionesMat(2, 3);

console.log(sumaFunc());
console.log(multi());

/* Obtuve el boton desde el html en forma de objeto*/
/* const buttonLogin = document.getElementById('login_btn');

buttonLogin.addEventListener('click', () => console.log('Click en boton login'))
buttonLogin.addEventListener('mouseover', () => console.log('Hover en boton login')) */


/* ESTOS EJEMPLOS SOLO FUNCIONAN CON EL ARCHIVO testing_events.html */


/* Ejemplo con eventListeners */


// Obtener el botón por su ID
/* const botonCambioColor = document.querySelector('#botonCambioColor')
 */
// Agregar un EventListener para el clic
/* botonCambioColor.addEventListener("click", cambiarColorFondo);
 */
function cambiarColorFondo() {
  // Obtener el elemento por su ID
  const elemento = document.querySelector("#elementoAModificar");

  // Cambiar el color de fondo
  elemento.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  // Generar un color hexadecimal aleatorio
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// DOM -> Document Object Model (HTML) -> Document
// BOM -> Browser Object Model (Navegador) -> Window
// CSSOM -> CSS Object Model (CSS) -> CSSStyleDeclaration

const $login = document.getElementById("login");
const $buttonLogin = document.getElementById("btnLogin");

const cualquierCosa = () => console.log("cualquier cosa");

((n1, n2) => {
  console.log(n1, n2);
})(10, 20);

function otraCosa() {
  console.log("otra Cosa");
}

/* (function (n1, n2) {
  console.log(n1, n2);
})(50, 50); */

/* $buttonLogin.addEventListener("click", cualquierCosa);
$buttonLogin.addEventListener("click", function () {
  console.log("cualquier cosa");
});

$buttonLogin.addEventListener("click", () => {
  console.log("cualquier cosa");
}); */

const getFormValues = (form) => Object.fromEntries(new FormData(form));

$login.addEventListener("submit", (event) => {
  event.preventDefault();
  // const { email, password } = event.target;
  // ids
  // console.log(email.value)
  // console.log(password.value)

  // name
  // console.log(email.value);
  // console.log(password.value)

  const { email, password } = getFormValues($login);

  if (email === user.email && password === user.password) {
    console.log("ok");
    event.target.reset();
  } else {
    console.log("error");
  }

  // $login.reset();
  // event.target.reset();
  // localStorage
});

const user = {
  name: "Romina",
  lastName: "Arenas",
  password: "123456",
  email: "romina2023@correo.com",
};

/* console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.fromEntries(user)) */

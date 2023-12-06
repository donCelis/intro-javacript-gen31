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

(function (n1, n2) {
  console.log(n1, n2);
})(50, 50);

$buttonLogin.addEventListener("click", cualquierCosa);
$buttonLogin.addEventListener("click", function () {
  console.log("cualquier cosa");
});

$buttonLogin.addEventListener("click", () => {
  console.log("cualquier cosa");
});

// $login.addEventListener("submit", cualquierCosa);

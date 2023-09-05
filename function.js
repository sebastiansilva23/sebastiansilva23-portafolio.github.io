document.addEventListener("DOMContentLoaded", () => {
const btnSalir = document.getElementById("deslogear");


function salir(){
    localStorage.clear();
    location.href = "login.html";
}
 btnSalir.addEventListener("click", () => {
    salir();
 });
})
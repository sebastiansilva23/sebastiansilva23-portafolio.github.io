document.addEventListener("DOMContentLoaded", () => {

    const btnInvitado = document.getElementById("btnInvitado");
    const alertaDenegado = document.getElementById("alerta");
    const btnDenegado = document.getElementById("btnDenegado");

    function accesoDenegado(){
        alertaDenegado.classList.remove("hidden");
        Sleep(2000).then(() =>{
            accesoDenegado.style.opacity = '0';
            alertaDenegado.classList.add("hidden")
        })
        alertaDenegado.style.opacity = '1';
    }

    function validarPassword(password){
        return (password.length >= 8);
    }

    function validarEmail(email){
        return (email != "");
    }

    function login(password, email){
        if ((validarPassword(password)) && (validarEmail(email))){
            localStorage.setItem("email",email);
            localStorage.setItem("password", password);
            location.href = "index.html";
        }else {
            accesoDenegado();
        }    
        }
    
    const btnEnviar = document.getElementById("btnEnviar");

    btnEnviar.addEventListener("click", () => {
        let password = document.getElementById("password").value;
        let email = document.getElementById("email").value;
        login(password, email);
    });
    btnInvitado.addEventListener("click", () =>{
        localStorage.setItem("email", "invitado");
        localStorage.setItem("password", "invitado");
        location.href = "index.html";
    })

    function Sleep (time) {
        return new Promise((resolve) => setTimeout(resolve,time));
    }
})
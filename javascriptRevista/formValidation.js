var formulario = document.getElementById("form")
var nombre = document.getElementById("fName");
var apellido = document.getElementById("lName");
var email = document.getElementById("email");

function validaNombre() {
    const nombreValor = nombre.value.trim();
    if (!nombreValor){
        nombre.style.border = "2px solid red";
        console.log('Completa el nombre');
        return false;
    } else if (nombreValor.length >= 33) {
        nombre.style.border = "2px solid red";
        console.log('El nombre no puede contener 33 letras o más');
        return false;
    } else {
        nombre.style.border = "2px solid green";
    }
}

function validaEmail() {
    const emailValor = email.value.trim();
    if (!emailValor){
        email.style.border = "2px solid red";
        console.log('Completa el email');
        return false;
    } else if (emailValor.length >= 33) {
        email.style.border = "2px solid red";
        console.log('El email no puede contener 33 letras o más');
        return false;
    } else if (!emailValor.includes("@")) {
        email.style.border = "2px solid red";
        alconsole.logrt('El email no contiene un @');
        return false;
    } else if (!emailValor.includes(".")) {
        email.style.border = "2px solid red";
        console.log('El email no contiene "." ');
        return false;
    } else {
        email.style.border = "2px solid green";
    }
}

function validaApellido() {
    const apellidoValor = apellido.value.trim();
    if (!apellidoValor){
        apellido.style.border = "2px solid red";
        console.log('Completa el apellido');
        return false;
    } else if (apellidoValor.length >= 33) {
        apellido.style.border = "2px solid red";
        console.log('El apellido no puede contener 33 letras o más');
        return false;
    } else {
        apellido.style.border = "2px solid green";
    }
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    validaNombre();
    validaApellido();
    validaEmail();
})



/* var form = document.getElementById("form");

form.addEventListener("submit", function(evt){
    evt.preventDefault();
    let nombre = document.getElementById("fName").value;
    if (nombre === null || nombre.length == 0 || /^\s+$/.test(valor)) {
      console.log("El campo debe ser completado");
      return false;
    }
});

form.addEventListener("submit", function(evt){
    evt.preventDefault();
    let apellido = document.getElementById("lName").value;
    if (apellido == null || apellido.length == 0 || /^\s+$/.test(valor)) {
      console.log("El campo debe ser completado");
      return false;
    }
}); */




/* window.addEventListener('load', ()=> {
    const form = document.getElementById('form');
    const nombre = document.getElementById('nombreForm');
    const apellido = document.getElementById('apellidoForm');
    const email = document.getElementById('emailForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validaCampos();
    })

    const validaCampos = ()=> {
        const nombreValor = nombre.value.trim();
        const apellidoValor = apellido.value.trim();
        const emailValor = email.value.trim();

        if (!nombreValor){
            alert('Campo vacío');
            return false;
        } else {
            alert('Válido');
        }

        if (!apellidoValor){
            alert('Campo vacío');
            return false;
        } else {
            alert('Válido');
        }

        if (!emailValor){
            alert('Campo vacío');
            return false;
        } else {
            alert('Válido');
        }
    }
}) */

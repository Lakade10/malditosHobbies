var formulario = document.getElementById("form")
var nombre = document.getElementById("fName");
var apellido = document.getElementById("lName");
var email = document.getElementById("email");

const url = 'https://opentdb.com/api.php?amount=1'

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

function API() {
fetch(url)
.then (response => response.json())
.then (data => {
    let api = document.getElementById("api");
    api.style.color = 'rgb(68, 68, 68)';
    api.innerHTML = `<p><b>Question: </b>${(data.results[0].question)}</p><p><b>Answer: </b>${data.results[0].correct_answer}</p>`;
})}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    validaNombre();
    validaApellido();
    validaEmail();
    API();
})
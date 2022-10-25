var form = document.getElementById("form");

form.addEventListener("submit", function(evt){
    evt.preventDefault();
    let nombre = document.getElementById("nombreForm").value;
    if (nombre === null || nombre.length == 0 || /^\s+$/.test(valor)) {
      console.log("El campo debe ser completado");
      return false;
    }
});

form.addEventListener("submit", function(evt){
    evt.preventDefault();
    let apellido = document.getElementById("apellidoForm").value;
    if (apellido == null || apellido.length == 0 || /^\s+$/.test(valor)) {
      console.log("El campo debe ser completado");
      return false;
    }
});

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

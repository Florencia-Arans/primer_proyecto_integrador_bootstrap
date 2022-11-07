const valorTicket = 200;
const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria = document.getElementById("categoria");

function quitarClaseError() {
    let x = document.querySelectorAll('.form-control, .form-select');
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}

function resetTotalAPagar() {
    quitarClaseError();
    totalPago.innerHTML = "";
}

function totalAPagar() {
    quitarClaseError();
    if (nombre.value === "") {
        nombre.classList.add('is-invalid');
        nombre.focus();
        alert("Por favor, escriba su nombre");
        return;
    }

    if (apellido.value === "") {
        apellido.classList.add('is-invalid');
        apellido.focus();
        alert("Por favor, escriba su apellido");
        return;
    }
    if (email.value === "") {
        email.classList.add('is-invalid');
        email.focus();
        alert("Por favor, escriba su email");
        return;
    }
    if (!emailValido(email.value)) {
        email.classList.add('is-invalid');
        email.focus();
        alert("Por favor, escriba un email válido");
        return;
    }
    if ((cantidadTickets.value == 0) || ( isNaN(cantidadTickets.value))) {
        cantidadTickets.classList.add('is-invalid');
        cantidadTickets.focus();
        alert("Por favor, ingrese correctamente la cantidad de tickets");
        return;
    }
    if (categoria.value == "") {
        categoria.classList.add('is-invalid');
        categoria.focus();
        alert("Por favor, seleccione una categoría");
        return;
    }

let totalValorTickets = (cantidadTickets.value) * valorTicket;

switch (categoria.value) {
case '1':
    totalValorTickets = totalValorTickets;
    break;
case '2':
    totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
    break;
case '3':
    totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
    break;
case '4':
    totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
    break;
default:
    totalValorTickets = error;
    break;
} 
console.log(totalValorTickets)
totalPago.innerHTML = totalValorTickets;
}

btnResumen.addEventListener("click", totalAPagar);
btnBorrar.addEventListener("click", resetTotalAPagar);




    

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
        alert("Por favor, escriba su nombre");
        nombre.classList.add('is-invalid');
        nombre.focus();
        return;
    }

    if (apellido.value === "") {
        alert("Por favor, escriba su apellido");
        apellido.classList.add('is-invalid');
        apellido.focus();
        return;
    }

    if (email.value === "") {
        alert("Por favor, escriba su email");
        email.classList.add('is-invalid');
        email.focus();
        return;
    }
    if (!emailValido(email.value)) {
        alert("Por favor, escriba un email válido");
        email.classList.add('is-invalid');
        email.focus();
        return;
    }
    if ((cantidadTickets.value == 0) || ( isNaN(cantidadTickets.value))) {
        alert("Por favor, ingrese correctamente la cantidad de tickets");
        cantidadTickets.classList.add('is-invalid');
        cantidadTickets.focus();
        return;
    }
    if (categoria.value == "") {
        alert("Por favor, seleccione una categoría");
        categoria.classList.add('is-invalid');
        categoria.focus();
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
    alert("por favor haga bien las cosas");
    break;
} 
console.log(totalValorTickets)
totalPago.innerHTML = totalValorTickets;
}

btnResumen.addEventListener("click", totalAPagar);
btnBorrar.addEventListener("click", resetTotalAPagar);




    

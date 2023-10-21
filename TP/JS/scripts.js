
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    //validación de formulario:
    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === ''|| mensaje === ''  ) {
        mostrarAlerta('Todos los campos son obligatorios', true);
        return;
    }

    //alerta de enviado con exito:

    mostrarAlerta('Mensaje enviado correctamente');


    console.log('Enviando formulario');
});


function leerTexto(e) {
    datos[e.target.id] = e.target.value;
}

//funcion para generar alertas

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(()=> {
        alerta.remove();
    }, 5000);

}
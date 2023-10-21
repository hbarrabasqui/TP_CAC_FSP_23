
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
    

    if(nombre === '' || email === '' || mensaje === ''  ) {
        mostrarAlerta('Todos los campos son obligatorios', true);
        return;
    }
    validarNombre('nombre');
    validarEmail('email');
  

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

//funcion validar email

function validarEmail(email){
                
	
	var emailField = document.getElementById('email');
	
	// Definimos nuestras expresiones regulares
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	// Chequeamos si cumple
	if( validEmail.test(emailField.value) ){
		alert('Email valido, continue con el formulario');
		return true;
	}else{
		alert('Email invalido, verifique su email');
		return false;
	}
} 

function validarNombre(nombre) {
    for (var i = 0 ; i < nombre.length; i++) {
        var charCode = nombre.charCodeAt(i);
        if(!((charCode >= 65 && charCode <= 122) || charCode === 32)) {
            alert("El campo 'nombre' solo puede contener caracteres alfábeticos y espacios.")
            return false;
        }
    }
}

/*
function validarFormulario() {
    var nombre  = document.getElementById('nombre').value.trim();
    var email   = document.getElementById('email').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();

    
    if(nombre === '' || email === ''|| mensaje === ''  ) {
        mostrarAlerta('Todos los campos son obligatorios', true);
        return;
    }

    //alerta de enviado con exito:

    mostrarAlerta('Mensaje enviado correctamente');

    
    }

}*/
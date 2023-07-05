let txtAreaTexto;
let imgRespuesta;
let txtAreaMensaje;
let contenedorInfoP;
let btnCopiar;


function encriptar(event) {
    imgRespuesta.style.display = 'none';
    contenedorInfoP.style.display = 'none';
    txtAreaMensaje.style.display = 'block';
    btnCopiar.style.display = 'block';
    
    btnCopiar.style.margin = 'auto';
    if (event && event.key === "Enter") {
        event.preventDefault();
        txtAreaTexto.value += '';
        encriptar();
    }
    var mensaje = txtAreaTexto.value;
    var arregloMensaje = mensaje.split('');
    var mensajeEncriptado = arregloMensaje.slice();
    for(let i=0; i<mensajeEncriptado.length; i++){
        if(mensajeEncriptado[i] == 'a'){
            mensajeEncriptado[i] = 'ai';
        }
        if(mensajeEncriptado[i] == 'e'){
            mensajeEncriptado[i] = 'enter';
        }
        if(mensajeEncriptado[i] == 'i'){
            mensajeEncriptado[i] = 'imes';
        }
        if(mensajeEncriptado[i] == 'o'){
            mensajeEncriptado[i] = 'ober';
        }
        if(mensajeEncriptado[i] == 'u'){
            mensajeEncriptado[i] = 'ufat';
        }
    }
    console.log("Arreglo original: ", arregloMensaje);
    console.log("Arreglo encriptado con espacios", mensajeEncriptado);
    console.log("Mensaje encriptado bien: ", mensajeEncriptado.join(''));
    txtAreaMensaje.value = mensajeEncriptado.join('');
}

function desencriptar() {
    var mensajeEncriptado = txtAreaTexto.value;
    var mensajeDesencriptado = mensajeEncriptado.replace(/ai/g, 'a')
                                                .replace(/enter/g, 'e')
                                                .replace(/imes/g, 'i')
                                                .replace(/ober/g, 'o')
                                                .replace(/ufat/g, 'u');

    console.log("Mensaje encriptado: ", mensajeEncriptado);
    console.log("Mensaje desencriptado: ", mensajeDesencriptado);
    txtAreaMensaje.style.display = 'block';
    btnCopiar.style.display = 'block';
    imgRespuesta.style.display = 'none';
    contenedorInfoP.style.display = 'none';
    txtAreaMensaje.value = mensajeDesencriptado;
}

function validarMinusculas(event) {
    const charCode = event.charCode;
    const char = String.fromCharCode(charCode);
    if (event && event.key === "Enter") {
        event.preventDefault();
        txtAreaTexto.value += '';
        encriptar();
    }
    if (!/[a-z\s]/.test(char)) {
        event.preventDefault();
    }
}

function copiar() {
    txtAreaMensaje.select();
    document.execCommand('copy');
    txtAreaMensaje.value = '';
    txtAreaTexto.value = '';
    alert('Texto copiado');
    imgRespuesta.style.display = 'block';
    contenedorInfoP.style.display = 'block';
    btnCopiar.style.display = 'none';
    txtAreaMensaje.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    txtAreaMensaje = document.getElementById('txtAreaMensaje');
    btnCopiar = document.getElementById('btnCopiar');
    contenedorInfoP = document.getElementById('contenedorInfoP');

    txtAreaMensaje.style.display = 'none';
    btnCopiar.style.display = 'none';
    
    imgRespuesta = document.getElementById('imgRespuesta');
    txtAreaTexto = document.getElementById('txtAreaTexto');

    const btnEncriptar = document.getElementById('btnEncriptar');
    const btnDesencriptar = document.getElementById('btnDesencriptar');
    txtAreaTexto.addEventListener('keypress', validarMinusculas);
    btnCopiar.addEventListener('click', copiar);
    btnEncriptar.addEventListener('click', encriptar);
    btnDesencriptar.addEventListener('click', desencriptar);
});

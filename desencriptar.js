function desencriptar() {
    var textoEncriptado = document.getElementById("texto-a-encriptar").value;
    var mensaje = document.querySelector("#contenido-mensaje");
    var ningunMensaje = document.querySelector(".contenido-ningun-mensaje");
    var mensajeDesencriptado = document.querySelector(".mensaje-encriptado");

    if (textoEncriptado.length > 0){
        var textoDesencriptado = desencriptarMensaje(textoEncriptado);
        ningunMensaje.classList.add("invisible");
        mensajeDesencriptado.value = textoDesencriptado;
        mensaje.classList.remove("invisible");
    }

    else{
        mensaje.classList.remove("invisible");
    }
}


function desencriptarMensaje(texto){
    var textoMinuscula = texto.toLowerCase();

    const vocales = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];

    for (let i=0; i < vocales.length; i++) {
        if (textoMinuscula.includes(vocales[i][1])) {
            textoMinuscula = textoMinuscula.replaceAll(vocales[i][1], vocales[i][0]);
        }
    }

    return textoMinuscula;
}


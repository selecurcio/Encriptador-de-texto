function encriptar() {
    var textoAEncriptar = document.getElementById("texto-a-encriptar").value;
    var mensaje = document.querySelector("#contenido-mensaje");
    var ningunMensaje = document.querySelector(".contenido-ningun-mensaje");
    var mensajeEncriptado = document.querySelector(".mensaje-encriptado");

    if (textoAEncriptar.length > 0){
        var textoEncriptado = encriptarMensaje(textoAEncriptar);
        ningunMensaje.classList.add("invisible");
        mensajeEncriptado.value = textoEncriptado;
        mensaje.classList.remove("invisible");
    }

    else{
        mensaje.classList.remove("invisible");
    }
}


function encriptarMensaje(texto){
    var textoMinuscula = texto.toLowerCase();
    const vocales = ["a", "e", "i", "o", "u"];
    const vocalesEncriptadas = ["ai", "enter", "imes", "ober", "ufat"]
    var textoEncriptado = "";

    for (let i=0; i < textoMinuscula.length; i++) {
        if (vocales.includes(textoMinuscula[i])) {
            let index = vocales.findIndex(vocales => vocales === textoMinuscula[i]);
            textoEncriptado += vocalesEncriptadas[index];
        }
        else{
            textoEncriptado += textoMinuscula[i];
        }
    }
    return textoEncriptado;
}

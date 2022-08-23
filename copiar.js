function copiar() {

    var mensaje = document.querySelector("#mensaje-encriptado");
    mensaje.select();
    document.execCommand('copy');

}
function cargarMensaje(callback) {
    setTimeout(function() {
        callback("Mensaje cargado");
    }, 1000);
}
cargarMensaje(function(mensaje) {
    document.getElementById("salida").textContent=mensaje; 
});
function cargarMensaje() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Mensaje cargando");
        }, 1000);
    });
}
cargarMensaje()
    .then(mensaje => {
        document.getElementById("salida").textContent=mensaje;
    })
    .catch(error => {
        console.log("Error: ", error);
    });
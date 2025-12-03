function cargarMensaje() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Mensaje cargado");
        }, 1000);
    });
}
async function mostrarMensaje() {
    const mensaje=await cargarMensaje();
    document.getElementById("salida").textContent=mensaje;
}
mostrarMensaje();
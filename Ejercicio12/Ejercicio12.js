function cargarUsuario() {
    return new Promise((resolve, reject) => {
        const tiempo=Math.floor(Math.random()*(1500-800+1))+800;
        setTimeout(() => {
            const usuario = {
                id: 1,
                nombre: "Juancito"
            };
            resolve(usuario);
        }, tiempo);
    });
}
cargarUsuario()
    .then(usuario => {
        document.getElementById("salida").textContent =
            "Usuario cargado: "+usuario.nombre+" (ID: "+usuario.id+")";
    })
    .catch(error => {
        console.log("Error: ", error);
    });
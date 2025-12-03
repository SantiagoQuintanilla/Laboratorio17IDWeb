function cargarUsuario() {
    return new Promise(resolve => {
        const tiempo=Math.floor(Math.random()*(1500-800+1))+800;
        setTimeout(() => {
            const usuario={
                id: 1,
                nombre: "Juancito"
            };
            resolve(usuario);
        }, tiempo);
    });
}
async function mostrarUsuario() {
    const usuario=await cargarUsuario();
    document.getElementById("salida").textContent=
        "Usuario cargado: "+usuario.nombre+" (ID: "+usuario.id+")";
}
mostrarUsuario();
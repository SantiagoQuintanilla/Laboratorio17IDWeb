function cargarUsuario(callback) {
    const tiempo=Math.floor(Math.random()*(1500-800+1))+800;
    setTimeout(function() {
        const usuario={
            id:1,
            nombre: "Juancito"
        };
        callback(usuario);
    }, tiempo);
}
cargarUsuario(function(usuario) {
    document.getElementById("salida").textContent=
    "Usuario cargado: "+usuario.nombre+" (ID: "+usuario.id+")";
});
function generarSyntaxError() {
    try {
        JSON.parse("{nombre: Juan}");
    } catch (e) {
        console.log("Error: ", e.name);
        console.log("Mensaje: ", e.message); 
    }
}
generarSyntaxError();
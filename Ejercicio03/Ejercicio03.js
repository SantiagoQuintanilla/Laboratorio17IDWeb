function generarError() {
    try {
        console.loge("hola");
    } catch (e) {
        console.log("falló");
    } finally {
        console.log("siempre se ejecuta");
    }
}
generarError();
function procesarLista(lista, callbackFinal) {
    let procesados=0;
    lista.forEach(function(num) {
        const tiempo=Math.floor(Math.random()*(1500-500+1))+500;
        setTimeout(function() {
            console.log("Procesando...");
            procesados++;
            if (procesados===lista.length) {
                callbackFinal("Proceso completado");
            }
        }, tiempo);
    });
}
procesarLista([1, 2, 3, 4], function(mensaje) {
    console.log(mensaje);
});
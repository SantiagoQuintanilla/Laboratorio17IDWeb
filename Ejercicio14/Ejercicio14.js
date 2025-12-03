function procesarLista(lista) {
    return new Promise((resolve, reject) => {
        let procesados=0;
        lista.forEach(num => {
            const tiempo=Math.floor(Math.random()*(1500-500+1))+500;
            setTimeout(() => {
                console.log("Procesando...");
                procesados++;
                if (procesados===lista.length) {
                    resolve("Proceso completado");
                }
            }, tiempo);
        });
    });
}
procesarLista([1, 2, 3, 4])
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(error => {
        console.log("Error: ", error);
    });
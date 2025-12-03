function procesarElemento(num) {
    return new Promise(resolve => {
        const tiempo = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
        setTimeout(() => {
            console.log("Procesando...");
            resolve();
        }, tiempo);
    });
}
async function procesarLista(lista) {
    const promesas = lista.map(num => procesarElemento(num));
    await Promise.all(promesas);
    return "Proceso completado";
}
async function ejecutar() {
    const mensaje = await procesarLista([1, 2, 3, 4]);
    console.log(mensaje);
}

ejecutar();
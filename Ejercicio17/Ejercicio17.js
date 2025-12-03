function dividirAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b===0) {
                reject(new Error("No se puede dividir entre cero"));
            } else {
                resolve(a/b);
            }
        }, 1500);
    });
}
async function ejecutarDivisiones() {
    try {
        const resultado1=await dividirAsync(10, 2);
        console.log("Resultado: ", resultado1);
    } catch (err) {
        console.log("Error: ", err.message);
    }
    try {
        const resultado2=await dividirAsync(5, 0);
        console.log("Resultado: ", resultado2);
    } catch (err) {
        console.log("Error: ", err.nessage);
    }
}
ejecutarDivisiones();
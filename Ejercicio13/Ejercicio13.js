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
dividirAsync(10, 2)
    .then(resultado => {
        console.log("Resultado: ", resultado);
    })
    .catch(err => {
        console.log("Error: ", err.message);
    });
dividirAsync(5, 0)
    .then(resultado => {
        console.log("Resultado: ", resultado);
    })
    .catch(err => {
        console.log("Error: ", err.message);
    });
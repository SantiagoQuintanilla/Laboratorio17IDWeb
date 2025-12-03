function dividirAsync(a, b, callback) {
    setTimeout(function() {
        if (b===0) {
            callback(new Error("No se puede dividir entre cero"), null);
        } else {
            callback(null, a/b);
        }
    }, 1500);
}
dividirAsync(10, 2, function(err, resultado) {
    if (err) {
        console.log("Error: ", err.message);
    } else {
        console.log("Resultado: ", resultado);
    }
});
dividirAsync(5, 0, function(err, resultado) {
    if (err) {
        console.log("Error: ", err.message);
    } else {
        console.log("Resultado: ", resultado);
    }
});
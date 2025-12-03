function probarError() {
    try {
        let x=null;
        x.nombre;
    } catch (e) {
        if (e instanceof TypeError) {
            console.log("Error: TypeError");
            console.log("Mensaje: ", e.message);
        } else if (e instanceof SyntaxError) {
            console.log("Error: SyntaxError");
            console.log("Mensaje: ", e.message);
        } else if (e instanceof ReferenceError) {
            console.log("Error: ReferenceError");
            console.log("Mensaje: ", e.message);
        } else if (e instanceof RangeError) {
            console.log("Error: RangeError");
            console.log("Mensaje: ", e.message);
        } else {
            console.log("Otro tipo de error");
            console.log("Mensaje: ", e.message);
        }
    }
}
probarError();
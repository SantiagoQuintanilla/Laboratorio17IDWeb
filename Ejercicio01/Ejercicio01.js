function probarError() {
    try {
        let x=variableInexistente;
    } catch (e) {
        console.log("ReferenceError: ", e.message); 
    }
}
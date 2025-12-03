function validarEdad(edad) {
    const limpio=String(edad).trim();
    let edadNum=parseInt(limpio);
    if(isNaN(edadNum)||edadNum<0||edadNum.toString()!==limpio) {
        throw new Error("Edad inválida");
    }
    return edadNum;
}
function procesar() {
    let valor=document.getElementById("edad").value;
    
    try {
        validarEdad(Number(valor));
        console.log("Edad válida: ", valor);
    } catch (e) {
        console.log("Error capturado: ", e.message);
    }
}
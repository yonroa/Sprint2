const calcularPocentajes = (limiteCO, limiteCO2, limiteHC, limiteO2, valorCO, valorCO2, valorHC, valorO2) => {
    let x = 0;
    let y = 0;
    let z = 0;
    let p = 0;
    if (limiteCO != 0){
        x = (valorCO*100)/limiteCO;
    }
    if (limiteCO2 != 0){
        y = (valorCO2*100)/limiteCO2;
    }
    if (limiteHC != 0){
        z = (valorHC*100)/limiteHC;
    }
    if (limiteO2 != 0){
        p = (valorO2*100)/limiteO2;
    }
    return {"porcentajeCO": x, "porcentajeCO2": y, "porcentajeHC": z, "porcentajeO2": p}
};

const registrarCO = (value) => {

}

module.exports.registrarCO = registrarCO;

const registrarCO2 = (value) => {

}

module.exports.registrarCO2 = registrarCO2;

const registrarHC = (value) => {
    
}

module.exports.registrarHC = registrarHC;

const registrarO2 = (value) => {
    
}

module.exports.registrarO2 = registrarO2;
module.exports.calcularPocentajes = calcularPocentajes;

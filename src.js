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
}

const registrarCO = (value) => {
    if (value >= 0 && value <= 10){
        return ("Parametro CO en rango estandar")
    }
    else{
        if (value < 0){
            return ("fuera_de_rango")
        }
        else{
            return ("Parametro CO fuera de rango")
        }
    }
}

module.exports.registrarCO = registrarCO;

const registrarCO2 = (value) => {
    if (value >= 0 && value <= 20){
        return ("Parametro CO2 en rango estandar")
    }
    else{
        if (value < 0){
            return ("fuera_de_rango")
        }
        else{
            return ("Parametro CO2 fuera de rango")
        }
    }
}

module.exports.registrarCO2 = registrarCO2;

const registrarHC = (value) => {
    if (value >= 0 && value <= 10000){
        return ("Parametro HC en rango estandar")
    }
    else{
        if (value < 0){
            return ("fuera_de_rango")
        }
        else{
            return ("Parametro HC fuera de rango")
        }
    }
}

module.exports.registrarHC = registrarHC;

const registrarO2 = (value) => {
    if (value >= 0 && value <= 22){
        return ("Parametro O2 en rango estandar")
    }
    else{
        if (value < 0){
            return ("fuera_de_rango")
        }
        else{
            return ("Parametro O2 fuera de rango")
        }
    }
}

module.exports.registrarO2 = registrarO2;
module.exports.calcularPocentajes = calcularPocentajes;

global.rangosCO = [
    { etiqueta: 'Parametro CO en rango estandar', de: 0, hasta: 10 },
    { etiqueta: 'Parametro CO fuera de rango', de: 11, hasta: 15 },
]

global.rangosCO2 = [
    { etiqueta: 'Parametro CO2 en rango estandar', de: 0, hasta: 20 },
    { etiqueta: 'Parametro CO2 fuera de rango', de: 21, hasta: 30 },
]

global.rangosHC = [
    { etiqueta: 'Parametro HC en rango estandar', de: 0, hasta: 10000 },
    { etiqueta: 'Parametro HC fuera de rango', de: 10001, hasta: 11000 },
]

global.rangosO2 = [
    { etiqueta: 'Parametro O2 en rango estandar', de: 0, hasta: 22 },
    { etiqueta: 'Parametro O2 fuera de rango', de: 23, hasta: 30 },
]
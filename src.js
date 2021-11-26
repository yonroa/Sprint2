const fetch = require('fetch-simulator');

const calcularPocentajes = async(
    valorCO,
    valorCO2,
    valorHC,
    valorO2
) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters");
    let limits = await response.json();
    console.log(limits)
    console.log(Object.values(limits))
    const limites = Object.values(limits)
    const [ limiteCO, limiteCO2, limiteHC, limiteO2 ] = limites;

    let porcentajeCO = limiteCO == 0 ? (valorCO * 100) / limiteCO : 0;
    let porcentajeCO2 = limiteCO2 == 0  ? (valorCO2 * 100) / limiteCO2 : 0;
    let porcentajeHC = limiteHC == 0 ? (valorHC * 100) / limiteHC : 0;
    let porcentajeO2 = limiteO2 == 0 ? (valorO2 * 100) / limiteO2 : 0;
    
    return {
        "porcentajeCO":porcentajeCO,
        "porcentajeCO2":porcentajeCO2,
        "porcentajeHC":porcentajeHC,
        "porcentajeO2":porcentajeO2,
    };
};

const registrarCO = async(valor) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/limits");
    let rangoCO = await response.json();
    let candidate = rangoCO[0];
    console.log(candidate)
    if (valor >= candidate.de && valor <= candidate.hasta) {
        console.log('Parametro CO en rango estandar')
        return ('Parametro CO en rango estandar')
    }
    else if(valor >= 11 && valor <= 15){
        console.log('Parametro CO fuera de rango estandar')
        return ('Parametro CO fuera de rango estandar') 
    }
    else{
        return("fuera_de_rango")
    } 
};

const registrarCO2 = async(valor) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/limits");
    let rangoCO2 = await response.json();
    let candidate = rangoCO2[1];
    if (valor >= candidate.de && valor <= candidate.hasta) {
        console.log('Parametro CO2 en rango estandar')
        return ('Parametro CO2 en rango estandar')
    }
    else if(valor >= 21 && valor <= 30){
        console.log('Parametro CO2 fuera de rango estandar')
        return ('Parametro CO2 fuera de rango estandar') 
    }
    else{
        return("fuera_de_rango")
    } 
};

const registrarHC = async(valor) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/limits");
    let rangoHC = await response.json();
    let candidate = rangoHC[2];
    if (valor >= candidate.de && valor <= candidate.hasta) {
        console.log('Parametro HC en rango estandar')
        return ('Parametro HC en rango estandar')
    }
    else if(valor > 10 && valor <= 15){
        console.log('Parametro HC fuera de rango estandar')
        return ('Parametro HC fuera de rango estandar') 
    }
    else{
        return("fuera_de_rango")
    } 
};

const registrarO2 = async(valor) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/limits");
    let rangoO2 = await response.json();
    let candidate = rangoO2[3];
    if (valor >= candidate.de && valor <= candidate.hasta) {
        console.log('Parametro O2 en rango estandar')
        return ('Parametro O2 en rango estandar')
    }
    else if(valor > 10 && valor <= 15){
        console.log('Parametro O2 fuera de rango estandar')
        return ('Parametro O2 fuera de rango estandar') 
    }
    else{
        return("fuera_de_rango")
    } 
};

module.exports.registrarCO = registrarCO;
module.exports.registrarCO2 = registrarCO2;
module.exports.registrarHC = registrarHC;
module.exports.registrarO2 = registrarO2;
module.exports.calcularPocentajes = calcularPocentajes;
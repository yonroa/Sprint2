// const fetch = require('fetch-simulator');
// const fetch = require('cross-fetch');
const limits = [
    { "etiqueta": "Monoxido de carbono", "de": 0, "hasta": 10 },
    { "etiqueta": "Dioxido de carbono", "de": 0, "hasta": 20 },
    { "etiqueta": "Hidrocarburos", "de": 0, "hasta": 10000 },
    { "etiqueta": "Oxigeno", "de": 0, "hasta": 22 }    
]

const ranges_parameters = {
    "Parametro CO en rango estandar": 10,
    "Parametro CO2 en rango estandar":20,
    "Parametro HC en rango estandar": 10000,
    "Parametro O2 en rango estandar": 22
}

const calcularPocentajes = async(
    valorCO,
    valorCO2,
    valorHC,
    valor02
) => {
    // make a fetch request to the api
    let response = await fetch(" https://misiontic2022upb.vercel.app/api/emission-measurement/limits");
    let limits = await response.json();
    return {
        porcentajeCO,
        porcentajeCO2,
        porcentajeHC,
        porcentaje02,
    };
};

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

const registrarCO = async(valor) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters");
    let rangoCO = await response.json();
    let candidate = rangoCO[0];
    if(valor > 15 || valor < 0){
        console.log("fuera_de_rango")
        return "fuera_de_rango"
    }
    else if(valor <= 10 && valor >= 0){
        const etiquetas = rangosCO.map(item => item.etiqueta)
        const res = etiquetas.find(el => el == 'Parametro CO en rango estandar')
        console.log(res)
        return res
    }    
    else if(valor >= 11 && valor <= 15){
        const etiquetas = rangosCO.map(item => item.etiqueta)
        const res = etiquetas.find(el => el == 'Parametro CO fuera de rango')
        console.log(res)
        return res
    }
};

// registrarCO(-1);

const registrarCO2 = async(valor) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters");
    let rangoCO2 = await response.json();
    let candidate = rangoCO2[1];
    if(valor > 30 || valor < 0){
        return "fuera_de_rango"
    }
    else if(valor <= 20 && valor >= 0){
        const etiquetas = rangosCO2.map(item => item.etiqueta)
        const res = etiquetas.find(el => el == 'Parametro CO2 en rango estandar')
        return res
    }    
    else if(valor >= 21 && valor <= 30){
        const etiquetas = rangosCO2.map(item => item.etiqueta)
        const res = etiquetas.find(el => el == 'Parametro CO2 fuera de rango')
        return res
    }
};

const registrarHC = async(valor) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters");
    let rangoHC = await response.json();
    let candidate = rangoHC[2];
    if(valor > 11000 || valor < 0){
        return "fuera_de_rango"
    }
    else if(valor <= 10000 && valor >= 0){
        const etiquetas = rangosHC.map(item => item.etiqueta)
        const res = etiquetas.find(el => el == 'Parametro HC en rango estandar')
        return res
    }
    else if(valor >=10001){
        const etiquetas = rangosHC.map(item => item.etiqueta)
        const res = etiquetas.find(el => el == 'Parametro HC fuera de rango')
        return res
    }
};

const registrarO2 = async(valor) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters");
    let rangoO2 = await response.json();
    let candidate = rangoO2[3];
    if(valor > 30 || valor < 0){
        return "fuera_de_rango"
    }
    if(valor <= 22 && valor >= 0){
        const etiquetas = rangosO2.map(item => item.etiqueta)
        const res = etiquetas.find(el => el == 'Parametro O2 en rango estandar')
        return res
    }
    if(valor >= 23){
        const etiquetas = rangosO2.map(item => item.etiqueta)
        const res = etiquetas.find(el => el == 'Parametro O2 fuera de rango')
        return res
    }
}

module.exports.registrarCO = registrarCO;
module.exports.registrarCO2 = registrarCO2;
module.exports.registrarHC = registrarHC;
module.exports.registrarO2 = registrarO2;
module.exports.calcularPocentajes = calcularPocentajes;
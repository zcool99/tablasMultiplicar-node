
const fs = require('fs');
var colors = require('colors');


let listarTalba = (base, limite = 10) =>{

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor de base ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor de limite ${limite} no es un número`);
            return;
        }


        console.log('=================='.green);
        console.log(`Tabla del ${base}`.red);
        console.log('=================='.green);
        

        for (let i = 1; i <= limite; i++) {
            let multiplicacion = base * i;

            console.log(`${base} * ${i} = ${multiplicacion}\n`);
        }


        /*

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}`);

        });

        */

    });

}



let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';


        for (let i = 1; i <= limite; i++) {
            let multiplicacion = base * i;

            data += `${base} * ${ i } = ${multiplicacion}\n`;
        }

        fs.writeFile(`tablas/tabla-${base }-al-${limite}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`tabla-${ base }-al-${limite}`);
           
        }); 

    });

}

//Exportar funciones para hacerlas globales
module.exports = {
    crearArchivo,
    listarTalba
}
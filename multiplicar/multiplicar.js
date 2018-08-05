const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => { // En ES6 se pueden poner valores por defecto a los parametros >> limite = 10

    console.log('============================='.blue);
    console.log(`=========Tabla del ${base}=========`.blue);
    console.log('============================='.blue);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) { // la funcion Number devuelve un numero asi si >> '7' sera valido como 7
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            let mult = base * i;
            data += `${base} * ${i} = ${base * i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}-hasta-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-hasta-${limite}.txt`);
        });

    });
}
module.exports = {
    crearArchivo, //recordando que esto es una propiedad de objeto en ES6 crearArchivo: crearArchivo
    listarTabla
};

// let data = '';
// for (let i = 1; i <= 10; i++) {
//     let mult = base * i;
//     data += `${base} * ${i} = ${base * i}\n`;
// }


// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt ha sido creado!!!`);
// }); // ./path es desde el archivo raiz
// // ../path es para regresar
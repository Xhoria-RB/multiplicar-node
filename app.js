const argv = require('./config/yargs').argv; // en vez de extraer todo el objeto yargs.js y asignarlo a argv, se extrae
//lo que realmente se queire extraer
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); // la extensio .js no es necesaria porque es redundante, 
//se sabe que debe ser un archivo de JavaScript

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(` ${archivo}`)))
            .catch(err => console.log(err))
        break;

    default:
        console.log('Comando no reconocido');


}




// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(base);
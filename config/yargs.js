const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;



module.exports = {
    argv
};


// .command('listar', 'Imprime la tabla de multiplicar', { //Crea el comando listar en la consola al ejecutar la app:
//     //node app listar [flags]. Command([nombreComando], 'descripcion', {constructor de objetos que son los flags})
//     base: { // estas son las flags que se ingresan en la terminal node app --base/-b(alias)
//         demand: true,
//         alias: 'b'
//     },
//     limite: {
//         alias: 'l',
//         default: 10
//     }
// })
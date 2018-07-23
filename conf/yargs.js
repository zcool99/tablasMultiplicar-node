
const opts = {
     base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 1
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime datos de la tabla', opts)
    .command('crear', 'Crea la tabla', opts)
    .help()
    .argv;                                


    module.exports = {
        //exportamos funcion
        argv
    }
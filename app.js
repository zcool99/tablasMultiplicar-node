

//Podemos definir un default 

const argv = require( './conf/yargs').argv;

const colors = require('colors/safe');


const { crearArchivo, listarTalba } = require('./multiplicar/multiplicar');



let comando = argv._[0];

switch(comando){
    case 'listar': 
        listarTalba(argv.base, argv.limite);
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
      
    break;

    default:
        console.log('Comando no reconocido');
}



//let argv2 = process.argv;
//console.log(argv.base); 

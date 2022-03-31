const { argv0 } = require("process");
const { option, boolean } = require("yargs");
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require('colors');


console.clear();

crearArchivo(argv.b, argv.l, argv.h)
  .then((archivo) => console.log(archivo.rainbow))
  .catch((err) => console.log(err));



// console.log(process.argv);
// console.log(argv);

// console.log(argv.base);

// const [,,arg3= 'base=5'] = process.argv
// const [,base = 0] =arg3.split('=');

// console.log(base);

// const base = 4;

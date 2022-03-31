const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Esta es la base a multiplicar"
  })
  .option('l',{
      alias: 'listar',
      type: 'boolean',
      default: false,
      describe: "l para listar la tabla en clg"
  })
  .option('h',{
    alias: 'hasta',
    type: 'number',
    default: 5,
    describe: "hasta donde multiplicar"
})
  .check((argv, option) => {
    if( isNaN(argv.b)) {
        throw 'La base tiene que ser un numero'
    }
    return true;
  }).argv;

  module.exports = argv;
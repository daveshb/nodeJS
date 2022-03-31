const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta=5) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i} \n`;
      consola += `${base} ${'X'.red} ${i} ${'='.red} ${base * i} \n`;
    }

    if (listar) {
      console.log("========================".green);
      console.log(`Tabla del: `.blue, colors.blue(base));
      console.log("========================".green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `Tabla-${base}.txt Creado`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};

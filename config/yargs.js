const descripcion = {
  alias: 'd',
  demand: true,
  desc: 'Descripción de la tarea'
}

const completado = {
  alias: 'c',
  desc:'Marca como completado una tarea'
}
const argv = require('yargs')
  .command('actualizar', 'Actualiza el estado completado de una tarea', {
    descripcion,
    completado
  })
  .command('crear','Crear un elemento por hacer', {
    descripcion
  })
  .command('borrar','Borra un elemento por hacer', {
    descripcion
  })
  .help()
  .argv;

module.exports = {
  argv
}
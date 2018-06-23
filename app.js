const {argv} = require('./config/yargs')
const {colors} = require('colors')
const {crear, getListado, actualizar, borrar} = require('./por-hacer/por-hacer')
let comando = argv._[0]

switch (comando) {
  case 'crear':
  let porHacer = crear(argv.descripcion)
  console.log(porHacer);
  
  break;

  case 'listar':
  let listado = getListado()
  console.log('========== Tareas por hacer =========='.green);
  for (let tarea of listado) {
    console.log(tarea.descripcion);
    console.log('Estado: ', tarea.finalizado);
    console.log('======================================'.green);
  }  
  break

  case 'actualizar':
  let actualizado = actualizar(argv.descripcion, argv.completado)
  console.log(actualizado);
  break

  case'borrar':
  let borrado = borrar(argv.descripcion)
  console.log(borrado);
  break

  default:
  console.log('Comando desconocido');
}

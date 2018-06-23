const fs = require('fs')

let listadoPorHacer = []
const guardarDB = listado => {
  let data = JSON.stringify(listado)
  fs.writeFile('./db/data.json',data,(err) => {
  })
}
const getListado = () => {
 cargarDB()
 return listadoPorHacer
}
const borrar = (descripcion) => {
  cargarDB()
  let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
  if (index >= 0) {
    listadoPorHacer.splice(index,1)
    guardarDB(listadoPorHacer)
    return true
  } else {
    return false
  }
}
const actualizar = (descripcion, finalizado = true) => {
  cargarDB()
  let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
  if (index >= 0) {
    listadoPorHacer[index].finalizado = finalizado
    guardarDB(listadoPorHacer)
    return true
  } else {
    return false
  }
}

const cargarDB = () => {
  try {
    listadoPorHacer = require('../db/data.json')
  } catch (error) {
    listadoPorHacer = []
  }
}

let crear = (descripcion) => {
  cargarDB()
  let porHacer = {
    descripcion,
    finalizado: false
  }
  listadoPorHacer.push(porHacer)
  guardarDB(listadoPorHacer)
  return listadoPorHacer
}

module.exports = {
  crear,
  cargarDB,
  getListado,
  actualizar,
  borrar
}
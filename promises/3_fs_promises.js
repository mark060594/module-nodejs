const fs = require('fs').promises;
/* require('fs/promises') */


const encoding = 'utf8';

async function crearArchivo(nombre, contenido) {
    await fs.writeFile(nombre, contenido, encoding);
    console.log('archivo creado')
}

async function leerArchivo(nombre) {
    const data = await fs.readFile(nombre, encoding);
    console.log(data);
}

async function editarArchivo(nombre, contenido) {
    const data = await fs.appendFile(nombre, contenido);
    console.log('Se edito el archivo correctamente');
}

async function borrarArchivo(nombre) {
    await fs.unlink(nombre)
    console.log("Se elimino correctamente");
}

async function crearFolder(nombre) {
    await fs.mkdir(nombre)
    console.log("Se creo el folder correctamente");
}

async function eliminarFolder(nombre) {
    await fs.rmdir(nombre)
    console.log("Se elimino el folder correctamente");
}

async function leerFolder(nombre) {
    const data = await fs.readdir(nombre)
    console.log(data);
}


const execute = async() => {

    await crearArchivo('prueba.txt', 'esto es una prueba');
    await leerArchivo('prueba.txt');
    await editarArchivo('prueba.txt', ' Esta es la prueba de que se edito ');
    await leerArchivo('prueba.txt');
    await crearArchivo('prueba2.txt', 'esto es la prueba 2');
    await borrarArchivo('prueba2.txt');
    /* await crearFolder('Nuevo folder'); */
    /*  await crearFolder('Nuevo folder2');
     await eliminarFolder('Nuevo folder_2'); */
    await leerFolder('Nuevo folder');
    console.log('Se ejecutaron las funciones');

}

execute();
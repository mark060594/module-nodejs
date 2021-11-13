const encoding = 'utf8';
const fs = require('fs');

function crearArchivo(nombre, contenido) {
    fs.writeFile(nombre, contenido, 'utf8', (error) => {
        if (error) { // {error: 'Todo salio mal'} | false | undefined
            console.error(error)
        } else {
            console.log('Se creo el archivo correctamente');
        }
    });
}


function editarArchivo(nombre, contenido) {
    fs.appendFile(nombre, contenido, (error) => {
        if (error) { // {error: 'Todo salio mal'} | false | undefined
            console.error(error)
        } else {
            console.log('Se edito el archivo correctamente');
        }

    });

}


function leerArchivo(nombre) {
    fs.readFile(nombre, encoding, (error, data) => {

        if (error) { // {error: 'Todo salio mal'} | false | undefined
            console.error(error)
        } else {
            console.log(data);
        }

    });

}

function borrarArchivo(nombre) {
    fs.unlink(nombre, (error => {
        if (error) console.log(error);
        else {
            console.log("Se elimino correctamente");
        }
    }));


}




crearArchivo('ejercicio.txt', 'Este sera su ejercicio de manana');

leerArchivo('ejercicio.txt');

editarArchivo('ejercicio.txt', 'Esto es nuevo');

crearArchivo('ejercicio2.txt', 'Este sera su ejercicio 2 para probar  borrar');

borrarArchivo('ejercicio2.txt');
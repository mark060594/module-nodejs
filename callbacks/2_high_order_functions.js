/* const resultado1 = forEach([2, 3, 4], val => val * 2);
console.log(resultado1);

const resultado2 = forEach([2, 3, 4], (val) => {
    return 'mucho texto ' + val;
});
console.log(resultado2);

function forEach(arreglo, callback) {
    const resultado = [];

    for (let index = 0; index < arreglo.length; index++) {
        resultado.push(callback(arreglo[index]));
    }

    return console.log(resultado);
} */





const arreglo = [2, 3, 4, 5, 5, 5];
const arrayFilter = filter(arreglo, val => val == 5)
console.log(arrayFilter);


function filter(arreglo, callback) {
    const resultado = [];

    for (let index = 0; index < arreglo.length; index++) {
        if (callback(arreglo[index]) == true) {
            resultado.push(arreglo[index]);
        }

    }

    return resultado;
}
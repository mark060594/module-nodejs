let entrada = [1, 100, 50, 6, 5];



const max = (entrada) => {

    let aux = 0;

    for (let i = 0; i < entrada.length; i++) {

        if (entrada[i] > aux) {
            aux = entrada[i];

        }

    }
    return aux;
}

let resultado = max(entrada);
console.log(resultado);
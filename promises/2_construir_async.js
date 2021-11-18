function construir(muro) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            muro.construido = true;

            const error = muro.construido ?
                null :
                new Error('No se pudo construir');

            if (error)
                reject(error); // Se termina la ejecucion con reject

            resolve(muro);
        }, 1000);
    })
}

function aplanar(muro) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            muro.aplanado = true;

            const error = muro.construido && muro.aplanado ?
                null :
                new Error('No se pudo aplanar');

            if (error)
                reject(error); // Se termina la ejecucion con reject

            resolve(muro);
        }, 1000);
    })
}

function pintar(muro) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            muro.pintado = true;

            const error = muro.aplanado && muro.pintado ?
                null :
                new Error('No se pudo pintar');

            if (error)
                reject(error); // Se termina la ejecucion con reject

            resolve(muro);
        }, 1000);
    })
}




async function ejecutarContruccion() {


    const muro = {};

}
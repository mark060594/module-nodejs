function factory(result) {

    console.log('trabajando...');

    return function() {
        console('resultado: ', result);
    }
}

const r = factory('saludos');

r();
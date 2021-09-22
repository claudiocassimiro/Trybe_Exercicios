const uppercase = require('./uppercase');

test('Verifica se ao passar uma string minuscula, o retorno é a sting maiuscula', (done) => {
    uppercase('alonso', (result) => {
        expect(result).toBe('ALONSO');
        done();
    });
});
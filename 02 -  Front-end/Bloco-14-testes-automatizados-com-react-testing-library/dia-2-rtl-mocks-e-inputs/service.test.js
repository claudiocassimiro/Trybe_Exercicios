const service = require('./service');

describe('testa a função randomNumber', () => {
    test('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
        service.randomNumber = jest.fn().mockReturnValue(10);

        expect(service.randomNumber()).toBe(10);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
    });

    test('crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo.', () => {
        service.randomNumber = jest.fn().mockImplementation((a, b) => a / b);

        expect(service.randomNumber(8, 2)).toBe(4);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
    });

    test('Use a mesma função do primeiro exercício, utilize o mock e desenvolva uma nova implementação que receba três parâmetros', () => {
        service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

        expect(service.randomNumber(8, 2, 3)).toBe(48);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);

        service.randomNumber.mockReset();
        service.randomNumber = jest.fn().mockImplementation((a) => a * 2);

        expect(service.randomNumber(8)).toBe(16);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
    });
});

describe('Crie três funções, e mude as implementações delas com mock', () => {
    service.upperCase = jest.fn().mockImplementation((str) => str.toLowerCase());
    service.firstLetter = jest.fn().mockImplementation((str) => str[str.length - 1]);
    service.concatStrings = jest.fn().mockImplementation((str1, str2, str3) => str1 + str2 + str3);

    test('a função upperCase deve retornar a string em caixa baixa.', () => {
        expect(service.upperCase('TESTE')).toBe('teste');
    });

    test('a função firstLetter deve retornar a última letra de uma string.', () => {
        expect(service.firstLetter('TESTE')).toBe('E');
    });

    test('a função concatStrings deve receber três strings e concatená-las.', () => {
        expect(service.concatStrings('TESTE', 'TESTE', 'TESTE')).toBe('TESTETESTETESTE');
    });
});
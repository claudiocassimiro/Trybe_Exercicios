const { findAnimalByName, findAnimalByType, findAnimalByAge } = require('./findAnimal');

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => (
      findAnimalByName('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      })
    ));
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return findAnimalByName('Bob').catch((error) => {
        expect(error.message).toEqual('Nenhum animal com esse nome!');
      });
    });
  });
});

  describe('Testando Função findAnimalByType', () => {

    it('quando passado o type do animal, retorna um array com os animais daquele type', () => {
      findAnimalByType('Dog').then((arrayAnimal) => {
        expect(arrayAnimal).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' }]);
      });
    });

    it('quando passado um type que não existe, retorna um erro', () => {
      findAnimalByType('Dinosaur').catch((error) => {
        expect(error).toBe(new Error('Não possui esse tipo de animal.'));
      })
    });

    describe('Testa a função findAnimalByAge', () => {

      it('Se a idade passada para a função findAnimalByAge for a idade de algum elemento, esse elemento será retornado em um array', () => {
        findAnimalByAge(1).then((arrayAnimalAge) => {
          expect(arrayAnimalAge).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
        });
      })

      it('Se a idade passada não for a idade de um elemento do array, retorna erro', () => {
        findAnimalByAge(10).catch((error) => {
          expect(error).toBe(new Error('Nenhum animal encontrado!'));
        });
      });
    });
});


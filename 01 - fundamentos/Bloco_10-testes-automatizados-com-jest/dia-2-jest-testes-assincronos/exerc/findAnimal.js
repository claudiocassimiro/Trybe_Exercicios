const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

// [...]

const findAnimalByName = (name) => (
  // Adicione seu código aqui
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const objectAnimal = Animals.find((animal) => animal.name === name);

      if (objectAnimal) {
        return resolve(objectAnimal);
      }

      return reject(new Error('Nenhum animal com esse nome!'));
    }, 100);
  })
);

const findAnimalByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimal = Animals.filter((animal) => animal.type === type);

      if (arrayAnimal !== 0) {
        return resolve(arrayAnimal);
      }

      return reject(new Error('Não possui esse tipo de animal.'));
    }, 100)
  })
);

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimalAge = Animals.filter((animal) => animal.age === age);

      if (arrayAnimalAge !== 0) {
        return resolve(arrayAnimalAge);
      }
      return reject(new Error('Nenhum animal encontrado!'));
    }, 100)
  })
);

module.exports = {findAnimalByName, findAnimalByType, findAnimalByAge };
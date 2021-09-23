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

// const findAnimalByName = (name) => (
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const result = Animals.find((animal) => animal.name === name);

//       if (result) {
//         return resolve(result);
//       }

//       return reject(new Error('Nenhum animal com esse nome!'));
//     }, 100);
//   })
// );

module.exports = findAnimalByName;
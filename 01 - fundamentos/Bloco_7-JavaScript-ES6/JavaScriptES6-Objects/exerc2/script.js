const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2.
const generateKeys = (obj, key, value) => {obj[key] = value};

generateKeys(lesson2, 'turno', 'manhã');

// Crie uma função para listar as keys de um objeto.
const listKeys = (obj) => {
    const keys = Object.keys(obj);

    for (const key of keys) {
        console.log(key);
    }
}

// listKeys(lesson2);

// Crie uma função para mostrar o tamanho de um objeto.

const objectSize = (obj) => {
    let size  = Object.keys(obj).length
    console.log(`O objeto tem o tamanho de: ${size} elementos.`);
};

objectSize(lesson2);
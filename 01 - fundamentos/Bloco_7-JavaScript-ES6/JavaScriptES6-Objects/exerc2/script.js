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

// objectSize(lesson2);

// Crie uma função para listar os valores de um objeto.
const listValues = (obj) => {
    const values = Object.values(obj);

    for (let value of values) {
        console.log(value);
    }
}

// listValues(lesson2);

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign.
const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});

// console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalStudants = (obj) => {
    let total = 0;
    for (let key in obj) {
        total += obj[key].numeroEstudantes;
    }
    return `O numero total de alunos em todas as aulas é de ${total} estudantes.`
}

// console.log(totalStudants(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const getValueWithIndex = (obj, index) => {
    const value = Object.values(obj);
    if (index > value.length) {
        return `O valor digitado para o index ultrapassa o número de valores no objeto, tente novalmente com um valor até ${value.length - 1}.`;
    }
    else {
        return `No index digitado encontrei o valor: ${value[index]}`;
    }
}

// console.log(getValueWithIndex(lesson1, 1))

// Crie uma função que verifique se o par (chave / valor) existe na função.
const checkIfHaveKeyAndValue = (obj, key, value) => {
    if (obj[key] === value) {
        return true;
    }
    else {
        return false;
    }
}

// console.log(checkIfHaveKeyAndValue(lesson2, 'materia', 'História'));

// bonus

// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const countStudents = (obj) => {
    let total = 0;
    const keys = Object.keys(obj);
    for (let key of keys) {
        if (obj[key].materia === 'Matemática') {
            total += obj[key].numeroEstudantes;
        }
    }
    return total;
}

// console.log(countStudents(allLessons));

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
const createReport = (obj, stringName) => {
    const keys = Object.keys(obj);
    let professor = '';
    let totalAluno = 0;
    const aulas = [];
    for (let key of keys) {
        if (obj[key].professor === stringName) {
            professor = obj[key].professor
            aulas.push(obj[key].materia);
            totalAluno += obj[key].numeroEstudantes;
        }
    }
    const report = {
        professor: professor,
        aulas: aulas,
        estudates: totalAluno
    }

    return report;
}

console.log(createReport(allLessons, 'Maria Clara'));
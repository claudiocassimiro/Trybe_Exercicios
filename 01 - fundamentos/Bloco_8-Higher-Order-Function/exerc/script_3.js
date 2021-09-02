const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const countRightAnswers = (rightAnswers, studentAnswers, callback ) => {
    const corrects = callback(rightAnswers, studentAnswers);
    return `Você acertou ${corrects} questões!`;
}

const checkAnswers = (rightAnswers, studentAnswers) => {
    let nota = 0;
    let nada = 0;
    let countRights = 0;
    for (let index = 0; index < 10; index += 1) {
        if (studentAnswers[index] === 'N.A') {
            nada += 1;
        }

        if (rightAnswers[index] === studentAnswers[index]) {
            nota += 1;
            countRights += 1;
        }
        else {
            nota -= 0.5;
        }
    }
    console.log(`Sua nota foi: ${nota}.`);
    console.log(`Você deixou ${nada} questões sem resposta!`)
    return countRights;
}

console.log(countRightAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));
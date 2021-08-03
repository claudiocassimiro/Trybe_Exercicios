// Exercicio 10

function mostRepeatedNumber(numbers) {
    let countRepited = 0;
    let countNum = 0;
    let indexNumRepited = 0;

    for (let index in numbers) {
        let verificaNum = numbers[index];
        for (let index2 in numbers) {
            if (verificaNum === numbers[index2]) {
                countNum += 1; 
            }
        }
        if (countNum > countRepited) {
            countRepited = countNum;
            indexNumRepited = index;
        }
        countNum = 0;
    }
    return numbers[indexNumRepited];
} 

let arrayNum = [2, 3, 2, 5, 8, 2, 3,];
console.log(mostRepeatedNumber(arrayNum));


 
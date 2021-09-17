const sumNumbers = (numbers) => numbers.reduce((acc, num) => acc + num, 0);

const numbersForDivision = [2, 3, 5, 10];

const createArrayWithDivision = (num) => {
    const newArr = numbersForDivision.map((number) => parseInt(num / number));
    return newArr;
};

const promise = new Promise((resolve, reject) => {
    const randomNumbers = [];
    for (let i = 0; i < 10; i += 1) {
        const randomNum = parseInt(Math.random(1) * 51);
        randomNumbers.push(randomNum);
    }
    let sum = sumNumbers(randomNumbers);

    if (sum < 8000) {
        resolve(createArrayWithDivision(sum));
    } else {
        reject('console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"');
    }
})
.then((result) => {
    console.log(result);
    const newArr = result.map((number) => number);
    return newArr;
})
.then((resulted) => {
    const newArrSumed = resulted.reduce((acc, num) => acc + num, 0);
    console.log(parseInt(newArrSumed));
})
.catch((error) => console.log(error));

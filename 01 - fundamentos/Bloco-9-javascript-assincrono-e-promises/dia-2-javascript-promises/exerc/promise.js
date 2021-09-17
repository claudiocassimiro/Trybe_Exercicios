const sumNumbers = (numbers) => numbers.reduce((acc, num) => acc + num, 0);

const numbersForDivision = [2, 3, 5, 10];

const createArrayWithDivision = (num) => {
    const newArr = numbersForDivision.map((number) => num / number);
    return newArr;
};

const promise = new Promise((resolve, reject) => {
    const randomNumbers = [];
    for (let i = 0; i < 10; i += 1) {
        const randomNum = parseInt(Math.random(1) * 50);
        randomNumbers.push(randomNum);
    }
    let sum = sumNumbers(randomNumbers);

    if (sum < 8000) {
        resolve(createArrayWithDivision(sum));
    } else {
        reject('Error')
    }
})
.then((result) => console.log(result))
.catch((error) => console.log(error));

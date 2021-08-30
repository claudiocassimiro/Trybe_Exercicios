// const fatorial = number => {
//     for (let i = number - 1; i > 0; i -= 1) {
//         number = number * i
//     }
//     return number;
// }

// console.log(fatorial(4));

// fazendo isso com apenas uma linha

const fatorial = (num) => num <= 1 ? num : num * fatorial(num - 1);

console.log(fatorial(5));
// Exercicio bonus 6;

let num = 6;
let result = 0;

for (let i = 2; i < num; i += 1) {
    if (num % i == 0) {
        result += 1;
    }    
}

if (result > 0) {
    console.log('o numero não é Primo');
}
else {
    console.log('O numero é primo');
}




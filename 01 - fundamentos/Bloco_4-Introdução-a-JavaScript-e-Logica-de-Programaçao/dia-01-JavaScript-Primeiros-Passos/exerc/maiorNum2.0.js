// Exercicio 3
let num1 = 10;
let num2 = 5;
let num3 = 23;

let maior = num1;

if (num2 > maior) {
    maior = num2;
    console.log(`O maior valor é ${maior}`);
}
else if (num3 > maior) {
    maior = num3;
    console.log(`O maior valor é ${maior}`);
}
else {
    console.log(`O maior valor é ${maior}`);
}
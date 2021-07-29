// Exercicio 5

let anguloA = -1;
let anguloB = 100;
let anguloC = 20;

let sumAngulos = anguloA + anguloB + anguloC;

if (anguloA < 0 || anguloB < 0 || anguloC < 0) {
    console.log('Digite valores de angulos validos!');
}
else if (sumAngulos === 180) {
    console.log('Temos um triangulo!');
}
else {
    console.log('Não temos um triangulo!');
}
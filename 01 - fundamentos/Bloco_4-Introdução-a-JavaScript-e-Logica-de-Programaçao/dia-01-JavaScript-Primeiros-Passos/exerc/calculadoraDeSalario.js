// // Exercicio 11

// let salarioBruto = 3000;
// let salarioLiquido;
// let salarioFormatado;

// // Alíquota IR / INSS

// const aliquota1IR = 142.80;
// const aliquota2IR = 354.80;
// const aliquota3IR = 636.13;
// const aliquota4IR = 869.36;

// const aliquota1INSS = salarioBruto - ((salarioBruto * 8) / 100);
// const aliquota2INSS = salarioBruto - ((salarioBruto * 9) / 100);
// const aliquota3INSS = salarioBruto - ((salarioBruto * 11) / 100);
// const aliquota4INSS = salarioBruto - 570.88;

// // Aplica o desconto do INSS

// if (salarioBruto <= 1556.94) {
//     salarioBruto -= salarioBruto - aliquota1INSS;
//     salarioFormatado = salarioBruto.toLocaleString();
//     salarioLiquido = Number.parseFloat(salarioFormatado);
// }
// else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
//     salarioBruto -= salarioBruto - aliquota2INSS;
//     salarioFormatado = salarioBruto.toLocaleString();
//     salarioLiquido = Number.parseFloat(salarioFormatado);

//     // Aplica o desconto do IR

//     if (salarioLiquido <= 1903.98) {
//         console.log(salarioLiquido.toFixed(4));
//     }
//     else if (salarioLiquido > 1903.98 && salarioLiquido <= 2826.65) {
//         salarioLiquido - aliquota1IR;
//         console.log(salarioLiquido.toFixed(4));
//     }
//     else if (salarioLiquido > 2826.65 && salarioLiquido <= 3751.05) {
//         salarioLiquido - aliquota2IR;
//         console.log(salarioLiquido.toFixed(4));
//     }
//     else if (salarioLiquido > 3751.05 && salarioLiquido <= 4664.68) {
//         salarioLiquido - aliquota3IR;
//         console.log(salarioLiquido.toFixed(4));
//     }
//     else if (salarioLiquido > 4664.68) {
//         salarioLiquido - aliquota4IR;
//         console.log(salarioLiquido.toFixed(4));
//     }
// }
// else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
//     salarioBruto -= salarioBruto - aliquota3INSS;
//     salarioFormatado = salarioBruto.toLocaleString();
//     salarioLiquido = Number.parseFloat(salarioFormatado);

//     // Aplica o desconto do IR

//     if (salarioLiquido <= 1903.98) {
//         console.log(salarioLiquido.toFixed(4));
//     }
//     else if (salarioLiquido > 1903.98 && salarioLiquido <= 2826.65) {
//         salarioLiquido - aliquota1IR;
//         console.log(salarioLiquido.toFixed(4));
//     }
//     else if (salarioLiquido > 2826.65 && salarioLiquido <= 3751.05) {
//         salarioLiquido - aliquota2IR;
//         console.log(salarioLiquido.toFixed(4));
//     }
//     else if (salarioLiquido > 3751.05 && salarioLiquido <= 4664.68) {
//         salarioLiquido - aliquota3IR;
//         console.log(salarioLiquido.toFixed(4));
//     }
//     else if (salarioLiquido > 4664.68) {
//         salarioLiquido - aliquota4IR;
//         console.log(salarioLiquido.toFixed(4));
//     }
// }
// else if (salarioBruto > 5189.82) {
//     salarioBruto -= salarioBruto - aliquota4INSS;
//     salarioFormatado = salarioBruto.toLocaleString();
//     salarioLiquido = Number.parseFloat(salarioFormatado);

//     // Aplica o desconto do IR

//     if (salarioLiquido <= 1903.98) {
//         console.log(salarioLiquido.toFixed(4));
//     }
//     else if (salarioLiquido > 1903.98 && salarioLiquido <= 2826.65) {
//         salarioLiquido - aliquota1IR;
//         console.log(salarioLiquido.toFixed(4));
//     }
//     else if (salarioLiquido > 2826.65 && salarioLiquido <= 3751.05) {
//         salarioLiquido - aliquota2IR;
//         console.log(salarioLiquido.toFixed(4));
//     }
//     else if (salarioLiquido > 3751.05 && salarioLiquido <= 4664.68) {
//         salarioLiquido - aliquota3IR;
//         console.log(salarioLiquido.toFixed(4));
//     }
//     else if (salarioLiquido > 4664.68) {
//         salarioLiquido - aliquota4IR;
//         console.log(salarioLiquido.toFixed(4));
//     }
// }
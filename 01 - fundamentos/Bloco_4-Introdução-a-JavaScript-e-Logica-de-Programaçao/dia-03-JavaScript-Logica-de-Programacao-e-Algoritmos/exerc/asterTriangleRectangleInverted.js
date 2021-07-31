// Exercicio 3

// variaveis

// Preciso de uma variavel para ser o valor inicial n
// Preciso de uma variavel para ser o simbolo
// preciso de uma variavel para ser o space
// preciso de uma variavel para marcar a posição que vai receber n

// estruturas

// percorrer as linhas de 0 até n - 1
    // percorrer as colunas de 0 até n  
        // caso colunas < position
            // concatena mais um espaço a space
        // senão
            // concatena um symbol a variavel space
    // ^
// função de output
// zerá a variavel space
// subtrai um valor de position

let n = 20;
let symbol = '*';
let space = ' ';
let position = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    for (let colunmIndex = 0; colunmIndex <= n; colunmIndex += 1) {
        if (colunmIndex < position) {
            space += ' ';
        }
        else {
            space += symbol;
        }
    }
    console.log(space)
    space = ' ';
    position -= 1;
}

// let n = 5;
// let symbol = '*';
// let inputLine = '';
// let inputPosition = n;

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex < inputPosition) {
//       inputLine = inputLine + ' ';
//     } else {
//       inputLine = inputLine + symbol;
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   inputPosition -= 1;
// };

// Resolução antiga

// let n = 5;

// for (let i = 1; i <= n; i += 1) {
//     switch (i) {
//         case 1:
//             console.log('    *');
//             break;
//         case 2:
//             console.log('   **');
//             break;
//         case 3:
//             console.log('  ***');
//             break;
//         case 4:
//             console.log(' ****');
//             break;
//         case 5:
//             console.log('*****');
//             break;
//     }
// }

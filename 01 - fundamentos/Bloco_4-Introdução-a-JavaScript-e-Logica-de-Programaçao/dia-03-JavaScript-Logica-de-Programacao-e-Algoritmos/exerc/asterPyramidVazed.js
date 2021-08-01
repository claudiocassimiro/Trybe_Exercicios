// Exercicio bonus 5

let n = 7;
let symbol = '*';
let space = '';
let midOfPyramid = (n + 1) / 2;

let controlLeft = midOfPyramid;
let controlRight = midOfPyramid;

for (let lineIndex = 1; lineIndex <= midOfPyramid; lineIndex +=1) {
    let space = '';
    for (let colunmIndex = 1; colunmIndex <= n; colunmIndex += 1) {
        if (colunmIndex == controlLeft || colunmIndex == controlRight || lineIndex == midOfPyramid) {
            space += symbol;
        }
        else {
            space += ' ';
        }
    }
    controlLeft -= 1;
    controlRight += 1;
    console.log(space);
}
// Resolução antiga

// let n = 7;

// for (let i = 1; i <= n; i += 1) {
//     switch (i) {
//         case 1:
//             console.log('   *   ');
//             break;
//         case 2:
//             console.log('');
//             break;
//         case 3:
//             console.log('  * *  ');
//             break;
//         case 4:
//             console.log('');
//             break;
//         case 5:
//             console.log(' *   * ');
//             break;
//         case 6:
//             console.log('');
//             break;
//         case 7:
//             console.log('*******');
//             break;
//     }
// }
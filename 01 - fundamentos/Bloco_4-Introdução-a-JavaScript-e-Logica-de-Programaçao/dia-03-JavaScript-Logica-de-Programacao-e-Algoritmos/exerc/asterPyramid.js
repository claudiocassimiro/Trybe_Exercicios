// Exercicicio 4

let n = 9;
let symbol = '*';
let space = '';
let midOfPyramid = (n + 1) / 2;

let controlLeft = midOfPyramid;
let controlRight = midOfPyramid;


for (let lineIndex = 0; lineIndex <= midOfPyramid; lineIndex += 1) {
    for (let colunmIndex = 0; colunmIndex <= n; colunmIndex += 1) {
        if (colunmIndex > controlLeft && colunmIndex < controlRight) {
            space = space + symbol;
        } 
        else {
            space = space + ' ';
        }
    }
    console.log(space)
    space = '';
    controlRight += 1;
    controlLeft -= 1;  
}

// Resolução antiga

// let n = 5;

// for (let i = 1; i <= n; i += 1) {
//     switch (i) {
//         case 1:
//             console.log('  *  ');
//             break;
//         case 2:
//             console.log('');
//             break;
//         case 3:
//             console.log(' *** ');
//             break;
//         case 4:
//             console.log('');
//             break;
//         case 5:
//             console.log('*****');
//             break;
//     }
// }
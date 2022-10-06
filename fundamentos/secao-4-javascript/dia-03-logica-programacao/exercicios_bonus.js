// ******
// ******
// ******
// ******
// ******
// ******

// let n = 5;
// let symbol = '*';
// let inputLine = ''

// for(i = 0; i <= n; i += 1){
//     inputLine += symbol
// }
// for(l = 0; l <= n; l += 1){
//     console.log(inputLine)
// }


// n = 5

// *
// **
// ***
// ****

// let n = 5;
// let symbol = '*';
// let inputLine = '';
// for(let i = 0; i <= n; i += 1){
//     inputLine += symbol
//     for(let j = 0; j <= 0; j += 1){
//         console.log(inputLine)
//     }
// }

// n = 5

//     *
//    **
//   ***
//  ****
// *****

// let n = 5;
// let symbol = '*';
// let inputLine = '';
// let inputPosition = n -1;

// for(let i = 0; i < n; i += 1){
//     for(let j = 0; j < 5; j += 1){
//         if(j < inputPosition){
//             inputLine += ' '
//         } else {
//             inputLine += symbol
//         }
//     }
//     console.log(inputLine)
//     inputLine = '';
//     inputPosition -= 1;
// }


//    *  
//   ***
//  *****

// let n = 5;
// let symbol = '*';
// let inputLine = '';
// let inputPosition = n - 1;
// for(let lineIndex = 0; lineIndex < n; lineIndex += 1){
//     for(let columnIndex = 0; columnIndex < n; columnIndex+= 1){
//         if(columnIndex < inputPosition){
//             inputLine += ' '
//         } else {
//             inputLine += symbol + symbol
//         }
//     }
//     console.log(inputLine);
//     inputLine = '';
//     inputPosition -= 1;
// };

// let n = 5;
// let symbol = '*';
// let inputLine = '';
// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight = midOfMatrix;
// for(let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1){
//     for(let columnIndex = 0; columnIndex <= n; columnIndex += 1){
//         if(columnIndex > controlLeft && columnIndex < controlRight){
//             inputLine += symbol;
//         } else {
//             inputLine += ' ';
//         }
//     }
//     console.log(inputLine);
//     inputLine = '';
//     controlRight += 1;
//     controlLeft -= 1;
// }

        

//    *
//   * *  
//  *   *
// *******
// //Triangulo buraco no meio
// let n = 7;
// let middle = (n + 1) / 2;
// let left = middle;
// let right = middle;
// let symbol = '*';
// for(let lineIndex = 1; lineIndex <= middle; lineIndex += 1){
//     let outputLine = '';
//     for(let columnIndex = 1; columnIndex <= n; columnIndex += 1){
//         if(columnIndex == left || columnIndex == right || lineIndex == middle){
//             outputLine += symbol;
//         } else {
//             outputLine += ' ';
//         }
//     }
//     left -= 1;
//     right += 1;
//     console.log(outputLine);
// }
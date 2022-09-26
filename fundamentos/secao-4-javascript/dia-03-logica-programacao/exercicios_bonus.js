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

// let n = 5;
// let string = '';


// for(let i = 0; i < n; i += 1){
//     if(i % 2 != 0){
//         console.log(string(' ', (n*2 - i) /2 ) + string('*', i)); 
//     }
// }


//sum of 1 to 100
// let sum = 0;
// for(let i = 1; i <= 100; i += 1){
//     sum += i;
// }
// console.log(sum);



// function sum (a, b){
//     return a + b;
// };

// function sub (a, b){
//     return a - b;
// };

// function mult (a, b){
//     return a * b;
// };

// function div (a, b){
//     return a / b;
// };

// function rest (a, b){
//     return a % b;
// };

// console.log(sum(1,1));
// console.log(sub(4, 2));
// console.log(mult(2, 2));
// console.log(div(4, 2));
// console.log(rest(8, 3));

function returnHigherNumber (a, b){
    if (a > b) {
        console.log(a + ' É maior do que ' + b)
    } else if (b > a){
        console.log(b + ' É maior do que ' + a);
    } else{
        console.log('Os dois números são iguais!');
    }
};

// returnHigherNumber(10, 20);
// returnHigherNumber(4, 1);
// returnHigherNumber(10, 10);

// function returnHigherNumberOf3 (a, b, c){
//     if (a > b && a > c) {
//        return a + ' É maior do que ' + b + ' E ' + c;
//     } else if (a < c && b < c){
//         return c + ' É maior do que ' + a + ' E ' + b;
//     } else if (b > a && b > c){
//        return b + ' É maior do que ' + a + ' E ' + c;
//     } else {
//        return 'Os três números são iguais!';
//     }   
// };

// console.log(returnHigherNumberOf3 (1, 2, 3));
// console.log(returnHigherNumberOf3 (10, 4, 1));
// console.log(returnHigherNumberOf3 (10, 11, 10));
// console.log(returnHigherNumberOf3 (10, 10, 10));

// function returnPositiveNumber (a){
//     if (a > 0){
//         return 'Positive';
//     } else if (a < 0){
//         return 'Negative';
//     } else {
//         return 'Zero';
//     }
// }

// console.log(returnPositiveNumber(1));
// console.log(returnPositiveNumber(-1));
// console.log(returnPositiveNumber(0));

// function returnTriangle (a, b, c){
//     if ( a + b + c === 180){
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(returnTriangle(60, 60, 60));
// console.log(returnTriangle(30, 90, 60));
// console.log(returnTriangle(10, 10, 190));

//Sum all the numbers in the array using for
// let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// for(let i = 0; i < number.length; i += 1){
//     soma += number[i];
// }
// console.log(soma);

// //sum of all numbers in array using reduce
// let numbers = [53, 19, 70, 8, 100, 2, 35, 27];
// let soma1 = numbers.reduce((acc, curr) => acc + curr);
// console.log(soma1);


//Knowing the higher number in array
// let numbers = [53, 19, 70, 8, 100, 2, 35, 27];
// let higherNumber = 0;
// for(let i = 0; i < numbers.length; i += 1){
//     if(numbers[i] > higherNumber){
//         higherNumber = numbers[i];
//     }
// }
// console.log(higherNumber);

//Another example of using reduce to sum all numbers in array
// const arr = [2, 3, 2, 5, 8, 2, 3];

// const total = arr.reduce((acc, item) => {
//     return acc + item;
// }, 0);
// console.log(total); 

// //Example of use forEach to sum all numbers in array
// let totalEach = 0;

// arr.forEach((item)=>{
//     totalEach += item;
// })
// console.log(totalEach);
/*  -----------------------------------------------   */

// Mega-Sena exercise
// const studentNumbers = [1, 12, 44, 56, 65, 77];

// //function to generate 6 random numbers between 1 and 100
// function generateRandomNumbers(){
//     let randomNumbers = [];
//     for(let i = 0; i < 6; i += 1){
//         randomNumbers.push(Math.ceil(Math.random() * 100));
//     }
//     return randomNumbers;
// }

// //function to compare the numbers of the student and the numbers generated by the computer
// function compareNumbers(studentNumbers, randomNumbers){
//     let count = 0;
//     for(let i = 0; i < studentNumbers.length; i += 1){
//         for(let j = 0; j < randomNumbers.length; j += 1){
//             if(studentNumbers[i] === randomNumbers[j]){
//                 count += 1;
//             }
//         }
//     }
//     return count;
// };

// //log studentNumbers
// console.log(studentNumbers);

// //log randomNumbers
// console.log(generateRandomNumbers());

// //log the result of the function compareNumbers 
// console.log(compareNumbers(studentNumbers, generateRandomNumbers()));

// //function to generate no duplicate 6 random numbers between 1 and 100
// function generateRandomNumbersNoDuplicate(){
//     let randomNumbers = [];
//     for(let i = 0; i < 6; i += 1){
//         let random = Math.ceil(Math.random() * 100 + 1);
//         while(randomNumbers.includes(random)){
//             random = Math.ceil(Math.random() * 100 + 1);
//         }
//         randomNumbers.push(random);
//     }
//     return randomNumbers;
// }


/* ------------------------------------------------------------------  */

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for(number of numbers){
//     console.log(number)
// }

// let soma = 0;
// for(let i = 0; i < numbers.length; i += 1){
//     soma += numbers[i]
// }
// console.log(soma);

// let ma = 0;
// const soma = numbers.reduce((acc, item) =>{
//     return acc + item;
// }, 0);

// ma = soma / numbers.length;

// if(ma > 20){
//     console.log(`${ma} é um valor maior que 20`);
// }else{
//     console.log( `${ma} é um valor menor ou igual a 20`);
//}

// let higherNumber = 0;
// for (let i = 0; i < numbers.length; i += 1){
//     if(numbers[i] > higherNumber){
//         higherNumber = numbers[i]
//     }
// }
// console.log(higherNumber);

// numbers.forEach((i) => {
//     if(i > higherNumber){
//         higherNumber = i
//     }
// })

// console.log(higherNumber);

// let impar = 0;
// for(let i = 0; i < numbers.length; i += 1){
//     if(numbers % 2 != 0){
//         impar += 1
//     }
// }

// console.log(impar);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let impar = 0;
// numbers.forEach(number => {
//   if(number % 2 != 0){
//     impar += 1;
//   }
// })
// console.log(impar)

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let min = Math.min(...numbers)

// console.log(min);

// let min = numbers.reduce((a, b) => Math.min(a, b))

// console.log(min);

// let min = numbers[0];
// for(let i = 0; i < numbers.length; i += 1){
//     if(numbers[i] < min){
//         min = numbers[i]
//     }
// }

// console.log(min);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let min = numbers[0];
// for (const i of numbers) {
//     if( min > i ){
//         min = i
//     }
// }

// console.log(min);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let mini = numbers[0];

// numbers.forEach(min => {
//     if( mini > min){
//         mini = min;
//     }    
// });

// console.log(mini)

//Bubble Sort

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let indexdois = 1; indexdois < numbers.length; indexdois += 1) {
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[indexdois] < numbers[index]) {
      let position = numbers[index];
      numbers[index] = numbers[indexdois];
      numbers[indexdois] = position;
      console.log(numbers);
    }
  }
}

//Buble sort Final multiplica a posição pela próxima
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArr = [];
for (let index = 0; index < numbers.length; index += 1) {
  if (index == numbers.length - 1) {
    novoArr.push(numbers[index] * 2);
  } else {
    novoArr.push(numbers[index] * numbers[index + 1]);
  }
}
console.log(novoArr);

//Ordena o array em forma crescente e multiplica o termo pelo seguinte.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArr = [];
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
for (let index = 0; index < numbers.length; index += 1) {
  if (index == numbers.length - 1) {
    novoArr.push(numbers[index] * 2);
  } else {
    novoArr.push(numbers[index] * numbers[index + 1]);
  }
}
console.log(novoArr);












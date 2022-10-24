// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };

//   repeat(5, console.log);

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(3, (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// });

// repeat(3, (number) => {
//     if(number % 2 > 0){
//         console.log(number, 'is odd');
//     }
// })

// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   const isEven = (number) => {
//     if (number % 2 === 0) {
//       console.log(number, 'is even');
//     }
//   };
  
//   const isOdd = (number) => {
//     if ((number % 2) > 0) {
//       console.log(number, 'is odd');
//     }
//   };
  
//   repeat(3, isEven); // Testa quais números serão pares;
//   repeat(3, isOdd); // Testa quais números serão ímpares;

const wakeUp = () => 'Acordando!!';
const coffee = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => console.log(func());

doingThings(wakeUp);
doingThings(coffee);
doingThings(sleep);
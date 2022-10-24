// E-mail generator --------------------------------
// const employeesGenerator = (name) => {
//     const email = `${name.toLowerCase().replaceAll(' ', '_')}@trybe.com`;

//     return email;
// }

// const newEmployees = (func) => {
//     const employees = {
//       id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };

//   console.log(newEmployees(employeesGenerator));

// Sorte numbers verifier ----------------------------

// const senaNumbers = () => Math.round(Math.random() * 5) + 1;

// const verifyNumbers = (senaNumbers) => {
//     const randomNumber = Math.round(Math.random() * 5) + 1;
//     const sortedNumber = senaNumbers();

//     if(randomNumber === sortedNumber) {
//         console.log(`Parabéns! O ${randomNumber} é o mesmo ${sortedNumber} que você escolheu!!`);
//     } else {
//         console.log(`Tente novamente!Seu n: ${randomNumber}
//         Numero sorteado: ${sortedNumber}`);
//     }
// }

// verifyNumbers(senaNumbers);

// Automatic exam answers --------------------------------

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const arrayVerifier = (right, student) => {
//   let counter = 0;
//   for (let i = 0; i < right.length; i++) {
//     const rightArray = right[i];
//     const studentArray = student[i];
//     if (rightArray === studentArray) {
//       counter += 1;
//     } else if (studentArray === 'N.A') {
//       counter += 0;
//     } else {
//       counter -= 0.5;
//     }
//   }
//   console.log(counter);
//   return counter;
// };

// const verifyingTotalScore = (right, student, func) => {
//   const score = func(right, student);

//   return `O total de pontos obtidos foi de: ${score}`;
// };

// console.log(verifyingTotalScore(RIGHT_ANSWERS, STUDENT_ANSWERS, arrayVerifier));

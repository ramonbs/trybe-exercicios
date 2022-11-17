// const numbers = [1, 2, 3];

// const newArray = [...numbers, 4, 5, 6];
// console.log(numbers); // [ 1, 2, 3 ]
// console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]

// const spring = ['OUT', 'NOV', 'DEZ'];
// const summer = ['JAN', 'FEV', 'MAR'];
// const fall = ['ABR', 'MAI', 'JUN'];
// const winter = ['JUL', 'AGO', 'SET'];

// const months = [...summer, ...fall, ...winter, ...spring];
// console.log(months);

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Maça', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Melancia', 'Pêra', 'Abacate'];

const fruitSalad = (fruit, additional) => {
  const allFruits = [...fruit, ...additional]

  return allFruits
};

console.log(fruitSalad(specialFruit, additionalItens));
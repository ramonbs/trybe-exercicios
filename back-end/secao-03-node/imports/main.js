// const { brl, usdToBrl } = require('./brlValue');
// const fs = require('fs');
// const function1 = require('./function1');
// const function2 = require('./function2');

// const br = 10;
// const convertValue = usdToBrl(br);

// console.log(brl);
// console.log(convertValue) ;

// function1();
// function2();

// const fs = require('fs').promises;

// const axios = require("axios");

// async function main() {
//     axios
//         .get("https://api.github.com/users/ramonbs/repos")
//         .then(function (response) {
//             console.log(response.data);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }

// const fs = require('fs').promises;

// async function main() {
//   try {
//     const data = await fs.readFile('./meu-arquivo.txt', 'utf-8');
//     console.log(data);
//   } catch (err) {
//     console.error(`Erro ao ler o arquivo: ${err.message}`);
//   }
// }

// main()

// const fs = require('fs').promises;

// async function main() {
//   try {
//     await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
//     console.log('Arquivo escrito com sucesso!');
//   } catch (err) {
//     console.error(`Erro ao escrever o arquivo: ${err.message}`);
//   }
// }

// main()
const readline = require('readline-sync');
const weight = readline.questionInt('What\'s your weight? (kg) ');
const height = readline.questionInt('What\'s your height? (cm) ');

function handleBMI(weight, height) {
    console.log(`Weight: ${weight}, Height: ${height}`);
  
    const heightInMeters = height / 100;
    const heightSquared = heightInMeters ** 2;
  
    const bmi = weight / heightSquared;
  
    return bmi;
  }

const bmi = handleBMI(weight, height);

console.log(bmi);

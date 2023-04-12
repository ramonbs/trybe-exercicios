const readline = require('readline-sync');

const name = readline.question('Qual o seu nome? ');
const age = readline.questionInt('Qual a sua idade? ');

console.log(`Olá, ${name}! Você tem ${age} anos.`);

// console.log('Hello World!');
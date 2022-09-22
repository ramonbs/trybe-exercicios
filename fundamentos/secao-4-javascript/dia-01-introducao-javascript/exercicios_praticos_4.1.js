// const a = 1;
// const b = 2;
// const c = 3;

// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a*b);
// console.log(a%b);

// if (a > b > c) {
//   console.log("A é maior!");
// } else if (a < b < c) {
//   console.log("C é maior!");
// } else {
//   console.log("B é maior!");
// }

// const a = 60;
// const b = 60;
// const c = 60;
// const sum = a + b + c;

// if(sum == 180){
//     console.log("true")
// }
// else{
//     console.log("false")
// };

// const peça = "ASDFASDFASDF";
// const resultado = peça.toLowerCase();

// switch (resultado) {
// case "peão":
// console.log("Sua peça só se move para frente");
// break;
// case "rei":
// console.log("Se move em todas as direções");
// break;
// case "rainha":
// console.log("Se move em todos os lados");
// break;
// case "torre":
// console.log("Se move na vertical e horizontal");
// break;
// case "bispo":
// console.log("Se move nas diagonais");
// break;
// case "cavalo":
// console.log("Se move em L");
// break;
// default:
// console.log("Não é uma peça valida.");
// }

// const mark = 4;
// const markPer = mark * 10;

// if (markPer > 100 || markPer < 0){
//     console.log("Nota inválida")
// }else if( markPer >= 90 ){
//     console.log("Nota A")
// }else if ( markPer >= 80){
//     console.log("Nota B")
// }else if ( markPer >= 70){
//     console.log("Nota C")
// }else if ( markPer >= 60){
//     console.log("Nota D")
// }else if ( markPer >= 50){
//     console.log("Nota E")
// }else{
//     console.log("Nota F")
// }

// const a = 7,
// b = 5,
// c = 3;
// if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
// console.log("True, Tem um par entre os três");
// } else {
// console.log("False, Não existe nenhum par entre os três");
// }

// const a = 6,
//   b = 4,
//   c = 2;
// if (a % 2 === 1 || b % 2 === 1 || c % 2 === 1) {
//   console.log("True, Tem um ímpar entre os três");
// } else {
//   console.log("False, Não existe nenhum ímpar entre os três");
// }

// const custoProduto = 10;
// const valorVenda = 15;
// const valorCustoTotal = 10 * 0.2 * 1000;
// const lucro = 15 * 1000 - valorCustoTotal;
// console.log(lucro);

// if (custoProduto < 0 || valorVenda < 0) {
//   console.log("Os valores inciais não podem ser menores que zero.");
// } else {
//   console.log(
//     `Sendo o custo do produto ${custoProduto.toLocaleString("pt-br", {
//       style: "currency",
//       currency: "BRL",
//     })} mais o imposto de 20% e vendedo 1000 unidades a ${valorVenda.toLocaleString(
//       "pt-br",
//       { style: "currency", currency: "BRL" }
//     )} você acaba lucrando ${lucro.toLocaleString("pt-br", {
//       style: "currency",
//       currency: "BRL",
//     })}`
//   );
// }

const salario = 1000;
let salarioLiquido;
let salarioFinal;

if (salario < 0 || salario > 100000) {
  console.log("valor inválido");
} else if (salario <= 1556.94) {
  salarioLiquido = salario - salario * 0.08;
} else if (salario >= 1556.94 && salario <= 259492) {
  salarioLiquido = salario - salario * 0.09;
} else if (salario >= 2594.93 && salario <= 5189.82) {
  salarioLiquido = salario - salario * 0.11;
} else {
  (salarioLiquido = salario - 570), 88;
}
console.log(salarioLiquido);

if (salarioLiquido < 0 || salarioLiquido > 100000) {
  console.log("Valor inválido");
} else if (salarioLiquido <= 1903.98) {
  salarioFinal = salarioLiquido;
} else if (salarioLiquido > 1903.99 && salarioLiquido <= 2826.65) {
  salarioFinal = salarioLiquido - (salarioLiquido * 0.075 - 142.8);
} else if (salarioLiquido > 2826.66 && salarioLiquido <= 3751.0) {
  salarioFinal = salarioLiquido - (salarioLiquido * 0.15 - 354.8);
} else if (salarioLiquido > 3751.0 && salarioLiquido <= 4664.68) {
  salarioFinal = salarioLiquido - (salarioLiquido * 0.225 - 636.13);
} else {
  salarioFinal = salarioLiquido - (salarioLiquido * 0.275 - 869.36);
}
console.log(salarioFinal);


// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

// const testingScope = (escopo) => {
//   let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//   ifScope =  `${ifScope} ótimo, fui utilizada no escopo !`;
//   const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//   (escopo === true) ? console.log(ifScope) : console.log(elseScope);
//   // console.log(ifScope + ' o que estou fazendo aqui ? :O');
// };

// testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

let sortOddsAndEvens = (inputArr) => {
  let len = inputArr.length;
  for (let i = 1; i < len; i += 1) {
    for (let j = 0; j < len; j += 1) {
      if (inputArr[i] < inputArr[j]) {
        let newArrayWithSort = inputArr[i];
        inputArr[i] = inputArr[j];
        inputArr[j] = newArrayWithSort;
      }
    }
  }
  return inputArr;
};

console.log(
  `Os números ${sortOddsAndEvens(
    oddsAndEvens
  )} se encontram ordenados de forma crescente!`
);

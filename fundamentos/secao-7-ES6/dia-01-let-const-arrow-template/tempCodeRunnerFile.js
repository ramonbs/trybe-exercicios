const oddsAndEvens = [13, 3, 4, 10, 7, 2];

let sortOddsAndEvens = (inputArr) => {
  let len = inputArr.length;
  for (let i = 0; i < len; i += 1) {
    for (let j = 1; j < len; j += 1) {
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
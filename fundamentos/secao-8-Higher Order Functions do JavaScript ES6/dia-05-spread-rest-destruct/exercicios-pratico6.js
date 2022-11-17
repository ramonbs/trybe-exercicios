const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const carros = [[...palio], [...shelbyCobra], [...chiron]];

const toObject = (carros) => carros.map(([tipo, marca, ano]) => ({tipo, marca, ano}))

console.log(toObject(carros));

// const arrays = [
//     ['1', '2', '3'],
//     [true],
//     [4, 5, 6],
//   ];

//   function flatten(arrays) {
//     // escreva seu código aqui
//     return arrays.reduce((acc, curr) => {
//        return acc.concat(curr);
//     })
//   }

//   console.log(flatten(arrays));

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// const oneStringWithAllNames = (books) => {
//   const author = books
//     .filter((book) => book.author.name !== '')
//     .map((book) => `${book.author.name}, `)
//     .reduce((acc, curr) => acc.concat(curr))
//     .slice(0, -1) + '.';

//   return author;
// };

// console.log(oneStringWithAllNames(books));

// const averageAge = (books) =>
//   books
//     .map((book) => book.releaseYear - book.author.birthYear)
//     .reduce((acc, curr) => Math.round((acc + curr / 6)), 0);

// console.log(averageAge(books));

const longestLengthBook = (books) =>
  books
    .map((book) => book.name.length)

const longestNamedBook = (books) =>
  books
    .reduce((acc, curr) => ((acc.name.length < curr.name.length) ? acc = curr : acc));

console.log(longestLengthBook(books));
console.log(longestNamedBook(books));

// const names = [
//   'Aanemarie',
//   'Adervandes',
//   'Akifusa',
//   'Abegildo',
//   'Adicellia',
//   'Aladonata',
//   'Abeladerco',
//   'Adieidy',
//   'Alarucha',
// ];

// // ...
// function containsA() {
//   let totalOfLettersA = 0;
//   names.forEach((name) => {
//     const lettersFromName = name.split('');
//     totalOfLettersA += lettersFromName
//     .reduce((lettersAInName, currentLetter) => (currentLetter.toLowerCase() === 'a' ? lettersAInName + 1 : lettersAInName), 0);
//   })
//   return totalOfLettersA;
// }

// console.log(containsA());

// const constainsATest = (names) => 
       

// console.log(constainsATest(names))
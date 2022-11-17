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

// Adicione o código do exercício aqui:

// const generatorStrings = (books) =>
//   books.map((books) => `${books.name} - ${books.genre} - ${books.author.name}`);

// console.log(generatorStrings(books));

// ---------------------------------------------------------

// const filterBooks = (books) => books.filter((book) => book.genre === 'Ficção Científica'  || book.genre === 'Fantasia');

// console.log(filterBooks(books));

// const oldBooksOrdered = (books) =>
//   books
//     .filter((book) => 2022 - book.releaseYear >= 60)
//     .sort((a, b) => a.releaseYear - b.releaseYear);

// console.log(oldBooksOrdered(books));

// const filterBooksAndNames = (books) =>
//   books
//     .filter(
//       (book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia'
//     )
//     .map((books) => {
//       return books.author.name;
//     })
//     .sort();

// console.log(filterBooksAndNames(books));

// const oldBooks = (books) =>
//   books
//     .filter((books) => 2022 - books.releaseYear >= 60)
//     .map((books) => books.name);

// console.log(oldBooks(books));

const authorWith3DotsOnName = (books) =>
  books.find((books) => books.author.name.startsWith('J. R. R.')).name;

console.log(authorWith3DotsOnName(books));

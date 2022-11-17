// // função que gera um número aleatório
// const generateRandomNumber = () => Math.round(Math.random() * 10);

// const resolvePromise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const number = generateRandomNumber();
//       resolve(number);
//     }, 1000);
//   });

// resolvePromise().then((response) => {
//     console.log(response);
// });

// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

// promise rejeitada retornando um objeto de erro
const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido.`));
    }, 1000);
  });

const randomPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      if (randomNumber % 2 === 0) {
        resolve(randomNumber);
      } else {
        reject(new Error(`O número ${randomNumber} não é par e é inválido.`));
      }
    }, 1000);
  });

resolvedPromise()
  .then((response) => {
    console.log(`resolvedPromise: o número gerado é ${response}.`);
  })
  .catch((error) => {
    console.log(`Com a promise resolvida, não irá passar pelo catch`);
  });

rejectedPromise()
  .then((response) => {
    console.log(`Com a promise rejeitada, não irá passar pelo then`);
  })
  .catch((error) => {
    console.log(`rejectedPromise: ${error.message}`);
  });

randomPromise()
  .then((responde) => {
    console.log(`randomPromise: o número gerado é par: ${responde}.`);
  })
  .catch((error) => {
    console.log(`randomPromise: ${error.message}`);
  })
  .finally(() => {
    console.log(`Sempre será executado`);
  });

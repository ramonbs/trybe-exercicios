// definindo o objeto
// const character = {
//   name: 'Luke SkyWalker',
//   age: '53',
//   description: {
//     specieName: 'Human',
//     jedi: true,
//   },
//   homeWorld: {
//     name: 'Tatooine',
//     population: '200000',
//   },
// };

// // desestruturando o objeto:
// const {
//   name,
//   age,
//   homeWorld: { name: planetName },
//   description: { jedi },
// } = character;

// // imprimindo os valores:
// console.log(
//   `Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${
//     jedi ? 'é um Jedi' : 'não é um Jedi'
//   }.`
// );

// const daysOfWeek = {
//   workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//   weekend: ['Saturday', 'Sunday'],
// };

// const { workDays, weekend } = daysOfWeek;
// console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
// console.log(weekend); // ['Saturday', 'Sunday']

// const weekdays = [...workDays, ...weekend];
// console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// const user = {
//   name: 'Maria',
//   age: 21,
//   nationality: 'Brazilian',
// };

// const jobInfos = {
//   profession: 'Software engineer',
//   squad: 'Rocket Landing Logic',
//   squadInitials: 'RLL',
// };

// const { name: firstName, age, nationality } = user;
// const { profession, squad, squadInitials } = jobInfos;


// console.log(
//   `Hi, my name is ${firstName}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`
// );

// const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
// const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

// console.log(firstCountry); // Brazil
// console.log(secondCountry); // Japan
// console.log(thirdCountry); // China
// console.log(fourthCountry); // Canada

const greeting = (user = 'Usuário') => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//     return value1 + value2;
//   };

//   console.log(sum(2, '3'));

// const verifyIsNumber = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//   };

//   const sum = (value1, value2) => {
//     try {
//       verifyIsNumber(value1, value2);
//       return value1 + value2;
//     } catch (error) {
//       return error.message;
//     }
//   };

//   console.log(sum(2, '3'));

// const customer1 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };

//   console.log(customer1);

//   customer1.lastName = 'Faria';
//   console.log(customer1);

//   const customer2 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
//   };

//   console.log(customer2);
//   customer2['lastName'] = 'Silva';
//   console.log(customer2);

// const coolestTvShow = {
//     name: 'BoJack Horseman',
//     genre: 'adult animation',
//     createdBy: 'Raphael Bob-Waksberg',
//     favoriteCharacter: 'Princess Carolyn',
//     quote: 'Princess Carolyn always lands on her feet.',
//     seasons: 6,
//   };

// for (const property in coolestTvShow) {
//   console.log(property);
// }

//   console.log(Object.keys(coolestTvShow));

// [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// const listSkills = (student) => {
//   const arrayOfSkills = Object.keys(student);
//   console.log(arrayOfSkills)
//   for (const key in arrayOfSkills) {
//     console.log(`${arrayOfSkills[key]}, Nível: ${student[arrayOfSkills[key]]}`);
//   }
// };

// console.log('Estudante 1');
// listSkills(student1);

// console.log('Estudante 2');
// listSkills(student2);

// const coolestTvShow = {
//   name: 'BoJack Horseman',
//   genre: 'adult animation',
//   createdBy: 'Raphael Bob-Waksberg',
//   favoriteCharacter: 'Princess Carolyn',
//   quote: 'Princess Carolyn always lands on her feet.',
//   seasons: 6,
// };

// for (const property in coolestTvShow) {
//   console.log(coolestTvShow[property]);
// }

// const coolestTvShow = {
//   name: 'BoJack Horseman',
//   genre: 'adult animation',
//   createdBy: 'Raphael Bob-Waksberg',
//   favoriteCharacter: 'Princess Carolyn',
//   quote: 'Princess Carolyn always lands on her feet.',
//   seasons: 6,
// };

// for (const property in coolestTvShow) {
//   console.log(coolestTvShow[property]);
// }

// const coolestTvShow = {
//     name: 'BoJack Horseman',
//     genre: 'adult animation',
//     createdBy: 'Raphael Bob-Waksberg',
//     favoriteCharacter: 'Princess Carolyn',
//     quote: 'Princess Carolyn always lands on her feet.',
//     seasons: 6,
//   };

// for (const property in coolestTvShow) {
//   console.log(coolestTvShow[property]);
// }

//   console.log(Object.values(coolestTvShow));

// const student = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkill: 'Ótimo',
//   };

//   const listSkillsValuesWithFor = (student) => {
//     const skills = [];
//     for(skill in student) {
//       skills.push(student[skill]);
//     }

//     return skills;
//   };

//   const listSkillsValuesWithValues = (student) => Object.values(student);

//   // Sem Object.values
//   console.log(listSkillsValuesWithFor(student));

// Com Object.values
//   console.log(listSkillsValuesWithValues(student));

// const coolestTvShow = {
//     name: 'BoJack Horseman',
//     genre: 'adult animation',
//     createdBy: 'Raphael Bob-Waksberg',
//     favoriteCharacter: 'Princess Carolyn',
//     quote: 'Princess Carolyn always lands on her feet.',
//     seasons: 6,
//   };

//   console.log(Object.entries(coolestTvShow));

// const person = {
//     name: 'Alberto',
//     lastName: 'Gomes',
//     age: 20,
//   };

//   const info = {
//     age: 23,
//     job: 'engenheiro',
//   };

//   const family = {
//     children: ['Maria', 'João'],
//     wife: 'Ana',
//   };

//   Object.assign(person, info, family)
//   console.log(person)

// const person = {
//   name: 'Roberto',
// };

// const lastName = {
//   lastName: 'Silva',
// };

// const newPerson = Object.assign({}, person, lastName);
// newPerson.name = 'Gilberto';
// console.log(newPerson);
// console.log(person);

import { updateImg, updateHeroName, clearData } from './activeUI.js';
const button = document.querySelector('#next-button');

button.addEventListener('click', () => {
  clearData();
  generateHero();
});

const generateHero = () =>
  fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
    .then((response) => response.json())
    .then((data) => {
      const randomNumberIdHero = Math.floor(Math.random() * data.length);
      updateImg(data[randomNumberIdHero].images.lg);
      updateHeroName(data[randomNumberIdHero].name);
    })
    .catch((error) => console.log(error));

window.onload(generateHero());

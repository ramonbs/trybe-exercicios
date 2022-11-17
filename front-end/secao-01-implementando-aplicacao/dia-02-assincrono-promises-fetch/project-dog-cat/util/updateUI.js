const img = document.querySelector('img');
const dogBtn = document.querySelector('.dog');
const catBtn = document.querySelector('.cat');
const randomBtn = document.querySelector('.random');

const randomDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => res.json())
    .then((data) => {
      img.src = data.message;
    })
    .catch((err) => console.log(err));
};

const randomCat = () => {
  fetch('https://aws.random.cat/meow')
    .then((res) => res.json())
    .then((data) => {
      img.src = data.file;
    })
    .catch((err) => console.log(err));
};

const randomAnimal = () => {
  Promise.any([
    fetch('https://aws.random.cat/meow'),
    fetch('https://dog.ceo/api/breeds/image/random'),
  ])
    .then((res) => res.json())
    .then((data) => {
      img.src = data.message || data.file;
    })
    .catch((err) => console.log(err));
};

dogBtn.addEventListener('click', randomDog);
catBtn.addEventListener('click', randomCat);
randomBtn.addEventListener('click', randomAnimal);
window.onload(randomAnimal());

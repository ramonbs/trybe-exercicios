const img = document.querySelector('img');

export const updateImg = (url) => {
  img.src = url;
};

export const updateHeroName = (name) => {
  const divHeroName = document.querySelector('.hero-name');
  const h3 = document.createElement('h3');
  h3.setAttribute('id', 'selected-hero-name');
  h3.textContent = name;
  divHeroName.appendChild(h3);
};

export const clearData = () => {
  const divHeroName = document.querySelector('.hero-name');
  divHeroName.innerHTML = '';
};

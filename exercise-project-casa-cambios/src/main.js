let readButton = document.getElementById('input-button');

readButton.addEventListener('click', () => {
  let userResponse = document.getElementById('input-box').value;
  console.log(userResponse);

  let requestURL = `https://api.exchangerate.host/latest?base=${userResponse}`;
  fetch(requestURL, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      if (userResponse === '') {
        window.alert('Você precisa passar uma moeda!');
      } else if (userResponse != data.base) {
        window.alert('Moeda inexistente!');
      } else {
        const divBox = document.getElementById('box-results');
        Object.entries(data.rates).forEach((item) => {
          const divs = document.createElement('div');
          divs.innerHTML = `${item[0]}: ${item[1]}`;
          divs.setAttribute('class', 'box');
          divBox.appendChild(divs);
        });
      }
    });
});

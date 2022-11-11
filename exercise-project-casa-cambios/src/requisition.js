let readButton = document.getElementById('input-button');

const createPhrase = () => {
  let userResponse = document.getElementById('input-box').value;
  let phrase = document.querySelector('.phrase');
  phrase.innerHTML = `Cotação da moeda <span>${userResponse}</span>:`;
};

const dataShow = (data) => {
  const divBox = document.getElementById('box-results');
  Object.entries(data.rates).forEach((item) => {
    const divs = document.createElement('div');
    divs.innerHTML = `${item[0]} ${item[1].toFixed(2)}`;
    divs.setAttribute('class', 'box');
    divBox.appendChild(divs);
  });
};

const requisition = () => {
  let userResponse = document.getElementById('input-box').value;

  let requestURL = `https://api.exchangerate.host/latest?base=${userResponse}`;
  fetch(requestURL, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      if (userResponse === '') {
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool',
        });
      } else if (userResponse != data.base) {
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool',
        });
      } else {
        createPhrase();
        dataShow(data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const clearData = () => {
  document.getElementById('box-results').innerHTML = '';
};

readButton.addEventListener('click', () => {
  clearData();
  requisition();
});

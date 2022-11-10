let readButton = document.getElementById('input-button');

// readButton.addEventListener('click', () => {
//   let userResponse = document.getElementById('input-box').value;
//   console.log(userResponse);
//   console.log('Botão clicado');
//   let requestURL = 'https://api.exchangerate.host/latest';
//   fetch(requestURL)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(typeof data);
//       data.base.forEach((item) => {
//         if (userResponse === data.base) {
//           return console.log(item.rates);
//         }
//       });
//     });
// });
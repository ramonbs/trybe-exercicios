console.log(localStorage.length);
localStorage.setItem('firstname', 'Adam');
localStorage.setItem('lastname', 'Philips');
console.log(localStorage.getItem('lastname'));
console.log(localStorage.length);
localStorage.removeItem('lastname');
console.log(localStorage.length);
localStorage.clear();
console.log(localStorage.length);
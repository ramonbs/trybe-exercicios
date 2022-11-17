import './style.css';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Super Heroes</h1>
    <div class="heroes ">
      <img src=''>
      </div>
    <div class="hero-name">
    </div>
      <button id="next-button">Next</button>
  </div>
`;

setupCounter(document.querySelector('#counter'));

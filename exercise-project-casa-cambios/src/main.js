import './index.css';

document.querySelector('#app').innerHTML = `
    <section id="section-title">
      <div id="wrapper-title">
        <h1>Casa de <span>Câmbio</span></h1>
      </div>
      <figure>
        <img src="https://rockiereact.surielementor.com/static/media/banner-01.eec598253cec8f46e54f.png" alt="Logo da casa de câmbio">
      </figure>
      </section>
      <section id="section-input">
      <div id="wrapper-button">
      <label>Digite a moeda: </label>
          <input type="text" id="input-box" placeholder="Insira uma moeda..." />
          </div>
          <button id="input-button">Pesquisar</button>
      </section>

      <section id="wrapper-divs">
        <div>
          <p class="phrase"></p>
        </div>
        <div id="box-results">
        </div>
      </section>
    </div>
`;

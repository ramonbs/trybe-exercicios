const elemento = document.getElementById('elementoOndeVoceEsta');
console.log(elemento);

const paiElemento = elemento.parentElement;
console.log(paiElemento);
paiElemento.style.color = 'Green';

const primeiroFilhoDoFilho = elemento.nextElementSibling;
console.log(primeiroFilhoDoFilho);
primeiroFilhoDoFilho.innerText = "olá, sou primeiro filho do filho =)";
primeiroFilhoDoFilho.style.color = 'red';

const primeiroFilho = paiElemento.firstElementChild;
console.log(primeiroFilho);

const ondeFilhoEsta = elemento.previousElementSibling;
console.log(ondeFilhoEsta);

const textElement = elemento.nextSibling;
textElement.style.color = 'aquamarine'
console.log(textElement);

const terceiroFilhoDeOndeVoceEsta = elemento.nextElementSibling;
console.log(terceiroFilhoDeOndeVoceEsta);

const terceiroFilhoAPartirDoPai = paiElemento.children[2];
console.log(terceiroFilhoAPartirDoPai);

const ultimoFilho = paiElemento.lastElementChild;
console.log(ultimoFilho);
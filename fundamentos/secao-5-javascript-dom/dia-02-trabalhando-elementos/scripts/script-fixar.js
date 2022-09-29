const bodyContainer = document.getElementsByTagName('body')[0];

function createElementsWithText (Element, Text){
    const variable = document.createElement(Element);
    variable.innerText = Text;
    
    return variable;
}

function createNoTextElements (Element, nameClass){
    const variable = document.createElement(Element);
    variable.className = nameClass;
    return variable;
}

function insertElement (variable){
    bodyContainer.appendChild(variable);
}

// Criando tag h1
insertElement(createElementsWithText('h1', 'Hello!!!'));

// Criando tag main com classname
insertElement(createNoTextElements('main', 'main-content'));

// Criando filha da main, section

const main = document.getElementsByClassName('main-content')[0];

const section = document.createElement('section');
section.className = 'center-content';

main.appendChild(section);

// Criando p como filha da section com texto

section.appendChild(createElementsWithText('p', 'Testando minhas functionsssss!!!!!!!'));

// Outra tag section mas com classname
main.appendChild(createNoTextElements('section', 'left-content'));

//Outra tag section mas com classname
main.appendChild(createNoTextElements('section', 'right-content'));

const left = document.getElementsByClassName('left-content')[0];
const right = document.getElementsByClassName('right-content')[0];

// Criando img no section left
const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
left.appendChild(img);

// Criando lista na section principal

const list = document.createElement('ul');
right.appendChild(list);

//Criando os li na lista anterior

for(let index = 1; index <= 10; index += 1){
    const itemList = document.createElement('li');
    itemList.innerText = index;
    list.appendChild(itemList);
}

// Criando 3 h3 no main
for(let index = 1; index <= 3; index += 1){
    main.appendChild(createElementsWithText('h3', index));
}

/* --------------------------------------------- */
// Mudando classname do titulo h1
const title = document.getElementsByTagName('h1')[0];
title.className = 'title';

// Mudando classname h3
for (let index = 0; index < 3; index++) {
    const subtitles = document.getElementsByTagName('h3')[index];
    subtitles.className = 'description';
}

// Removendo section left-content
main.removeChild(left);

// Centralizando a right

right.style.marginRight = 'auto';

// Troque a cor de fundo do elemento pai da section

section.parentElement.style.backgroundColor = 'green';

// Remova os dois últimos elementos (nove e dez) da lista criada

for(let index = 1; index <= 3; index += 1 ){
    list.lastElementChild.remove();
}






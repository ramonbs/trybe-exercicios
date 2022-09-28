function mudandoParagrafo(text) {
  const para1 = document.getElementsByTagName("p");
  para1[1].innerText = text;
}

mudandoParagrafo("Oi");

function bgGreen(color) {
  const bg = document.getElementsByClassName("main-content")[0];
  bg.style.backgroundColor = "rgb(76, 164, 109)";
}

bgGreen();

function bgCenter() {
  const bg = document.getElementsByClassName("center-content")[0];
  bg.style.backgroundColor = "white";
}

bgCenter();

function corrigeTexto() {
  document.getElementsByTagName("h1")[0].innerText = "Exercício - JavaScript";
}
corrigeTexto();

function tagMaiusculo(){
    document.getElementsByTagName("p")[0].style.textTransform = "uppercase"
}

tagMaiusculo();

function showConsole() {
    let array = document.getElementsByTagName('p');
    for (let i = 0; i < array.length; i +=1) {
      console.log(array[i].innerText);
    }
  }
  showConsole();

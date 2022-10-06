window.onload = function () {
  let array = [
    "Mudar cor de fundo",
    "Mudar cor do texto",
    "Tamanho da fonte",
    "Espaçamento de Linhas",
    "Tipo de Fonte",
    "Resetar Estilos",
  ];

  const localButton = document.querySelector("section");

  function button(array) {
    for (let index = 0; index < array.length; index++) {
      const createButton = document.createElement("button");
      createButton.classList.add("button");
      createButton.id = index;
      createButton.textContent = array[index];
      localButton.appendChild(createButton);
      createButton.addEventListener("click", clickButton);
    }
  }

  button(array);

  function clickButton(event) {
    let capture = event.target.innerHTML;
    switch (capture) {
      case "Mudar cor de fundo":
        for (let i = 0; i < 4; i++) {
          const background = document.querySelectorAll(".background")[i];
          if(background.style.backgroundColor === "white"){
            background.style.backgroundColor = "black";
            localStorage.setItem(
              "backgroundColor",
              background.style.backgroundColor);
          }else {
            background.style.backgroundColor = "white";
            localStorage.setItem(
              "backgroundColor",
              background.style.backgroundColor
            );
          }
        }
        break;
      case "Mudar cor do texto":
        for (let i = 0; i < 3; i++) {
          const fontColor = document.querySelectorAll(".font-color")[i];
          if (fontColor.style.color === "black") {
            fontColor.style.color = "white";
            localStorage.setItem("fontColor", fontColor.style.color); 
          }else{
            fontColor.style.color = "black";
            localStorage.setItem("fontColor", fontColor.style.color);
          }
        }
        break;
      case "Tamanho da fonte":
        const sizeParagraph = document.getElementsByTagName("p")[0];
        if (sizeParagraph.style.fontSize === "16px") {
          sizeParagraph.style.fontSize = "20px";
          localStorage.setItem("fontSize", sizeParagraph.style.fontSize);
        }else{
          sizeParagraph.style.fontSize = "16px";
          localStorage.setItem("fontSize", sizeParagraph.style.fontSize);
        }
        break;
      case "Espaçamento de Linhas":
        const heightLine = document.getElementsByTagName("p")[0];
        if(heightLine.style.lineHeight === ""){
          heightLine.style.lineHeight = "2.0";
          localStorage.setItem("lineSize", heightLine.style.lineHeight);
        }else{
          heightLine.style.lineHeight = "";
          localStorage.setItem("lineSize", heightLine.style.lineHeight);
        }
        break;
      case "Tipo de Fonte":
        const fontFamily = document.getElementsByTagName("p")[0];
        if(fontFamily.style.fontFamily === "monospace"){
          fontFamily.style.fontFamily = "arial";
          localStorage.setItem("fontFamily", fontFamily.style.fontFamily);
        }else{
          fontFamily.style.fontFamily = "monospace";
          localStorage.setItem("fontFamily", fontFamily.style.fontFamily);
        }
        break;
      case "Resetar Estilos":
        localStorage.clear();
        break;
      default:
        break;
    }
  }
  create();
};

function create() {
  if (localStorage.length === 0) {
    localStorage.setItem("fontColor", "fontColor");
    localStorage.setItem("backgroundColor", "background");
    localStorage.setItem("fontSize", "sizeParagraph");
    localStorage.setItem("lineSize", "heightLine");
    localStorage.setItem("fontFamily", "Fontfamily");
  } else {
    for (let i = 0; i < 4; i++) {
      const background = document.querySelectorAll(".background")[i];
      background.style.backgroundColor =
        localStorage.getItem("backgroundColor");
    }
    for (let i = 0; i < 3; i++) {
      const fontColor = document.querySelectorAll(".font-color")[i];
      fontColor.style.color = localStorage.getItem("fontColor");
    }
    const sizeParagraph = document.getElementsByTagName("p")[0];
    sizeParagraph.style.fontSize = localStorage.getItem("fontSize");

    const heightLine = document.getElementsByTagName("p")[0];
    heightLine.style.lineHeight = localStorage.getItem("lineSize");

    const fontFamily = document.getElementsByTagName("p")[0];
    fontFamily.style.fontFamily = localStorage.getItem("fontFamily");
  }
}

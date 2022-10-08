function preventButtonSubmit() {
  const button = document.querySelector("#submit");
  //validate if number of characters is between 10 and 40 in the input name and input email
  const inputName = document.querySelector("#name");
  const inputEmail = document.querySelector("#e-mail");
  button.addEventListener("click", (event) => {
    if (inputName.value.length < 10 || inputName.value.length > 40) {
      alert("Name must be between 10 and 40 characters");
      button.addEventListener("click", (event) => {
        event.preventDefault();
      });
    }
    if (inputEmail.value.length < 10 || inputEmail.value.length > 50) {
      alert("Email must be between 10 and 50 characters");
    }
    event.preventDefault();
  });
}

function resetButton() {
  const button = document.querySelector("#reset");
  button.addEventListener("click", (event) => {
    event.reload();
  });
}

function createLabel() {
  const input = document.querySelector("#agree2");
  const sectionLabel = document.querySelector("#img");
  input.addEventListener("click", (event) => {
    if (event.target.checked) {
      const label = document.createElement("label");
      label.setAttribute("for", "agree2");
      label.setAttribute("class", "form-label");
      label.textContent = "Eu aceito os termos de uso: ";
      sectionLabel.appendChild(label);
    } else {
      sectionLabel.removeChild(sectionLabel.lastChild);
    }
  });
}

function createInputImage() {
  const input = document.querySelector("#agree2");
  const sectionImg = document.querySelector("#img");
  input.addEventListener("click", (event) => {
    if (event.target.checked) {
      const image = document.createElement("input");
      image.setAttribute("type", "file");
      sectionImg.appendChild(image);
    } else {
      sectionImg.removeChild(sectionImg.lastChild);
    }
  });
}

preventButtonSubmit();
createLabel();
createInputImage();
resetButton();

const validationInput = document.querySelector("#validation-input");

// Adds class "valid" or "invalid" when input looses focus

validationInput.addEventListener("blur", (event) => {
    let inputText = event.currentTarget.value;
    let validLength = Number(validationInput.getAttribute("data-length"));

    if (inputText.length === validLength) {
        validationInput.classList.add("valid");
    } else {
        validationInput.classList.add("invalid");
    };
});

// Removes class "valid" or "invalid" when input has focus

validationInput.addEventListener("focus", (event) => {  
  if (validationInput.classList.contains("valid")) {
    validationInput.classList.remove("valid");
  } else if (validationInput.classList.contains("invalid")) {
    validationInput.classList.remove("invalid");
  }
});
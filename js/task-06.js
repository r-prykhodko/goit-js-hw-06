const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
    const expectedLength = parseInt(validationInput.getAttribute("data-length"));
    const enteredText = validationInput.value;
    const isValid = enteredText.length === expectedLength;

    if (isValid) {
        validationInput.classList.remove("invalid");
        validationInput.classList.add("valid");
    } else {
        validationInput.classList.remove("valid");
        validationInput.classList.add("invalid");
    }
});
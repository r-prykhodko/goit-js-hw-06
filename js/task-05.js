const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");


nameInput.addEventListener("input", () => {

    const enteredName = nameInput.value;


    if (enteredName.trim() === "") {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = enteredName;
    }
});
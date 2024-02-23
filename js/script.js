let receiveInput = getElementById("input")

receiveInput.addEventListener("input", function(validateInput) {
    validateInput.preventDefault()
    validateInput.value = validateInput.value.toLowerCase()
    validateInput.value = validateInput.value.replace(/[a-z, A-Z, @, ., 0-9]/g, "")

    if()
};
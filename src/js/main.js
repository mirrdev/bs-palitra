const submitCheck = document.querySelector("#defaultCheck1");
const submitButton = document.querySelector("#submit");
submitCheck.addEventListener("change", ({ target }) => {
  submitButton.disabled = target.checked;
});

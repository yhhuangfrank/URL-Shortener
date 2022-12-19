const form = document.querySelector("#form");
if (form) {
  form.addEventListener("submit", function onFormSubmitted(e) {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.classList.add("was-validated");
  });
}

function checkFormInput(URL) {
  const isValid = /http\:\/\/|https\:\/\//.test(URL);
  let errorMessage = ``;
  if (!isValid) {
    errorMessage += `<code>
      Your URL is not valid !
    </code>`;
  }
  return errorMessage;
}

//- exports function
module.exports = checkFormInput;

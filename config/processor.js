//- exports functions
module.exports = {
  checkFormInput(url) {
    const isValid = /http\:\/\/|https\:\/\//.test(url);
    let errorMessage = ``;
    if (!isValid) {
      errorMessage += `<code>
      Your URL is not valid !
    </code>`;
    }
    return errorMessage;
  },
  urlShortener() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const urlBox = [];
    urlBox.push(...letters);
    urlBox.push(...numbers);
    let result = "";
    //- 建立5位英數字組合短網址
    for (let i = 0; i < 5; i += 1) {
      //- 隨機抽取一英數字
      const randomIndex = Math.floor(Math.random() * urlBox.length);
      result += urlBox[randomIndex];
    }
    return result;
  },
};
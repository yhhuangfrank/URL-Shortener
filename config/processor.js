//- exports functions
module.exports = {
  checkFormInput(url) {
    const isValid = /http\:\/\/|https\:\/\//.test(url);
    let invalidMessage = ``;
    if (!isValid) {
      invalidMessage += `<code>
      Your URL is not valid !
    </code>`;
    }
    return invalidMessage;
  },
  urlShortener() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const upperLetters = letters.toUpperCase();
    const numbers = "0123456789";
    const urlBox = [];
    urlBox.push(...letters);
    urlBox.push(...upperLetters);
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

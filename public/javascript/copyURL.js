const shorterURL = document.querySelector("#shorterURL");
const copyBtn = document.querySelector("#copyBtn");
if (copyBtn) {
  copyBtn.addEventListener("click", function onCopyBtnClicked(e) {
    navigator.clipboard.writeText(shorterURL.textContent).then(
      () => {
        //- if succsessfully copied
        alert("shoterURL copied !");
      },
      () => {
        //- fail to copy
        console.error("Fail to copy shoterURL");
      }
    );
  });
}

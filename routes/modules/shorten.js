const router = require("express").Router();
const URL = require("../../models/URL");
const { checkFormInput, urlShortener } = require("../../config/processor");

router.post("/", (req, res) => {
  const { originalURL } = req.body;
  //- check form input
  const invalidMessage = checkFormInput(originalURL);
  if (invalidMessage) {
    return res.render("index", { originalURL, invalidMessage });
  }
  //- check if originalURL exist in db
  return URL.find({ originalURL })
    .lean()
    .then((url) => {
      if (url.length) {
        //- if exist - get corresponding shorterURL
        const { shorterURL } = url[0];
        return res.render("index", { originalURL, shorterURL });
      }
    })
    .then(function checkDuplicate() {
      //- if not exist, chec if shortURL is duplicated
      const shorterURL = urlShortener();
      return URL.findOne({ shorterURL }).then((url) => {
        if (url) {
          return checkDuplicate(); //- re-generate
        } else {
          //- create shorter URL
          console.log("is new URL");
          return URL.create({
            shorterURL,
            originalURL,
          })
            .then(() => res.render("index", { originalURL, shorterURL }))
            .catch((err) => {
              console.log(err);
              return res.render("error", { error: err.message });
            });
        }
      });
    })
    .catch((err) => {
      console.log(err);
      return res.render("error", { error: err.message });
    });
});

//- redirect to certain page
router.get("/:shorterURL", (req, res) => {
  const { shorterURL } = req.params;
  return URL.find({ shorterURL })
    .lean()
    .then((url) => {
      if (!url.length) {
        return res.redirect("/home");
      }
      //- if find corresponding shoterURL
      return res.redirect(url[0].originalURL);
    })
    .catch((err) => {
      console.log(err);
      return res.render("error", { error: err.message });
    });
});

module.exports = router;

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
  let isSameURL = false;
  //- check if originalURL exist in db
  return URL.find({ originalURL })
    .lean()
    .then((url) => {
      if (url.length) {
        //- if exist - get corresponding shorterURL
        const { shorterURL } = url[0];
        isSameURL = true;
        return res.render("index", { originalURL, shorterURL });
      }
    })
    .then(function checkDuplicate() {
      //- if already render same shorterURL, don't need checkDuplicate 
      if (isSameURL) {
        return;
      }
      //- if not exist, check if shorterURL is duplicated
      const shorterURL = urlShortener();
      return URL.findOne({ shorterURL }).then((url) => {
        if (url) {
          return checkDuplicate(); //- re-generate
        } else {
          //- create shorter URL
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

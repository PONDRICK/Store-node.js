const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("Say Hi from store");
  res.send(
    '<body><form action ="/admin/add-product" method="POST"><input type="text" name ="title"><button type="submit">Add Product</button></form></body>'
  );

  router.use("/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
  });
});
router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});
module.exports = router;

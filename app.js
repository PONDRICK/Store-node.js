const http = require("http");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
  console.log("Say Hi from middleware");
  next();
});
app.use("/add-product", (req, res, next) => {
  console.log("Say Hi from store");
  res.send(
    '<body><form action ="/product" method="POST"><input type="text" name ="title"><button type="submit">Add Product</button></form></body>'
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

const server = http.createServer(app);

app.listen(3000);

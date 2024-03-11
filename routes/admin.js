const path = require("path");

const express = require("express");

const router = express.Router();
const adminData = require('./admin')

const rootDir = require("../util/path");

const products = []

router.get("/add-product", (req, res, next) => {
	const products = adminData.products
	res.render("add-product", {
		title: "Add Product (ejs)",
	});
});
// router.get("/add-product", (req, res, next) => {
// 	// res.sendFile(path.join(__dirname, "../views/add-product.html"));
// 	// res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
// 	res.sendFile(path.join(rootDir, "views", "add-product.html"));
// });

router.use("/add-product", (req, res, next) => {
	products.push({title: req.body.title});
	res.redirect("/");
});

exports.routes = router;
exports.products = products;
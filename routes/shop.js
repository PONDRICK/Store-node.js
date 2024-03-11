const path = require("path");

const express = require("express");

const router = express.Router();
const adminData = require('./admin')

const rootDir = require("../util/path");

router.get("/", (req, res, next) => {
	const products = adminData.products
	res.render("shop", {
		prods: products,
		title: "Shop(ejs)",
	});
});

// router.get("/", (req, res, next) => {
// 	// res.sendFile(path.join(__dirname, "../views/shop.html"));
// 	res.sendFile(path.join(rootDir, "views", "shop.html"));
// });

module.exports = router;
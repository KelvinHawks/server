const express = require("express");
const controlers = require("../productcontrolers/Products");
const router = express.Router();

router.post("/new/product", controlers.createProduct);

router.get("/products", controlers.getProducts);

module.exports = router;

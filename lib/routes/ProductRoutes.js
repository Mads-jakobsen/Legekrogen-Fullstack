const express = require('express')

const {
    createProduct,
    deleteProduct,
    getProductById,
    getProducts,
    importProducts,
    updateProduct,
} = require('../handlers/productHandler.js');

const router=express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/import", importProducts);
router.post("/:id", createProduct);
router.put("/:id", deleteProduct)

module.exports = router
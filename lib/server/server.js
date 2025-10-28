// require("dotenv").config();
require("dotenv").config({ path: ".env.local" });
const express = require('express');
const connectDB = require("../db/db.js");
const { errorHandler, notFound } = require("../middlewere/Error.js")
const productRoutes = require("../routes/productRoutes.js");


// forbind mongo

connectDB()

const app =express()


app.use(express.json());

// Routes
app.use("/api/products", productRoutes);


app.use(notFound)
app.use(errorHandler)

const PORT = 5000
app.listen(PORT, () => console.log(`Server kører på port ${PORT}`));

module.exports = app;

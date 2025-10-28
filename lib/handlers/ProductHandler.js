// import produkter fra json fil 

const products=require("../../data/products.json")


// import produkt modellen fra mongodb
const Product = require("../db/Product");

const getProducts = async(req, res) =>{


      const allProducts = await Product.find({});
    res.json(allProducts);

}

// henter på id

const getProductById = async (req,res)=> {
      const product = await Product.findById(req.params.id);
    if (product)
        res.json(product);

    else res.status(404).json({message:"ikke fundet"})

}

// POST importer produkter fra JSON-fil

const importProducts = async (req, res) => {

  // delter produkter der er der
    await Product.deleteMany(); 

     // Indsætter alle produkter fra JSON-filen
    const created = await Product.insertMany(products);
    res.status(201).json(created);
  
  }


  // opret et nyt produkt

  const createProduct = async (req,res ) => {

        const { name, price, description, image } = req.body;

          // Opretter nyt produkt baseret på request body

    const newProduct = new Product({ name, price, description, image });
    const saved =await newProduct.save()
    res.status(201).json(saved);
  
  
  }


// PUT opdater produkt

const updateProduct = async (req, res) => {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    if (updated)
        res.json(updated);
    else res.status(404).json({ message: "Produkt ikke fundet" });



  }


  // deleter produkt 

const deleteProduct = async (req, res) => {

  // produkt finder id 
    const product = await Product.findById(req.params.id);
    if (product) {

      // hvis produkt findes, slet det
        await product.remove();
        res.json({ message: "Produkt slettet" });
    }
    else res.status(404).json({message:"ikke fundet"});
}


// Eksporterer alle funktioner som modul (CommonJS)

module.exports = {
  getProducts,
  getProductById,
  importProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};






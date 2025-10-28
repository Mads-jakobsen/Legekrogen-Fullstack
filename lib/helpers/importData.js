// native node.js moduler

const fs = require('fs'); // fil system modultil at læse og skrive filer 
const path = require('path') //modul til håndtering  af filsystemer





/**
 * Læs JSON-fil og returner array af produkter
 * @param {string} filePath - relativ sti til JSON fil
 * @returns {Array} - array med produkter
*/


const readJSONFile = (filePath) => {

    try {
        const fullPath = path.resolve(filePath);
        const data = fs.readFileSync(fullPath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Fejl ved læsning af JSON-fil: ${error.message}`)
        return [];
    }

}

/**
 * Gem et array som JSON-fil (kan importeres til MongoDB Compass)
 * @param {Array} data - array med produkter
 * @param {string} fileName - realativ sti
 * 
 */


const exportToJSON = (data, fileName = 'exportedProducts.json') => {
        try {
          // konventer array til json string
        const jsonData = JSON.stringify(data, null, 2);
// skriv fil til disk
        fs.writeFileSync(path.resolve(fileName), jsonData, 'utf-8');
        console.log(`Data gemt som ${fileName}`);
    } catch (error){

    console.error(`Fejl ved eksport af JSON-fil: ${error.message}`);
    }
  
  
  }

  const importData =() =>{

    const products=readJSONFile('../../data/products.json') // læs fil fra data  mappe 
    exportToJSON(products, 'mongoImportProducts.json') // gem fil som fil klar til mongodb
  };

  module.exports ={ readJSONFile, exportToJSON, importData }
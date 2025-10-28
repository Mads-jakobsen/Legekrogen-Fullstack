const mongoose =require('mongoose')


// opretter async funktion til at forbinde på mongodb

const connectDB =async() =>{
       try {

          // Forsøger at forbinde til MongoDB med connection string
        const conn = await mongoose.connect(process.env.MONGO_URI);

        // Hvis forbindelsen lykkes, log besked med host navn
        console.log(`MongoDB Connected: ${conn.connection.host} `)
    } catch (error){

       // Hvis der sker en fejl, log fejlbesked og afslut programmet

       console.error(`MongoDB Fejl: ${error.message}`);

       // koden 1 betydder en fejltilstand exit stopprer uden at vente
        process.exit(1);
    }
}


// Eksporterer connectDB funktionen som module

module.exports = connectDB
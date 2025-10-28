// middleware til håndtering af 404 når ingen route

const notFound= (req,res)=>{


     // Opret en ny Error med information om den manglende route



  // http status 404

   const error = new Error(`Ikke fundet - ${req.originalUrl}`);
    res.status(404);
    next(error);


}


//Global error-handling middleware

const errorHandler = (err, req, res, next ) =>{

const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  // Hvis status er 200 (OK), ændres den til 500 (Server Error)
    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV ==="production" ? null:err.stack 
    })


}

module.exports = {
  notFound,
  errorHandler,
};
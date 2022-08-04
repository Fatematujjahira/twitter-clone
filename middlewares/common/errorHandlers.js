//dependencies
const createError = require('http-errors');


//not found handler
function notFounderHnadler(req,res,next) {
    // res.status(404).send('404', 'paage not found')
    next (createError (404, 'your reqquested page was not found'))

}


//error handler middleware
function errorHandler(err,req,res,next) {
    const error = process.env.NODE_ENV === "development"? err:{message: err.message};
    // res.locals.html = truez 

    if (res.headersSent) {
        next(error);
    } else {
      try {
        res.locals.error = error;
        res.status(error.status || 500);
        if (res.locals.html) {
            res.render('pages/error',{
                title: "error page",
             })
        }else{
            res.json(error)
        }

         
         
      } catch (error) {
           next(error)
      }
    }
}


module.exports = {
    notFounderHnadler,
    errorHandler
}
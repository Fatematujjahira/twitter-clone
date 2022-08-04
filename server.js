const express = require('express');
const path = require ('path')
const dotenv = require ('dotenv');
const { notFounderHnadler, errorHandler } = require('./middlewares/common/errorHandlers');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth/authRoute')


//app initialize 
const app = express()
dotenv.config()

//express  settings
app.set('view engine', 'pug');
app.set ('views', 'views')


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")));
app.use(cookieParser())

//routing
app.use(authRouter)



//not founder handler
app.use(notFounderHnadler)


//error handler middleware
app.use(errorHandler)


//listening port
app.listen(process.env.PORT || 3000, () => {
    console.log('server is running on port @3000');
})
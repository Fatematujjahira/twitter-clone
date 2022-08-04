//dependencies


//get login page
const getLogin = (req,res, next) => {
    try {
       res.render('pages/login') 
    } catch (error) {
        next()
    }
}


//get register page
const getRegister = (req,res, next) => {
    try {
       res.render('pages/register') 
    } catch (error) {
        next()
    }
}

module.exports = {
    getLogin,
    getRegister
}
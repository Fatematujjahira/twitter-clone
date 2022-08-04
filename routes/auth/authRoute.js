//dependencies
const {Router} = require ('express');
const dotenv = require ('dotenv');
const { getLogin, getRegister } = require('../../controllers/auth/authControllers');
const decorateHtmlResponse = require('../../middlewares/common/decorateHtmlResponse');
const router = Router ()


//config
dotenv.config()


//get login page
router.get('/login', 
    decorateHtmlResponse(`Login - ${process.env.APP_NAME}`), 
    getLogin
)


//get register router
router.get('/register',
    decorateHtmlResponse(`Register - ${process.env.APP_NAME}`), 
    getRegister
)

module.exports = router;
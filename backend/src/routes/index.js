const router = require('express').Router();
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const AuthController = require('../controllers/AuthController');
const RouteHelper = require('../utils/RouteHelper');
const userController = require('../controllers/userController');
const signupController = require('../controllers/signupController');
const LoginController = require('../controllers/loginController');
const SuperAdminController = require('../controllers/superAdminController');
const organizationController = require('../controllers/organizationController');
const AddressController = require('../controllers/addressController');
const ExperienceController = require('../controllers/ExperienceController');

// RouteHelper.resource(router, 'todos', ToDoController)
RouteHelper.resource(router, 'create-token', AuthController)
RouteHelper.resource(router, 'users', userController,AuthMiddleware.verify)
RouteHelper.resource(router, 'address', AddressController,AuthMiddleware.verify)
RouteHelper.resource(router, 'signup', signupController)
RouteHelper.resource(router, 'organization', organizationController)
RouteHelper.resource(router, 'experience', ExperienceController,AuthMiddleware.verify)
RouteHelper.resource(router, 'login', LoginController)
RouteHelper.resource(router, 'super-admin', SuperAdminController)

module.exports = router;
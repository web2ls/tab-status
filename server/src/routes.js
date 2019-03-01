const AuthController = require('./controllers/Authentication');
const AuthControllerPolicy = require('./policies/AuthenticationControllerPolicy');


module.exports = (server) => {
        server.post('/register', AuthControllerPolicy.register, AuthController.register);

        server.post('/login', AuthController.login);
}
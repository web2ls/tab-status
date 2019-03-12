const AuthController = require('./controllers/Authentication');
const AuthControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const SongsController = require('./controllers/SongsController');


module.exports = (server) => {
        server.post('/register', AuthControllerPolicy.register, AuthController.register);

        server.post('/login', AuthController.login);

        server.get('/songs', SongsController.allSongs);

        server.post('/song/new', SongsController.addSong);

        server.get('/song/:songId', SongsController.getSong);
}
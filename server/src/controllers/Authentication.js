const {db} = require('../models');
const User = db.User;
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser(user) {
        const ONE_WEEK = 60 * 60 * 24 * 7;
        return jwt.sign(user, config.authentication.jwtSecret, {
                expiresIn: ONE_WEEK
        })
}

module.exports = {
        async register(req, res) {
                try {
                        const user = await User.create(req.body);
                        res.status(200).send(user.toJSON());
                } catch(error) {
                        console.log(error);
                        res.status(400).send({error: 'This email is already in use'});
                }
                
        },

        async login(req, res) {
                console.log('Login controller is calling');
                try {
                        const {email, password} = req.body;
                        const user = await User.findOne({
                                where: {
                                        email: email
                                }
                        });

                        console.log('We are get User from the DB', user);

                        if (!user) {
                                res.status(403).send({error: 'Login information is incorrect'});
                                return;
                        }

                        console.log('Ready for check password');

                        const isPasswordValid = await user.comparePassword(password);

                        console.log('Checking password result is ', isPasswordValid);

                        if (!isPasswordValid) {
                                res.status(403).send({error: 'Password information is incorrect'});
                                return;
                        }

                        const userJson = user.toJSON();

                        res.status(200).send({
                                user: userJson,
                                token: jwtSignUser(userJson)
                        });
                } catch(error) {
                        console.log(error);
                        res.status(500).send({error: 'Error on getting user info'});
                }
                
        },
}
const {db} = require('../models');
const User = db.User;

module.exports = {
        async register(req, res) {
                try {
                        const user = await User.create(req.body);
                        res.status(200).send(user.toJSON());
                } catch(error) {
                        console.log(error);
                        res.status(400).send({error: 'This email is already in use'});
                }
                
        }
}
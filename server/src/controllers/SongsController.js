const {db} = require('../models');
const Song = db.Song;

module.exports = {
        async allSongs(req, res) {
                try {
                        const songs = await Song.findAll({
                                limit: 10
                        })
                        res.status(200).send(songs);
                } catch(error) {
                        res.status(500).send({error: 'Error on getting songs list'});
                }
        },

        async addSong(req, res) {
                try {
                        const song = await Song.create(req.body);
                        res.status(200).send(song);
                } catch(error) {
                        res.status(500).send({error: 'Error on added new song'});
                }
        },

        async getSong(req, res) {
                try {
                        console.log(req.params);
                        const song = await Song.findOne({
                                where: {
                                        id: req.params.songId
                                }
                        });
                        console.log('Finded song is: ', song);
                        res.status(200).send(song);
                } catch(error) {
                        res.status(500).send({error: 'Error on getting song'});
                }
        }
}

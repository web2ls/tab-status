const {db} = require('../models');
const Song = db.Song;

const songs = [
        {
                id: 1,
                title: 'Go1',
                author: 'test1'
        },
        {
                id: 2,
                title: 'Go2',
                author: 'test2'
        }
];

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
        }
}

module.exports = (Sequelize, sequelize) => {
       const Song = sequelize.define('song', {
               title: Sequelize.STRING,
               artist: Sequelize.STRING,
               genre: Sequelize.STRING,
               album: Sequelize.STRING,
               albumImageUrl: Sequelize.STRING,
               youtubeId: Sequelize.STRING,
               lyrics: Sequelize.TEXT,
               tab: Sequelize.TEXT,
       }
)

       return Song;
}
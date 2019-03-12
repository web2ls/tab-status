import Api from '@/services/Api';

export default {
    index() {
        return Api().get('songs');
    },

    addSong(newSong) {
        return Api().post('song/new', newSong);
    },

    getSong(songId) {
        return Api().get(`song/${songId}`);
    }
}
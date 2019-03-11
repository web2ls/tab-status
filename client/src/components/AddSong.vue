<template>
        <div>
                <panel title="Song Metadata" />
                <v-text-field
                        label="Title"
                        v-model="title"
                        required
                        :rules="[required]">
                </v-text-field>

                <v-text-field
                        label="Artist"
                        v-model="artist"
                        required
                        :rules="[required]">
                </v-text-field>

                <v-text-field
                        label="Genre"
                        v-model="genre"
                        required
                        :rules="[required]">
                </v-text-field>

                <v-text-field
                        label="Album"
                        v-model="album"
                        required
                        :rules="[required]">
                </v-text-field>

                <v-text-field
                        label="AlbumImageUrl"
                        v-model="albumImageUrl"
                        required
                        :rules="[required]">
                </v-text-field>

                <v-text-field
                        label="youtubeId"
                        v-model="youtubeId"
                        required
                        :rules="[required]">
                </v-text-field>

                <v-text-field
                        label="lyrics"
                        v-model="lyrics"
                        required
                        :rules="[required]">
                </v-text-field>

                <v-text-field
                        label="tab"
                        v-model="tab"
                        required
                        :rules="[required]">
                </v-text-field>

                <v-btn @click="addSong">Add song</v-btn>
        </div>
</template>

<script>
import Panel from '@/components/Panel';
import SongsService from '@/services/SongsService';

export default {
        data() {
                return {
                        title: null,
                        artist: null,
                        genre: null,
                        album: null,
                        albumImageUrl: null,
                        youtubeId: null,
                        lyrics: null,
                        tab: null,
                        required: (value) => !!value || 'Required'
                }
        },
        components: {
                Panel
        },
        methods: {
                async addSong() {
                        console.log('add new song');
                        const obj = {
                                title: this.title,
                                artist: this.artist,
                                genre: this.genre,
                                album: this.album,
                                albumImageUrl: this.albumImageUrl,
                                youtubeId: this.youtubeId,
                                lyrics: this.lyrics,
                                tab: this.tab
                        }
                        try {
                                await SongsService.addSong(obj);
                                this.$router.push({name: 'songs'});
                        } catch(error) {
                                console.log(error);
                        }
                }
        }
}
</script>


<style scoped>

</style>


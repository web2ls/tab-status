<template>
  <v-layout column>
    <v-flex xs6>
            <router-link to="/songs/add">Add new song</router-link>
            <panel name="default" title="Songs header" />
            <div v-for="song of songs" :key="song.id">
                <v-card @click="navigateToSong(song.id)">

                <v-card-title primary-title>
                <div>
                <div class="headline">{{song.title}}</div>
                </div>
                </v-card-title>

                <v-card-text>
                    <p>{{song.artist}}</p>
                    <p>{{song.album}}</p>
                </v-card-text>

        </v-card>
            </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel';
import SongsService from '@/services/SongsService';

export default {
        data() {
                return {
                        songs: null
                }
        },
        components: {
                Panel
        },
        async mounted() {
                try {
                        const response = await SongsService.index();
                        this.songs = response.data;
                        console.log(this.songs);
                } catch(error) {
                        console.log(error);
                }
                
        },
        methods: {
                navigateToSong(id) {
                        console.log(id);
                        this.$router.push({ name: 'song', params: { id: id } });
                }
        }
};
</script>

<style>
</style>

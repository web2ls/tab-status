<template>
        <div>
                <v-layout>
                        <v-flex xs6>
                                <panel title="Song Metadata" />
                                <div>{{song.title}}</div>
                                <div>{{song.album}}</div>
                                <div>{{song.artist}}</div>
                        </v-flex>
                        <v-flex xs6></v-flex>
                </v-layout>
        </div>
</template>

<script>
import SongsService from '@/services/SongsService';
import Panel from '@/components/Panel';

export default {
        data() {
                return {
                        song: {}
                }
        },
        async mounted() {
                const songId = this.$store.state.route.params.id;
                console.log(songId);
                try {
                        const response = await SongsService.getSong(songId);
                        this.song = response.data;
                        console.log(this.song);
                } catch(error) {
                        console.log(error);
                }
        },
        components: {
                Panel
        }
}
</script>

<style scoped>

</style>

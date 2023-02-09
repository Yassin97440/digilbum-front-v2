<template>
    <v-container>
        <AlbumListing :albums="albums" /> selectedAlbumPictures.pictures
        <v-carousel>
            <!-- <v-carousel-item v-for="(picture, i) in " :key="i">
                <v-img contain :src="picture.pathFile" height="500px"></v-img>
            </v-carousel-item> -->
        </v-carousel>
    </v-container>
</template>
<script>
import { mapState, mapActions } from "pinia";
export default {
    beforeMount() {
        // this.getAllAlbums();
        // this.$store.dispatch("getAllAlbums");
        // console.log("les albums", this.albums);
    },
    computed: {
        // ...mapState({
        //     albums: (state) => state.albums,
        //     selectedAlbumPictures: (state) => state.selectedAlbumPictures,
        // }),
    },
    data() {
        return {

        };
    },
    methods: {
        // ...mapActions(["getAllAlbums"]),

    },
};
</script>

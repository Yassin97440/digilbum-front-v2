import { defineStore } from 'pinia'

export const useAlbumStore = defineStore('albumStore', {
    state: () => ({
        image: {},
        albums: [],
        selectedAlbumPictures: [],
    }),
    getters: {
    },
    actions: {
        async postNewAlbums(data) {

        },
        async getAllAlbums() {
            const { data } = await useFetch(`http://159.89.0.150:8080/album/albumsWithPictures`);
            console.log("store.actions.getAllAlbums : ", data);
            // this.albums = data;
        },
        setSelectedAlbum(data) {
            this.selectedAlbumPictures = data;
        }

    },

})
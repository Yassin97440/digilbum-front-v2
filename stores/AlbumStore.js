import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlbumStore = defineStore('albumStore', {
    state: () => ({
        image: {},
        albums: [],
        selectedAlbumPictures: [],
    }),
    getters: {
        // getAllAlbums: (state) => state.albums,

    },
    actions: {
        async postNewAlbums(data) {

        },
        async getAllAlbums() {
            const { data } = await useFetch(`http://159.89.0.150:8080/album/albumsWithPictures`);
            console.log("store.actions.getAllAlbums : ", data._rawValue);
            // watchEffect(() => {
            //     console.log("watchEffect :", data)
            // })
            this.albums = data._rawValue;
        },
        setSelectedAlbum(data) {
            console.log("set selected album : ", {data})
            this.selectedAlbumPictures = data.pictures;
        }

    },

})
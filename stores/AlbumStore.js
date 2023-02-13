import { defineStore } from "pinia";
import { ref } from "vue";

export const useAlbumStore = defineStore("albumStore", {
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
      console.log(data.album);
      const newAlbumResponse = await $fetch("http://localhost:8080/album/new", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: data.album,
      });

      console.log("responseNewAlbum : ", newAlbumResponse);
      const formdata = new FormData();
      console.log("formdata created");
      data.pictures.forEach(async (pic) => {
        formdata.append("pictures", pic);
      });

      //   formdata.append("albumName", data.album.name);

      const newPicResponse = await $fetch(
        "http://localhost:8080/pictures/writeAndSavePictures",
        {
          headers: { "Content-Type": "multipart/form-data" },
          method: "POST",
          body: formdata,
        }
      );

      console.log("response new pic", newPicResponse);
    },
    async getAllAlbums() {
      const { data } = await useFetch(
        `http://159.89.0.150:8080/album/albumsWithPictures`
      );
      this.albums = data._rawValue;
    },
    setSelectedAlbum(data) {
      this.selectedAlbumPictures = data.pictures;
    },
  },
});

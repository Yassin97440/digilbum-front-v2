import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    user: {},
  }),
  getters: {},
  actions: {
    regester(data) {
      //data : firsname, lastname, email, password
      //encrypter password
      //call api register
      //stocker user data et jwt
    },
    login(data) {},
    logout(data) {},
  },
});

<template>
  <!-- <v-container>
    <v-row class="d-flex justify-center mb-15">
      <v-col cols="6" sm="6" md="6">
        <v-text-field v-model="firstName" label="Prénom" rounded outlined clearable></v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mb-12">
      <v-col cols="6" sm="6" md="6">
        <v-text-field v-model="lastName" label="Nom" rounded outlined clearable></v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mb-12">
      <v-col cols="6" sm="6" md="6">
        <v-text-field v-model="password" label="email" rounded outlined clearable></v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mb-12">
      <v-col cols="6" sm="6" md="6">
        <v-text-field v-model="email" label="Mots de passe" rounded outlined clearable></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn rounded color="primary" dark @click="test"> Enregister </v-btn>
      </v-col>
    </v-row>
  </v-container> -->
</template>
<style>

</style>
<script>
export default {
  data: () => ({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  }),
  methods: {
    // ...mapActions(["createNewUser"]),
    test() {
      // this.createNewUser("postNewAlbums", {
      //   firstName: this.firstName,
      //   lastName: this.lastName,
      //   password: this.password,
      //   email: this.email,
      // });
    },
  },
};
</script>

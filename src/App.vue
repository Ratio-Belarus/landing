<script setup>
import logo_icon from './assets/logo-icon.png'
</script>

<template>
  <v-app>
    <v-app-bar color="white" elevation="0" scroll-behavior="hide">
      <v-app-bar-title>
        <v-img :src="logo_icon" width="155"></v-img>
      </v-app-bar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon color="#DD0426">mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="#DD0426">mdi-instagram</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="#DD0426">mdi-email-outline</v-icon>
      </v-btn>
      <v-btn color="#DD0426" variant="flat" class="text-white text-capitalize font-weight-medium">{{
        $t('btn.join')
      }}</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped></style>

<template>
  <v-app>
    <RatioHeader :networks="networks" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import RatioHeader from './components/RatioHeader.vue'

const networks = {
  twitter: 'https://twitter.com',
  instagram: 'https://www.instagram.com',
  email: '#'
}
</script>

<style scoped></style>

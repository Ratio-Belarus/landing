<template>
  <v-app class="max-width-1100 mx-auto">
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
  mastodon: 'https://joinmastodon.org',
  email: '#'
}
</script>

<style scoped>
.max-width-1100 {
  max-width: 1100px;
}
</style>

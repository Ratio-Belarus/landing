<template>
  <v-app class="max-width-1100 mx-auto">
    <RatioHeader :networks="networks" :ratio-form-link="ratioFormLink" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { useStore } from 'vuex'
import RatioHeader from './components/RatioHeader.vue'

const store = useStore()

const networks = store.state.networks
const ratioFormLink = store.state.ratioFormLink
</script>

<style scoped>
.max-width-1100 {
  max-width: 1100px;
}
</style>

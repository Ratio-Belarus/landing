<template>
  <v-app class="max-width-1100 mx-auto mt-10 mb-25">
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

store.dispatch('setWidthClient', window.innerWidth)
</script>

<style scoped>
.max-width-1100 {
  max-width: 1100px;
}
</style>

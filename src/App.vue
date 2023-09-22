<template>
  <v-app
    class="max-width-1100 mx-auto mt-lg-10 mb-lg-25 mt-md-6 mb-md-15 mt-sm-3 mb-sm-8 mt-xs-3 mb-xs-4"
  >
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
const ratioFormLink = import.meta.env.VITE_FORM_ENDPOINT_URL

store.dispatch('setWidthClient', window.innerWidth)
</script>

<style scoped>
.max-width-1100 {
  max-width: 1100px;
}
</style>

<template>
  <v-app-bar color="white" elevation="0" scroll-behavior="hide" scroll-threshold="5" absolute>
    <v-app-bar-title>
      <div class="d-flex align-center font-weight-bold">
        <logo-icon :width="60" />
        <p class="text-28 text-product-red">Рацыя</p>
      </div>
    </v-app-bar-title>
    <v-spacer />
    <RatioSocialNetworksBar :networks="props.networks" colorIcon="#DD0426" />
    <v-btn
      color="#DD0426"
      variant="flat"
      size="large"
      :href="ratioFormLink"
      target="blank"
      class="text-white text-capitalize font-weight-medium ml-6"
      >{{ $t('btn.join') }}</v-btn
    >
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          variant="outlined"
          size="large"
          class="text-product-red text-uppercase font-weight-medium ml-6"
          v-bind="props"
          >{{ usedLang }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(language, index) in languages" :key="index">
          <v-list-item-title class="text-uppercase" @click="chooseLang">{{
            language
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import RatioSocialNetworksBar from '../components/RatioSocialNetworksBar.vue'

const props = defineProps({
  networks: Object,
  ratioFormLink: String
})

const languages = ['be', 'ru', 'en']

const store = useStore()

const usedLang = ref(store.state.language)

function chooseLang(e) {
  console.log(e.target.innerText.toLowerCase())
}
</script>

<style scoped></style>

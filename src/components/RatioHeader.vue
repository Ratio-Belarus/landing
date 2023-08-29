<template>
  <v-app-bar color="white" elevation="0" scroll-behavior="hide" scroll-threshold="5" absolute>
    <v-app-bar-title>
      <div class="d-flex align-center font-weight-bold">
        <logo-icon :width="60" />
        <p class="text-28 text-product-red">Рацыя</p>
      </div>
    </v-app-bar-title>
    <RatioSocialNetworksBar
      :networks="props.networks"
      colorIcon="#DD0426"
      :hidden="widthClient <= 580"
    />
    <v-btn
      color="#DD0426"
      variant="flat"
      size="large"
      :href="ratioFormLink"
      target="blank"
      class="text-white text-capitalize font-weight-medium ml-lg-12 ml-md-6 ml-sm-2 btn-large"
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
          <v-list-item-title class="text-uppercase text-center ml-sm-2" @click="chooseLang">{{
            language
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import RatioSocialNetworksBar from '../components/RatioSocialNetworksBar.vue'

const props = defineProps({
  networks: Object,
  ratioFormLink: String
})

const languages = ['be', 'ru', 'en']
const widthClient = ref(window.innerWidth)

window.addEventListener('resize', resizeHandler)

const i18n = useI18n()

const usedLang = ref(i18n.locale)

function chooseLang(e) {
  let newLang = e.target.innerText.toLowerCase()
  usedLang.value = newLang
  i18n.locale = newLang
  localStorage.lang = newLang
}

function resizeHandler() {
  widthClient.value = window.innerWidth
}
</script>

<style scoped></style>

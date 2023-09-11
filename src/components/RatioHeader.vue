<template>
  <v-app-bar
    color="white"
    elevation="0"
    scroll-behavior="hide"
    scroll-threshold="5"
    absolute
    class="ratio-header"
  >
    <v-app-bar-title>
      <div class="d-flex align-center font-weight-bold">
        <logo-icon :width="60" />
        <p class="custom-h3 text-product-red">Рацыя</p>
      </div>
    </v-app-bar-title>
    <RatioSocialNetworksBar
      :networks="props.networks"
      colorIcon="#DD0426"
      :hidden="widthClient <= 580"
    />
    <RatioBtn
      v-if="widthClient > 450"
      :text="$t('btn.join')"
      class="ml-lg-12 ml-md-4 ml-sm-2 ml-xs-2"
    />
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          variant="outlined"
          :size="widthClient <= 960 ? 'large' : 'x-large'"
          class="text-product-red text-uppercase font-weight-medium ml-lg-12 ml-md-4 ml-sm-2 ml-xs-2 btn-lang"
          v-bind="props"
          >{{ usedLang }}
        </v-btn>
      </template>

      <v-list>
        <template v-for="(language, index) in languages" :key="index">
          <v-list-item v-if="language != usedLang">
            <v-btn elevation="0" @click="chooseLang">{{ language }}</v-btn>
          </v-list-item>
        </template>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import RatioSocialNetworksBar from '../components/RatioSocialNetworksBar.vue'
import RatioBtn from './RatioBtn.vue'

const props = defineProps({
  networks: Object,
  ratioFormLink: String
})

const languages = ['be', 'ru', 'en']
const widthClient = computed(() => store.state.widthClient)

window.addEventListener('resize', resizeHandler)

const i18n = useI18n()
const store = useStore()

const usedLang = ref(i18n.locale)

function chooseLang(e) {
  let newLang = e.target.innerText.toLowerCase()
  usedLang.value = newLang
  i18n.locale = newLang
  localStorage.lang = newLang
}

function resizeHandler() {
  store.dispatch('setWidthClient', window.innerWidth)
}
</script>

<style scoped>
.ratio-header .v-toolbar__content > .v-btn:last-child {
  margin-inline-end: 16px;
}
</style>

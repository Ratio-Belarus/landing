<template>
  <v-app-bar color="white" elevation="0" scroll-behavior="hide" class="mx-">
    <v-app-bar-title>
      <div class="d-flex align-center font-weight-bold">
        <logo-icon :width="60" />
        <p class="text-28 text-product-red">Рацыя</p>
      </div>
    </v-app-bar-title>
    <v-spacer />
    <RatioSocialNetworksBar :networks="props.networks" colorIcon="#DD0426" />
    <v-btn color="#DD0426" variant="flat" class="text-white text-capitalize font-weight-medium">{{
      $t('btn.join')
    }}</v-btn>
  </v-app-bar>
</template>

<script setup>
import RatioSocialNetworksBar from '../components/RatioSocialNetworksBar.vue'

const props = defineProps({
  networks: Object
})
</script>

<style scoped></style>

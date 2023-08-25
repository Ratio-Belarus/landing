<template>
  <v-btn
    icon
    v-for="(elem, key) in props.networks"
    :key="key"
    :href="elem"
    elevation="0"
    :color="color"
  >
    <v-icon :color="colorIcon" v-if="key == 'email'">mdi-{{ key }}-outline</v-icon>
    <telegram-icon :color="colorIcon" v-else-if="key == 'telegram'" />
    <v-icon :color="colorIcon" v-else>mdi-{{ key }}</v-icon>
  </v-btn>
</template>

<script setup>
const props = defineProps({
  networks: Object,
  color: [Number, String],
  colorIcon: [Number, String]
})
</script>

<style></style>

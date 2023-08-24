<template>
  <v-btn icon v-for="(elem, key) in props.networks" :key="key" :href="elem">
    <v-icon color="#DD0426" v-if="key == 'email'">mdi-{{ key }}-outline</v-icon>
    <telegram-icon color="#DD0426" v-else-if="key == 'telegram'" />
    <v-icon color="#DD0426" v-else>mdi-{{ key }}</v-icon>
  </v-btn>
</template>

<script setup>
const props = defineProps({
  networks: Object
})
</script>

<style></style>

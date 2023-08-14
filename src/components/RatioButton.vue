<template>
  <v-btn variant="flat" color="#DD0426" class="text-white">{{ props.btnMessage }}</v-btn>
</template>

<script setup>
const props = defineProps({
  btnMessage: String
})
</script>

<style></style>

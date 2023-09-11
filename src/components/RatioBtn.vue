<template>
  <v-btn
    color="#DD0426"
    variant="flat"
    :size="
      widthClient <= 450 ? 'small' : widthClient > 450 && widthClient <= 960 ? 'large' : 'x-large'
    "
    :href="ratioFormLink"
    target="blank"
    class="text-white text-capitalize font-weight-medium btn-large text-base letter-spacing-normal custom-btn"
    >{{ props.text }}</v-btn
  >
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  text: String
})

const store = useStore()

const ratioFormLink = store.state.ratioFormLink

const widthClient = computed(() => store.state.widthClient)
</script>

<style>
.letter-spacing-normal {
  letter-spacing: normal !important;
}

.custom-btn:hover {
  filter: saturate(1.3);
  transition: all 0.3s ease-in-out;
}
</style>

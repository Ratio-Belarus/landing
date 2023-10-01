<template>
  <v-btn
    color="#DD0426"
    variant="flat"
    :size="widthClient <= 960 ? 'large' : 'x-large'"
    :href="props.href"
    target="blank"
    class="text-white text-capitalize font-weight-medium btn-large text-base letter-spacing-normal custom-btn"
    @click="emits('click')"
    >{{ props.text }}</v-btn
  >
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  text: String,
  href: String
})

const emits = defineEmits(['click'])

const store = useStore()

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

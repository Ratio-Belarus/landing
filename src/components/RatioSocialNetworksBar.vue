<template>
  <template v-if="!hidden">
    <v-btn
      icon
      v-for="(elem, key) in props.networks"
      :key="key"
      :href="key == 'email' ? 'mailto:' + elem : elem"
      target="blank"
      elevation="0"
      :color="color"
    >
      <v-icon :color="colorIcon" v-if="key == 'email'" class="icon">mdi-{{ key }}-outline</v-icon>
      <telegram-icon :color="colorIcon" v-else-if="key == 'telegram'" class="icon" />
      <v-icon :color="colorIcon" v-else class="icon">mdi-{{ key }}</v-icon>
    </v-btn>
  </template>
  <template v-else>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-dots-vertical" variant="text" :color="colorIcon" v-bind="props"> </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(elem, key) in props.networks" :key="key">
          <v-btn
            icon
            :href="key == 'email' ? 'mailto:' + elem : elem"
            target="blank"
            elevation="0"
            :color="color"
          >
            <v-icon :color="colorIcon" v-if="key == 'email'" class="icon">
              mdi-{{ key }}-outline
            </v-icon>
            <telegram-icon :color="colorIcon" v-else-if="key == 'telegram'" class="icon" />
            <v-icon :color="colorIcon" v-else class="icon">mdi-{{ key }}</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </template>
</template>

<script setup>
const props = defineProps({
  networks: Object,
  color: [Number, String],
  colorIcon: [Number, String],
  hidden: Boolean
})
</script>

<style></style>

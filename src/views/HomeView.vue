<script setup>
import mobiles_img from '../assets/phones.png'
import { useStore } from 'vuex'

const store = useStore()

const functionCards = store.state.functionCards

const devCards = store.state.devCards
</script>

<template>
  <v-container class="mx-auto w-100">
    <v-row>
      <v-col cols="6">
        <v-sheet class="bg-img-1">
          <h1 class="text-h2 font-weight-bold">
            {{ $t('title.intro.first') }}
            <span class="text-product-red">{{ $t('title.intro.second') }} </span>
            {{ $t('title.intro.third') }}
          </h1>
          <p class="text-medium-emphasis">
            {{ $t('description.intro') }}
          </p>
          <v-btn
            color="#DD0426"
            variant="flat"
            class="text-white text-capitalize font-weight-medium"
            >{{ $t('btn.join') }}</v-btn
          >
        </v-sheet>
      </v-col>
      <v-col cols="6">
        <v-sheet class="bg-img-2">
          <v-img :src="mobiles_img"></v-img>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h3 class="text-h4 font-weight-bold">{{ $t('title.func') }}</h3>
      </v-col>
      <v-col v-for="card in functionCards" :cols="6" class="pa-0">
        <div class="d-flex align-center">
          <component :is="card.type + '-icon'" :width="54" class="flex-0-0" />
          <v-card elevation="0" :text="card.text">
            <template v-slot:title>
              <div class="d-flex align-center font-weight-bold">
                <p class="text-28">{{ card.title }}</p>
              </div>
            </template>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h3 class="text-h4 font-weight-bold">{{ $t('title.team') }}</h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.text-product-red {
  color: #dd0426;
}
.bg-img-1 {
  background-image: url('/src/assets/shadows-1.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.bg-img-2 {
  background-image: url('/src/assets/shadows-2.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%;
}
</style>

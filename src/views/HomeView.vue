<script setup>
import mobiles_img from '../assets/phones.png'
import { useStore } from 'vuex'
import RatioSocialNetworksBar from '../components/RatioSocialNetworksBar.vue'
import RatioBtn from '../components/RatioBtn.vue'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDisplay } from 'vuetify'

const store = useStore()

const { t } = useI18n()
const { sm, xs } = useDisplay()

const cols = computed(() => {
  return sm.value || xs.value ? 12 : 6
})

const functionCards = computed(() => [
  {
    title: t('subtitle.func.rules'),
    text: t('description.rules'),
    type: 'rules'
  },
  {
    title: t('subtitle.func.practice'),
    text: t('description.practice'),
    type: 'practice'
  },
  {
    title: t('subtitle.func.prize'),
    text: t('description.prize'),
    type: 'prize'
  },
  {
    title: t('subtitle.func.competition'),
    text: t('description.competition'),
    type: 'competition'
  }
])
const devCards = store.state.devCards
const formFields = ref(store.state.formFields)

function submit() {
  store.dispatch('setFormFields', formFields.value)
}
</script>

<template>
  <v-container class="px-4 mx-auto">
    <v-row>
      <v-sheet
        class="custom-container pa-0 px-4 pt-lg-32 pt-md-16 pb-md-21 pt-sm-8 pb-sm-10 pt-xs-4 pb-xs-3"
      >
        <v-sheet class="elem-1 bg-img-1 h-100 d-flex justify-center align-center">
          <h1 class="custom-h1 font-weight-bold product-font mb-6">
            {{ $t('title.intro.first') }}
            <span class="text-product-red">{{ $t('title.intro.second') }} </span>
            {{ $t('title.intro.third') }}
          </h1>
        </v-sheet>
        <v-sheet class="elem-3 bg-img-2">
          <v-img :src="mobiles_img"></v-img>
        </v-sheet>
        <v-sheet class="elem-2">
          <p class="text-medium-emphasis mb-5 text-base">
            {{ $t('description.intro') }}
          </p>
          <RatioBtn :text="$t('btn.join')" />
        </v-sheet>
      </v-sheet>
    </v-row>
    <v-row>
      <v-container class="pb-25">
        <v-row>
          <v-col cols="12">
            <h3 class="font-weight-bold product-font pb-8 custom-h2">
              {{ $t('title.func') }}
            </h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="card in functionCards" :cols="cols" class="pa-0 px-4">
            <div class="d-flex align-center text-base">
              <component :is="card.type + '-icon'" :width="cols == 12 ? 34 : 54" class="flex-0-0" />
              <v-card elevation="0" :text="card.text">
                <template v-slot:title>
                  <div class="d-flex align-center font-weight-bold custom-h3">
                    <p>{{ card.title }}</p>
                  </div>
                </template>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <v-row>
      <v-container class="pb-25">
        <v-row>
          <v-col cols="12">
            <h3 class="font-weight-bold product-font pb-xs-2 pb-sm-4 pb-md-6 pb-lg-8 custom-h2">
              {{ $t('title.team') }}
            </h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="(card, i) in devCards" :key="i" :cols="cols" class="col-dev">
            <v-card elevation="0" class="fill-height">
              <template v-slot:prepend>
                <v-avatar
                  :size="cols == 12 ? 80 : 112"
                  :image="card.img || 'avatar.svg'"
                ></v-avatar>
              </template>
              <template v-slot:title>
                <p class="text-product-red font-italic font-weight-bold text-wrap custom-h3 mb-1">
                  {{ card.name }}
                </p>
              </template>
              <template v-slot:subtitle>
                <p class="text-product-red font-weight-medium text-wrap text-base">
                  {{ card.position }}
                </p>
              </template>
              <template v-slot:text>
                <RatioSocialNetworksBar
                  v-if="card.networks"
                  :networks="card.networks"
                  color="transparent"
                />
              </template>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="d-flex justify-center align-center">
            <RatioBtn :text="$t('btn.join')" />
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h3 class="font-weight-bold product-font pb-8 custom-h2">{{ $t('title.connect') }}</h3>
        <v-form
          validate-on="submit"
          @submit.prevent="submit"
          class="mt-5 d-flex flex-column align-center justify-center"
        >
          <v-text-field
            :label="$t('placeholder.communication')"
            variant="outlined"
            v-model="formFields.contact"
            class="w-100"
          ></v-text-field>
          <v-textarea
            clearable
            auto-grow
            variant="outlined"
            rows="4"
            row-height="30"
            :label="$t('placeholder.connect')"
            shaped
            v-model="formFields.message"
            class="w-100"
          ></v-textarea>
          <RatioBtn :text="$t('btn.send')" />
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.bg-img-1 {
  background-image: url('/src/assets/shadows-1.svg');
  background-size: contain;
  background-repeat: no-repeat;
}

.bg-img-2 {
  background-image: url('/src/assets/shadows-2.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70%;
}
</style>

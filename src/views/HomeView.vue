<script setup>
import mobiles_img from '../assets/phones.png'
import { useStore } from 'vuex'
import RatioSocialNetworksBar from '../components/RatioSocialNetworksBar.vue'
import RatioBtn from '../components/RatioBtn.vue'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDisplay } from 'vuetify'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, maxLength } from '../utils/i18n-validators'

const store = useStore()
const i18n = useI18n()

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
const devCards = [
  {
    img: 'https://pbs.twimg.com/profile_images/1556551928678649857/fJdwL7ML_400x400.jpg',
    name: 'Plistačka',
    position: 'Распрацоўшчыца (Python, React Native), менеджар праекта, дызайнер',
    networks: {
      twitter: 'https://twitter.com/plistacka',
      github: 'https://github.com/Plistachka',
      mastodon: 'https://vkl.world/@plistachka',
      patreon: 'https://www.patreon.com/plistachka'
    }
  },
  {
    img: '',
    name: 'deadbeathd07',
    position: 'Распрацоўшчыца (Vue, Laravel)',
    networks: {
      github: 'https://github.com/deadbeathd07'
    }
  }
]
const ratioFormLink = import.meta.env.VITE_FORM_ENDPOINT_URL

const formFields = ref(store.state.formFields)
const errorMessage = computed(() => store.state.errorMessage)

const rules = {
  contact: {
    required,
    minLength: minLength(3),
    maxLength: maxLength(256)
  },
  message: {
    required,
    maxLength: maxLength(2048)
  }
}

const v$ = useVuelidate(rules, formFields)

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
        <v-sheet class="elem-1 bg-img-1 d-flex justify-center align-center">
          <h1 class="custom-h1 font-weight-bold product-font mb-6">
            {{ $t('title.intro.first') }}
            <span class="text-product-red">{{ $t('title.intro.second') }} </span>
            {{ $t('title.intro.third') }}
          </h1>
        </v-sheet>
        <v-sheet v-if="!xs" class="elem-3 bg-img-2">
          <v-img :src="mobiles_img"></v-img>
        </v-sheet>
        <v-sheet class="elem-2">
          <p class="text-medium-emphasis mb-5 text-base">
            {{ $t('description.intro') }}
          </p>
          <RatioBtn :text="$t('btn.join')" :href="ratioFormLink" />
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
            <div class="d-flex text-base">
              <component :is="card.type + '-icon'" :width="cols == 12 ? 34 : 54" class="flex-0-0" />
              <v-card elevation="0" :text="card.text" class="custom-card">
                <template v-slot:title>
                  <div class="d-flex align-start justify-start font-weight-bold custom-h3">
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
            <div
              class="d-flex justify-center align-start text-base px-2 py-2 px-md-5 px-lg-9 py-lg-4 dev-card h-100"
            >
              <v-avatar
                :size="cols == 12 ? 80 : 112"
                :image="card.img || 'avatar.svg'"
                class="mt-3"
              ></v-avatar>
              <v-card elevation="0" :text="card.text" color="transparent">
                <template v-slot:title>
                  <p class="text-product-red font-italic font-weight-bold text-wrap custom-h3 mb-4">
                    {{ card.name }}
                  </p>
                </template>
                <template v-slot:subtitle>
                  <p class="text-product-red font-weight-medium text-wrap text-base opacity-1 pb-0">
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
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="d-flex justify-center align-center">
            <RatioBtn :text="$t('btn.join')" :href="ratioFormLink" />
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h3 class="font-weight-bold product-font pb-8 custom-h2">{{ $t('title.connect') }}</h3>
        <v-form
          @submit.prevent="submit"
          class="mt-5 d-flex flex-column align-center justify-center"
        >
          <v-text-field
            clearable
            v-model="formFields.contact"
            :error-messages="v$.contact.$errors.map((e) => e.$message)"
            @input="v$.contact.$touch"
            :label="$t('placeholder.communication')"
            :counter="256"
            required
            variant="outlined"
            class="w-100 mb-3"
          ></v-text-field>
          <v-textarea
            clearable
            auto-grow
            variant="outlined"
            required
            rows="4"
            row-height="30"
            :error-messages="v$.message.$errors.map((e) => e.$message)"
            @input="v$.message.$touch"
            :label="$t('placeholder.connect')"
            :counter="2048"
            shaped
            v-model="formFields.message"
            class="w-100 mb-3"
          ></v-textarea>
          <RatioBtn :text="$t('btn.send')" @click="submit" />
        </v-form>
        <v-overlay
          transition="fade-transition"
          :model-value="Boolean(errorMessage)"
          class="align-center justify-center"
        >
          <v-alert v-if="errorMessage" :text="errorMessage.text" :type="errorMessage.type" />
        </v-overlay>
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

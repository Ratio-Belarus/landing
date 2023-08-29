<script setup>
import mobiles_img from '../assets/phones.png'
import { useStore } from 'vuex'
import RatioSocialNetworksBar from '../components/RatioSocialNetworksBar.vue'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const store = useStore()

const { t } = useI18n()

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
const ratioFormLink = store.state.ratioFormLink

const formFields = ref(store.state.formFields)

function submit() {
  store.dispatch('setFormFields', formFields.value)
}
</script>

<template>
  <v-container class="pa-0 mx-auto px-5">
    <v-row>
      <v-col cols="6">
        <v-sheet class="bg-img-1">
          <h1 class="text-h2 font-weight-bold">
            {{ $t('title.intro.first') }}
            <span class="text-product-red">{{ $t('title.intro.second') }} </span>
            {{ $t('title.intro.third') }}
          </h1>
          <p class="text-medium-emphasis mb-5">
            {{ $t('description.intro') }}
          </p>
          <v-btn
            color="#DD0426"
            variant="flat"
            size="large"
            :href="ratioFormLink"
            target="blank"
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
      <v-container class="pa-0">
        <v-row>
          <v-col cols="12">
            <h3 class="text-h4 font-weight-bold">{{ $t('title.func') }}</h3>
          </v-col>
        </v-row>
        <v-row>
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
      </v-container>
    </v-row>
    <v-row>
      <v-container class="pa-0">
        <v-row>
          <v-col cols="12">
            <h3 class="text-h4 font-weight-bold">{{ $t('title.team') }}</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="(card, i) in devCards" :key="i" :cols="6" class="col-dev">
            <v-card elevation="0" class="fill-height">
              <template v-slot:prepend>
                <v-avatar size="112" :image="card.img"></v-avatar>
              </template>
              <template v-slot:title>
                <p class="text-product-red text-28 font-italic font-weight-bold text-wrap">
                  {{ card.name }}
                </p>
              </template>
              <template v-slot:subtitle>
                <p class="text-product-red font-weight-medium text-wrap">{{ card.position }}</p>
              </template>
              <template v-slot:text>
                <!-- Сommented out temporarily as there is no data yet-->
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
            <v-btn
              color="#DD0426"
              variant="flat"
              size="large"
              :href="ratioFormLink"
              target="blank"
              class="text-white text-capitalize font-weight-medium"
              >{{ $t('btn.join') }}</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <v-row>
      <v-col cols="12" class="mb-15">
        <h3 class="text-h4 font-weight-bold">{{ $t('title.connect') }}</h3>
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
          <v-btn
            color="#DD0426"
            type="submit"
            variant="flat"
            size="large"
            class="text-white text-capitalize font-weight-medium"
            >{{ $t('btn.send') }}</v-btn
          >
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.bg-img-1 {
  background-image: url('/src/assets/shadows-1.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.bg-img-2 {
  background-image: url('/src/assets/shadows-2.svg');
  background-position: top;
  background-repeat: no-repeat;
  background-size: 70%;
}

.col-dev:nth-child(4n + 1) > .v-card,
.col-dev:nth-child(4n) > .v-card {
  background-color: #dd0426;
}

.col-dev .icon {
  color: #dd0426;
}

.col-dev:nth-child(4n + 1) > .v-card .icon,
.col-dev:nth-child(4n) > .v-card .icon {
  color: white;
}

.col-dev:nth-child(4n + 1) > .v-card .text-product-red,
.col-dev:nth-child(4n) > .v-card .text-product-red {
  color: white;
}
</style>

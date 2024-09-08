<script setup lang="ts">
import { heros } from "~/core/AssetsManager";

const {t}= useI18n();
const cards = [
  {
    img: heros.hero_4,
    text: t('objectives.obective_1'),
  },
  {
    img: heros.hero_3,
    text: t('objectives.obective_2'),
  },
  {
    img: heros.hero_5,
    text: t('objectives.obective_3'),
  },
];
</script>

<template>
  <div class="objectives" id="objectives">
    <div class="container">
      <div class="content">
        <h5 class="section-title">{{ $t('objectives.title') }}</h5>
        <div class="row">
          <div
            class="col-md-4"
            v-for="(card, index) in cards"
            :key="index"
          > 
          <div class="ob-card">
              <img :src="card.img" class="image" />
              <p class="text">{{ card.text }}</p>

          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.objectives {
  width: 100%;
  background-color: #fff;
  padding: 85px 0;
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    .ob-card {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      box-shadow: 3px 3px 5px #aaaaaa50;
      padding: 1em;
      gap: 10px;
      border-radius: 10px;
      margin-bottom: 10px;

      .image {
        width: 100%;
        border-radius: 10px;
        margin-bottom: 20px;
      }
      .text {
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
}
</style>

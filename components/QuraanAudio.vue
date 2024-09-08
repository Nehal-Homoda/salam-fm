<template>
  <div class="quraan-audio">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mb-5">
          <div class="se-audio">
            <h5>{{$t('quran_title')}}</h5>
            <audio controls >
                <source src="http://stream.zeno.fm/znuyzw9avuhvv">
            </audio>
          </div>
        </div>
        <div class="col-md-6">
            <div class="se-image">
                <img :src="heros.hero_2" class="img" />
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { heros } from "~/core/AssetsManager";
</script>

<style scoped lang="scss">
.quraan-audio {
  width: 100%;
  background-color: $primary;
  padding: 40px 0;
  .se-audio {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;

    h5{
        color: #fff;
        font-size: 28px;
        font-weight: bold;
    }
    audio{
      width: 100%;
      max-width: 350px;
        height: 60px;
    }
  }
  .se-image{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

      .img {
        width: 50%;
      }
  }
}



</style>

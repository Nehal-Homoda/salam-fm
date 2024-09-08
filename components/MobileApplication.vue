<template>
  <div class="mobile-app" id="mobile-app">
    <div class="container">
      <div class="content">
        <h5 class="section-title"> {{$t('mobile-app.title') }}</h5>
        <div class="row">
          <div class="col-md-6">
            <div class="se-img">
              <img :src="heros.hero_1" class="img" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="se-text">
              <h5 class="text-1">{{$t('mobile-app.subtitle-1') }}</h5>
              <h6 class="text-2">
               {{ $t('mobile-app.subtitle-2') }}
              </h6>
            </div>
            <div class="se-btns">
              <a href="https://apps.apple.com/us/app/salam-fm-holy-quran/id1548687151" class="btn-1"></a>
              <a href="https://play.google.com/store/apps/details?id=com.radio.salamfm&hl=ar" class="btn-2"></a>
            </div>
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
.mobile-app {
  width: 100%;
  background-color: $background;
  padding: 50px 0;
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    .se-img {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .img {
        width: 60%;
      }
    }
    .se-text {
      padding-top: 50px;
     
      .text-1 {
        text-align: center;
        font-size: 1.6rem;
        margin-bottom: 28px;
      }
      .text-2 {
        text-align: center;
        font-size: 1.4rem;
        color: $primary;
        margin-bottom: 110px;
        line-height: 30px;
      }
    }
    .se-btns {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      margin-bottom: 40px;
      .btn-1 {
        width: 33%;
        height: 60px;
        background: url("@/assets/img/brand/app-store.png") no-repeat center;
        background-size: contain;
        border: none;
        outline: none;
      }
      .btn-2 {
        width: 33%;
        height: 60px;
        background: url("@/assets/img/brand/google-play.png") no-repeat center;
        background-size: contain;
        border: none;
        outline: none;
      }
    }
  }
}
</style>

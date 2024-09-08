<template>
  <div class="about-us" id="about-us">
    <div class="container">
      <div class="content">
        <h5 class="section-title">{{ $t('about-us.title') }} </h5>
        <p class="description">
          {{ $t('about-us.description') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.about-us {
  width: 100%;
  background-color: $background;
  padding: 50px 0;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    .description {
      background-color: #fff;
      border-radius: 10px;
      padding: 2rem 1.5rem;
      font-size: 1.1rem;
      font-weight: 500;
      color: $text-default;
      line-height: 2;
      text-align: justify;

      // @include media-breakpoint-up(xs) {
      //   font-size: 0.7rem;
      //   line-height: 20px;
      // }
      // @include media-breakpoint-up(sm) {
      //   font-size: 1.5rem;
      //   // line-height: 25px;
      // }
      @include media-breakpoint-up(md) {
        font-size: 1.2rem;
        text-align: center;
      }

      @include media-breakpoint-up(lg) {
        font-size: 1.3rem;
        text-align: center;

      }
    }
  }
}
</style>

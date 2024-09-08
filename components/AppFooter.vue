<script setup lang="ts">
import { brand } from "~/core/AssetsManager";
import RoutsManager from "~/core/RoutsManager";

const localePath = useLocalePath();
</script>

<template>
  <footer class="app-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mb-5">
          <div class="brand">
            <img :src="brand.logo" alt="" class="brand-logo-img" />
            <span class="name">{{ $t("brand-name") }}</span>
          </div>
        </div>
        <div class="col-md-6 mb-5">
          <div class="d-flex">
            <div class="w-50 app-footer-links">
              <p class="title">{{ $t("company") }}</p>
              <NuxtLink href="#home" class="app-footer-link">{{
                $t("home")
              }}</NuxtLink>
              <NuxtLink href="#about-us" class="app-footer-link">{{
                $t("about")
              }}</NuxtLink>
              <NuxtLink href="#objectives" class="app-footer-link">{{
                $t("our-objectives")
              }}</NuxtLink>
            </div>
            <div class="w-50 app-footer-links">
              <p class="title">{{ $t("fast-links") }}</p>
              <NuxtLink :to="localePath(RoutsManager.policy)" class="app-footer-link">{{
                $t("privacy policy")
              }}</NuxtLink>
              <NuxtLink href="#mobile-app" class="app-footer-link">{{
                $t("contact-us")
              }}</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="divider"></div>

    <div class="copy-write py-2 font-size-small">
      Salam FM All Right Reserved, 2024
    </div>
  </footer>
</template>

<style scoped lang="scss">
.app-footer {
  // min-height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $background;
  padding: 50px 0 0;

  .divider {
    width: 100%;
    height: 1.5px;
    background-color: $primary;
  }

  .copy-write {
    font-weight: 600;
  }
}

.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  font-size: 1.25rem;
  .brand-logo-img {
    width: 6rem;
    height: 6rem;
    object-fit: contain;
  }
}

.app-footer-links {
  display: flex;
  flex-direction: column;
  gap: 5px;
  

  .title {
    font-weight: 900;
    color: $primary;
    font-size: 23px;
  }

  .app-footer-link {
    color: $text-default;
    font-weight: 600;
    font-size: 16px;
  }
}
</style>

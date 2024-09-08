<script setup lang="ts">
import { brand } from "~/core/AssetsManager";

const localePath = useLocalePath();
const addShadow=ref(false);
const handleScroll=()=>{
if(window.scrollY>100){
 addShadow.value=true;
}else{
  addShadow.value=false
}
}
onMounted(()=>{
window.addEventListener('scroll',handleScroll)  
})
onBeforeMount(()=>{
  window.removeEventListener('scroll',handleScroll)
})
</script>

<template>
  <nav class="app-navbar" :class="{shadow:addShadow}" v-on:scroll="handleScroll">
    <NuxtLink :to="localePath('/')" >
    <div class="brand">
        <span class="name">{{ $t("brand-name") }}</span>
        <img :src="brand.logo" alt="" class="brand-logo-img" />
      </div>
    </NuxtLink>

    <div class="d-flex align-items-center">
      <div class="d-none d-md-flex navbar-link-items">
        <NuxtLink
          class="navbar-link-item"
          :to="localePath('/')"
          >{{ $t("home") }}</NuxtLink
        >
        <NuxtLink :to="localePath('/about')" class="navbar-link-item">{{
          $t("about")
        }}</NuxtLink>
      </div>
      <LocaleSwitch />
    </div>
  </nav>
</template>

<style scoped lang="scss">
.app-navbar {
  width: 100%;
  height: 75px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  font-weight: bold;
  color: $text-default;
  position: sticky;
  top: 0;
  transition: all 150ms ease-in-out;

  z-index: 99;
&.shadow{
  box-shadow: 3px 3px 5px #aaaaaa80;
}
  .brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    .brand-logo-img {
      width: 1.5rem;
      height: 1.5rem;
      object-fit: contain;
    }
  }

  .navbar-link-items {
    display: flex;
    gap: 0.5rem;
    
    .navbar-link-item {
      padding: 0.5rem 2rem;
      border-radius: 2em;
      color: $text-default;
      transition: all 150ms ease-in-out;
    }

    .router-link-exact-active,
    .active {
      background: $primary;
      color: #fff !important;
    }
  }
}
</style>

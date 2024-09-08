<script setup lang="ts">
const { localeProperties } = useI18n()

const { t, locale } = useI18n()

useHead({
    htmlAttrs: {
        lang: localeProperties.value.code,
        dir: localeProperties.value.dir,
    }
})



useSeoMeta({
    title: t('brand-name'),
    description: t('app_header.subtitle'),
    ogTitle: t('brand-name'),
    ogDescription: t('app_header.subtitle'),
    ogImage: "https://salam-fm.com/logo.png",
    ogUrl: "https://salam-fm.com/",
    keywords: ""
})

updateSiteConfig({
    url: 'https://salam-fm.com',
    name: t('brand-name'),
    description: t('app_header.subtitle'),
    defaultLocale: locale.value, // not needed if you have @nuxtjs/i18n installed
})
    

</script>



<template>

    <div class="landing-page">
        
        <AppHeader />
        <AboutUs />
        <Objectives />
        <MobileApplication />
        <QuraanAudio />
        

    </div>

</template>



<style lang="scss" scoped>
.landing-page {
    height: 100%;
}
</style>
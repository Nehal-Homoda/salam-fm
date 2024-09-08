<template>
    <div>
        <client-only>
            <template v-for="(locale, i) in availableLocales" :key="i" @click.prevent.stop="setLocale(locale.code)">
                <NuxtLink class="navbar-link-item" :to="switchLocalePath(locale.code)">
                    {{ locale.name }}
                </NuxtLink>
            </template>
        </client-only>

    </div>
</template>

<script setup>
const { locale, locales, setLocale, t } = useI18n()
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();


const availableLocales = computed(() => {
    return locales.value.filter((i) => i.code !== locale.value);
});
const currentLocale = computed(() => {
    return locales.value.filter((i) => i.code === locale.value).length
        ? locales.value.filter((i) => i.code === locale.value)[0]
        : null;
});

watch(locale, (newValue, oldValue) => {
    // current.value = newValue;
    const htmlElement = document.querySelector('html');
    htmlElement.setAttribute('lang', currentLocale.value.code)
    htmlElement.setAttribute('dir', currentLocale.value.dir)
});


</script>

<style lang="scss">
.navbar-link-item {
    padding: 0.5rem 0.5rem;
    border-radius: 2em;
    color: $text-default;
}
</style>
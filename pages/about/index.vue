<script setup lang="ts">
import { heros, icons } from '~/core/AssetsManager';
const { t, locale, localeProperties } = useI18n()

useHead({
    htmlAttrs: {
        lang: localeProperties.value.code,
        dir: localeProperties.value.dir,
    }
})


const localePath = useLocalePath()
const socialMediaLinks = [
    {icon: icons.icon_telegram, slug: 'telegram',  link: 'https://t.me/'},
    {icon: icons.icon_facebook, slug: 'facebook',  link: 'https://facebook.com/'},
    {icon: icons.icon_whatsapp, slug: 'whatsapp',  link: 'https://wa.me/'},
]

useSeoMeta({
    title: t('about_page.about_us.title'),
    description: t('about_page.about_us.description'),
    ogTitle: t('about_page.about_us.title'),
    ogDescription: t('about_page.about_us.description'),
    ogImage: "https://salam-fm.com/logo.png",
    ogUrl: "https://salam-fm.com" + localePath('/about'),
    keywords: ""
})

</script>

<template>
    <div>
        <div class="about-us">
            <div class="container">
                <div class="content">
                    <h5 class="section-title">{{ $t('about_page.about_us.title') }} </h5>
                    <p class="description">
                        {{ $t('about_page.about_us.description') }}
                    </p>
                </div>
            </div>
        </div>

        <div class="our-mission">
            <div class="container">
                <div class="our-mission-wrap">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="py-5 pe-3">
                                <h5 class="section-title mb-3 d-inline-block">{{ $t('about_page.our_mission.hero_1.title') }} </h5>
                                <p class="description">
                                    {{ $t('about_page.our_mission.hero_1.description') }}
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="hero-wrap">
                                <img :src="heros.hero_3" alt="" class="hero-img">
                            </div>
                        </div>
                        <div class="col-md-6 mt-5">
                            <div class="hero-wrap">
                                <img :src="heros.hero_4" alt="" class="hero-img">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="py-5 pe-3">
                                <h5 class="section-title mb-3 d-inline-block">{{
                                    $t('about_page.our_mission.hero_2.title') }} </h5>
                                <p class="description">
                                    {{ $t('about_page.our_mission.hero_2.description') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="social-media">
            <div class="container">
                <div class="d-flex flex-column  align-items-center">
                    <h5 class="section-title mb-3">{{ $t('social_media') }} </h5>

                    <div class="social-card">

                        <div class="row">
                            <div class="col-md-8 mx-auto">
                                <div class="social-media-links">
                                    <a v-for="item in socialMediaLinks" :href="item.link" :class="item.slug" class="social-item">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="gradient-space"></div>

    </div>
</template>


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

.our-mission {
    padding: 50px 0;

    .our-mission-wrap {
        background-color: $background;
        border-radius: 1.5em;
        padding: 25px;
        
        @include media-breakpoint-up(md) {
            padding: 50px;
        }
        
    }

    .hero-wrap {
        width: 100%;
        height: 100%;
        height: 350px;
        overflow: hidden;
        border-radius: 1em;

        .hero-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .description {
        font-size: 1.5rem;
        font-weight: 500;
        color: $text-default;
        // line-height: 2;

        // @include media-breakpoint-up(xs) {
        //   font-size: 0.7rem;
        //   line-height: 20px;
        // }
        // @include media-breakpoint-up(sm) {
        //   font-size: 1.5rem;
        //   // line-height: 25px;
        // }
        @include media-breakpoint-up(md) {
            // font-size: 1.5rem;
        }

        @include media-breakpoint-up(lg) {
            // font-size: 1.1rem;

        }
    }
}

.social-media {
    padding: 50px 0;
    background-color: $background;

    .social-card {
        width: 100%;
        padding: 25px;
        border-radius: 1em;
        background-color: #fff;
        
    }
    .social-media-links {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        // gap: 4rem;

        .social-item {
            width: 60px;
            height: 60px;
            display: inline-block;

            &.telegram {
                background: url('~/assets/img/icons/icon-telegram.png') no-repeat center;
                background-size: contain;
            }
            &.facebook {
                background: url('~/assets/img/icons/icon-facebook.png') no-repeat center;
                background-size: contain;
            }
            &.whatsapp {
                background: url('~/assets/img/icons/icon-whatsapp.png') no-repeat center;
                background-size: contain;
            }
        }
    }
}

.gradient-space {
    width: 100%;
    height: 200px;
    background: linear-gradient(to right, $background, #fff, $background);
}
</style>
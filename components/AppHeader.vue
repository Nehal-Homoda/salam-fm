<template>
    <div class="app-header">
        <div class=" header-bg">
            <div class="container">
                <div class="row ">
                    <div class="col-md-5">
                        <div class="logo-img-container mb-5">
                            <img class="logo-img" src="~/assets/img/brand/logo.png" alt="">
                        </div>
                    </div>
                    <div class="col-md-7 text-center d-flex flex-column justify-content-center align-items-center ">
                        <h1 class="fw-bold fs-1 mb-4 ">{{ $t('app_header.title') }}</h1>
                        <p class="fs-3">{{ $t('app_header.subtitle') }}</p>
                        <!-- <audio  class="mt-5" autoplay controls src="http://stream.zeno.fm/znuyzw9avuhvv"></audio> -->

                        <div class="header-audio d-flex align-items-center mt-5">
                            <button :class="isPlaying ? 'pause' : 'play'" @click="playAudio()"
                                class="play-control"></button>

                            <span class="current-time">{{ currentTime }}</span>
                            <div class="audio-progress-bar">
                                <div class="distance"></div>
                            </div>
                            <!-- ########################## -->
                            <button :class="isMuted ? 'off' : 'on'" @click="handleSound()" class="sound-control"></button>
                        </div>



                    </div>

                </div>
            </div>
        </div>

        <div class="container">
            <div class="header-details rounded px-5 py-5">
                <div class="row">
                    <div class="col-lg-4 mb-4">
                        <div class="content-wrap">
                            <div class="icon-wrap">
                                <img class="icon-img" src="~/assets/img/icons/icon-1.png" alt="">
                            </div>
                            <p class="text-white fs-5">{{ $t('app_header.features.feat_1') }}</p>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <div class="content-wrap">
                            <div class="icon-wrap">
                                <img class="icon-img" src="~/assets/img/icons/icon-2.png" alt="">
                            </div>
                            <p class="text-white fs-5">{{ $t('app_header.features.feat_2') }}</p>

                        </div>
                    </div>
                    <div class="col-lg-4 ">
                        <div class="content-wrap">

                            <div class="icon-wrap">
                                <img class="icon-img" src="~/assets/img/icons/icon-3.png" alt="">
                            </div>

                            <p class="text-white fs-5">{{ $t('app_header.features.feat_3') }}</p>


                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const audio = ref(null)
const isPlaying = ref(false)
const isMuted = ref(false)
const currentTime = ref('0:00')
let interval;
const playAudio = () => {
    // audio.value.play()
    if (audio.value.paused) {
        audio.value.play();
        isPlaying.value = true
        console.log(audio.value.currentTime)


        // ######################################

        interval = setInterval(() => {
            const minutes = Math.floor(audio.value.currentTime / 60);
            const secs = Math.floor(audio.value.currentTime % 60);
            currentTime.value = `${minutes}:${secs < 10 ? '0' + secs : secs}`;
        }, 1000)
    }
    else {
        audio.value.pause();
        isPlaying.value = false
    }
}
const handleSound = () => {
    audio.value.muted = !audio.value.muted

    isMuted.value = audio.value.muted;

}
onMounted(() => {

    audio.value = new Audio();
    audio.value.src = "http://stream.zeno.fm/znuyzw9avuhvv";

})
</script>

<style scoped lang="scss">
audio::-webkit-media-controls-play-button {

    color: white;
    border-radius: 50%;
}

audio::-webkit-media-controls-panel {
    background-color: $primary;
    color: #fff;
}

.app-header {
    padding-bottom: 50px;

    .header-bg {
        width: 100%;
        min-height: 75vh;
        background: url('~/assets/img/bg/bg-1.png') center no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        padding-top: 75px;
        padding-bottom: 90px;

        .logo-img-container {
            height: 200px;

            .logo-img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        .header-audio {
            gap: 0.5em;
            background-color: $primary;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 15px;
            //########################
            overflow: hidden;
            border-radius: 2em;

            .current-time {
                width: 50px;
                color: white;
            }


            .play-control {
                width: 25px;
                height: 25px;
                outline: none;
                border: none;

                &.play {

                    background: url('~/assets/img/buttons/btn-1.png') center no-repeat;
                    background-size: contain;
                }

                &.pause {

                    background: url('~/assets/img/buttons/btn-pause.png') center no-repeat;
                    background-size: contain;
                }
            }

            .audio-progress-bar {
                width: 150px;
                height: 3px;
                border-radius: 2em;
                background-color: #fff;
            }

            .sound-control {
                width: 20px;
                height: 20px;
                background: url('~/assets/img/buttons/btn-2.png') center no-repeat;
                background-size: contain;
                outline: none;
                border: none;

                &.on {

                    background: url('~/assets/img/buttons/btn-2.png') center no-repeat;
                    background-size: contain;
                }

                &.off {

                    background: url('~/assets/img/buttons/btn-mute.png') center no-repeat;
                    background-size: contain;
                }
            }
        }


    }


    .header-details {
        background-color: $primary;
        margin-top: -50px;

        .content-wrap {
            display: flex;
            gap: 2rem;

            .icon-wrap {
                height: 50px;
                width: 50px;
                flex-shrink: 0;
                flex-grow: 0;


                .icon-img {
                    height: 100%;
                }

            }
        }
    }

}
</style>
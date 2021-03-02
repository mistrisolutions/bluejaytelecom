<template>
    <section class="header-carousel">
        <v-carousel  hide-delimiter-background show-arrows interval="1000000" :cycle="false">
            <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
                :src="slide.img"
                reverse-transition="none"
                transition="none"
            >
                <v-sheet height="100%" >
                    <v-row class="fill-height" align="center" justify="center">
                        <v-col cols="8" sm="6" class="mx-auto">
                            <h1 class="text-center text-h6 text-sm-h4">{{ slide.title }}</h1>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </section>
</template>
<script>
export default {
    data() {
        return {
            colors: [
                "light-blue lighten-3",
                "teal lighten-3",
                "light-blue accent-2"
            ],
            slides: [
                {
                    img: "assets/img/slider2.jpg",
                    title: "We're going big for small."
                },
                {
                    img: "assets/img/slider3.jpg",
                    title: "And we’re not stopping there."
                },
                {
                    img: "assets/img/slider1.jpg",
                    title: "More ways we’ve helped businesses like yours."
                }
            ]
        };
    }
};
</script>

<style>
.header-carousel .v-carousel-{
    height: 600px;
}
.header-carousel .v-responsive__sizer {
    background: #0000007a!important;
}
.v-sheet.theme--dark {
    background: transparent
}
@media (max-width:599px) {
    .header-carousel .v-carousel{
        height: 300px !important;
    }
    .header-carousel .v-carousel__item{
        height: 300px !important;
    }
}
</style>

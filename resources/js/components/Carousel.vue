<template>
    <section>
        <v-carousel cycle height="auto" hide-delimiter-background show-arrows>
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <v-sheet :color="colors[i]">
                    <v-container>
                        <v-row class="d-flex align-center">
                            <v-col md="4">
                                <div class="pa-2" height="600px">
                                    <v-img :src="slide.img"></v-img>
                                </div>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col md="5">
                                <div class="pa-2 text-center">
                                    <h1 class="">{{ slide.title }}</h1>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
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
                    img: "assets/img/hero.png",
                    title: "We're going big for small."
                },
                {
                    img: "assets/img/hero.png",
                    title: "And we’re not stopping there."
                },
                {
                    img: "assets/img/hero.png",
                    title: "More ways we’ve helped businesses like yours."
                }
            ]
        };
    }
};
</script>

<template>
    <v-parallax dark :src="header.bg" height="400" class="parallax-overlay">
        <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
                <h1 class="text-h4 text-sm-h3 font-weight-bold mb-4">
                    {{ header.title }}
                </h1>
                <p class="text-body-2 white--text text-center mx-auto">
                    {{ header.desc }}
                </p>
            </v-col>
        </v-row>
    </v-parallax>
</template>

<script>
export default {
    props: {
        header: {
            type: Object
        }
    }
};
</script>

<style>
.parallax-overlay p {
    width: 70%;
}

@media (min-width: 768px) {
    .parallax-overlay p {
        width: 50%;
    }
}
</style>

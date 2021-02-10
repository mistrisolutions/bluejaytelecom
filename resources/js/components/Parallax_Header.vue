<template>
    <v-parallax dark :src="header.bg" height="400" class="parallax-overlay">
        <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
                <h1 class="display-2 font-weight-bold mb-4">
                    {{header.title}}
                </h1>
                <p class="title-1 white--text w-25 mx-auto">
                    {{header.desc}}
                </p>
            </v-col>
        </v-row>
    </v-parallax>
</template>

<script>
export default {
  props:{
    header:{
      type:Object
    },
  }
};
</script>

<style></style>

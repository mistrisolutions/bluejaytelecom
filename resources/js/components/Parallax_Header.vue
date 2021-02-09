<template>
    <v-parallax dark :src="header.bg" height="400">
        <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
                <h1 class="display-2 font-weight-bold mb-4">
                    {{header.title}}
                </h1>
                <p class="subheading">
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

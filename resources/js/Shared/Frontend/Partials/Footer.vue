<template>
    <div class="footer pt-16">
        <v-container>
            <v-row justify="center">
                <v-col cols="6">
                    <h1 class="text-center">Bluejay Telecom</h1>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12" align="center">
                    <v-btn
                        class="ma-2 pa-5"
                        v-for="(socail, i) in socials"
                        :key="i"
                        fab
                    >
                        <v-icon> {{ socail }} </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <hr class="my-10" />
            <v-row>
                <v-col>
                    <p class="text-center">
                        Copyright &copy; 2021 | All right reserved by Bluejay
                    </p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            socials: ["mdi-facebook", "mdi-twitter", "mdi-mail", "mdi-linkedin"]
        };
    },
    components: {}
};
</script>
<style>
.footer,
.footer * {
    background-color: #06415d !important;
    color: #fff !important;
}
</style>

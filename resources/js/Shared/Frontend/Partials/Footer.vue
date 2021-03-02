<template>
    <v-footer class="primary white--text footer">
        <v-container>
            <v-row class="py-16">
                <v-col cols="12" md="6">
                    <div>
                        <h3>Follow US</h3>
                        <v-btn
                            v-for="icon in icons"
                            :key="icon"
                            class="mr-2 my-5 pa-2 white--text"
                            color="cyan"
                            fab
                            small
                        >
                            <v-icon size="25px">
                                {{ icon }}
                            </v-icon>
                        </v-btn>

                        <p class="white--text pr-md-10">Bluejay Telecom was founded by a group of business and telecommunication network professionals with years of industrial experience, incorporated in USA.</p>
                    </div>
                </v-col>
                <v-col cols="12" md="3">
                    <h3>General</h3>
                    <ul class="pl-0">
                        <li><inertia-link href="/about">About</inertia-link></li>
                        <li><inertia-link href="/service">Service</inertia-link></li>
                        <li><inertia-link href="/features">Features</inertia-link></li>
                        <li><inertia-link href="/contact">Contact Us</inertia-link></li>
                    </ul>
                </v-col>
                <v-col cols="12" md="3">
                    <h3>Legal</h3>
                    <ul class="pl-0">
                        <li><inertia-link href="/licenses">Licenses</inertia-link></li>
                        <li><inertia-link href="/privecy">Privacy Policy</inertia-link></li>
                        <li><inertia-link href="/terms">Terms of Service</inertia-link></li>
                    </ul>
                </v-col>
            </v-row>
            <v-divider color="grey"></v-divider>
            <v-row class="text-center">
                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} —
                    <strong>Bluejay Telecom</strong>
                </v-card-text>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
export default {
    data() {
        return {
            icons: ["mdi-facebook", "mdi-twitter", "mdi-mail", "mdi-linkedin"]
        };
    },
    components: {}
};
</script>
<style scoped>
.footer ul {
    list-style: none;
}
.footer ul li {
    padding: 10px 0;
}
.footer ul li a {
    color: #fff !important;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    transition: 0.5s ;
}
.footer ul li:hover a{
        color: rgb(187, 255, 252) !important;
}
</style>

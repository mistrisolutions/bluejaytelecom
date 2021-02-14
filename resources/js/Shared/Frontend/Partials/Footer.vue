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
                            class="mr-2 my-5 pa-6 pa-md-8 white--text"
                            icon
                        >
                            <v-icon size="35px">
                                {{ icon }}
                            </v-icon>
                        </v-btn>
                    </div>
                </v-col>
                <v-col cols="12" md="3">
                    <h3>General</h3>
                    <ul class="pl-0">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </v-col>
                <v-col cols="12" md="3">
                    <h3>Legal</h3>
                    <ul class="pl-0">
                        <li><a href="#">Licenses</a></li>
                        <li><a href="$inertia.visit('privecy')">Privacy Policy</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Terms of Service</a></li>
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

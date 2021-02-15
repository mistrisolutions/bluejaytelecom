<template>
    <section>
        <Parallax
            :header="{
                bg: '/assets/img/bg5.jpg',
                title: 'Contact Us',
                desc:
                    'Please get in touch and our expert support team will answer all your questions.'
            }"
        />
        <!-- ./parallax -->
        <div class="py-10">
            <v-container>
                <v-row class="text-center my-10">
                    <v-col cols="12" md="6">
                        <v-card class="pa-10 white" elevation="5" height="100%">
                            <v-icon icon size="50" color="teal darken-2">
                                mdi-map-marker-outline
                            </v-icon>
                            <h4 class="my-4 text-h5">Office-address</h4>
                            <p class="subtitle-1">
                                1309 Coffeen Avenue STE 1200 Sheridan, WY 82801
                                USA
                            </p>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-card class="pa-10 white" elevation="5" height="100%">
                            <v-icon icon size="50" color="teal darken-2">
                                mdi-email-outline
                            </v-icon>
                            <h4 class="my-4 text-h5">Mail</h4>
                            <p class="subtitle-1">sales@bluejaytelecom.com</p>
                            <p class="subtitle-1">info@bluejaytelecom.com</p>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row class="mb-10">
                    <v-col cols="12" md="6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.1510012592!2d90.3491144146427!3d23.780620575946145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1612942905394!5m2!1sen!2sbd"
                            width="100%"
                            height="450"
                            frameborder="0"
                            style="border:0;"
                            allowfullscreen=""
                            aria-hidden="false"
                            tabindex="0"
                        ></iframe>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div>
                            <v-text-field
                                label="Your name (required)"
                                :rules="rules"
                                hide-details="auto"
                                outlined
                                class="mb-5"
                            ></v-text-field>
                            <v-text-field
                                label="Your email (required)"
                                :rules="rules"
                                hide-details="auto"
                                outlined
                                class="mb-5"
                            ></v-text-field>
                            <v-text-field
                                label="Subject"
                                :rules="rules"
                                hide-details="auto"
                                outlined
                                class="mb-5"
                            ></v-text-field>
                            <v-textarea
                                label="Message"
                                auto-grow
                                outlined
                                rows="1"
                                row-height="100"
                            ></v-textarea>
                            <div class="mx-auto d-flex justify-center">
                                <v-btn
                                    class="white--text text-button"
                                    color="teal darken-4"
                                >
                                    Submit
                                </v-btn>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
</template>

<script>
import Parallax from "../../components/Parallax_Header";
export default {
    layout: `frontend-layout`,
    components: {
        Parallax
    },
    data() {
        return {
            rules: [
                value => !!value || "Please fill the input.."
                // value => (value && value.length >= 3) || "Please fill the input."
            ]
        };
    }
};
</script>

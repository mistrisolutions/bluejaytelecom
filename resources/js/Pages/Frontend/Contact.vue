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
                            <p class="subtitle-1 text-center">
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
                            <p class="subtitle-1 text-center">sales@bluejaytelecom.com</p>
                            <p class="subtitle-1 text-center">info@bluejaytelecom.com</p>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row class="mb-8">>
                    <v-col cols="12" md="6" offset-md="3">
                        <v-alert
                            dense
                            text
                            type="success"
                            v-if="$page.props.success"
                        >
                            {{$page.props.success}}
                        </v-alert>
                        <div>
                            <v-text-field
                                label="Your name (required)"
                                v-model="form.name"
                                :error="!!$page.props.errors.name"
                                :error-messages="$page.props.errors.name"
                                hide-details="auto"
                                outlined
                                class="mb-5"
                            ></v-text-field>
                            <v-text-field
                                label="Your email (required)"
                                v-model="form.email"
                                :error="!!$page.props.errors.email"
                                :error-messages="$page.props.errors.email"
                                hide-details="auto"
                                outlined
                                class="mb-5"
                            ></v-text-field>
                            <v-text-field
                                label="Subject"
                                v-model="form.subject"
                                :error="!!$page.props.errors.subject"
                                :error-messages="$page.props.errors.subject"
                                hide-details="auto"
                                outlined
                                class="mb-5"
                            ></v-text-field>
                            <v-textarea
                                label="Message"
                                v-model="form.message"
                                :error="!!$page.props.errors.message"
                                :error-messages="$page.props.errors.messaage"
                                auto-grow
                                outlined
                                rows="1"
                                row-height="100"
                            ></v-textarea>
                            <div class="mx-auto d-flex justify-center">
                                <v-btn
                                    class="white--text text-button"
                                    color="teal darken-4"
                                    @click="submit()"
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
            ],
            form:{
                name:null,
                email:null,
                subject:null,
                message:null,
            }
        };
    },

    methods:{
        makeFormData() {
            const formData = new FormData();
            Object.keys(this.form).forEach((key) => {
                if (this.form[key] == null) {
                    formData.append(key, "");
                } else {
                    formData.append(key, this.form[key]);
                }
            });
            return formData;
        }, // makeFormData

        resetForm(){
            Object.keys(this.form).forEach(key=>{
                this.form[key]=null
            })
        },

        submit() {
            this.loading = true;
            this.$inertia
                .post(this.route("contact.store"), this.makeFormData(), {
                replace: true,
                preserveScroll: true,
                preserveState: true,
                })
            .then(() =>{
               if(this.$page.props.success){
                   this.resetForm()
               }
            });
        },
    }
};
</script>

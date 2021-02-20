<template>
    <section>
        <Parallax
            :header="{
                bg: '/assets/img/bg2.jpg',
                title: 'Our Features',
                desc:
                    'Bluejay Telecom delivers the highest quality of telecommunications from voice, data, internet and mobile. '
            }"
        />
        <!-- ./parallax -->

        <div class="features py-5 py-sm-0">

            <section class="features-section d-flex align-center">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="6" class="text-justify px-10">
                            <h2>Quality</h2>
                            <p>
                                Being a quality conscious organization,
                                DeshiCall takes maximum care to maintain its
                                quality standard. Along with unmatched voice
                                quality, DeshiCall assures best retail VoIP
                                termination services. Frequent quality
                                monitoring is done to ensure that the services
                                are at par with the international standard.
                            </p>
                        </v-col>
                        <v-col cols="12" class="d-block d-sm-none">
                            <v-img src="/assets/img/features1.jpg"></v-img>
                        </v-col>
                    </v-row>
                </v-container>
                <div class="features-bg bg-right"></div>
            </section>
            <section class="features-section d-flex align-center">
                <v-container>
                    <div class="features-bg bg-left"></div>
                    <v-row>
                        <v-col
                            cols="12"
                            md="6"
                            offset-md="6"
                            class="text-justify px-10"
                        >
                            <h2>Network Quality</h2>
                            <p>
                                With DeshiCall , customers can expect excellent network quality and crystal clear voice. Compatible with several protocols such as SIP and G729, DeshiCall network assures uninterrupted calling experience irrespective of any type of protocol. Furthermore, the network is constantly checked to maintain the quality of services.
                            </p>
                        </v-col>
                        <v-col cols="12" class="d-block d-sm-none">
                            <v-img src="/assets/img/features2.jpg"></v-img>
                        </v-col>
                    </v-row>
                </v-container>
            </section>
            <section class="features-section d-flex align-center">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="6" class="text-justify px-10">
                            <h2>Compatibility</h2>
                            <p>
                                DeshiCall has a versatile structure, which can support a huge range of mobile handsets and call origination devices like PC's for call termination.
                            </p>
                        </v-col>
                        <v-col cols="12" class="d-block d-sm-none">
                            <v-img src="/assets/img/features1.jpg"></v-img>
                        </v-col>
                    </v-row>
                </v-container>
                <div class="features-bg bg-right"></div>
            </section>
            <section class="features-section d-flex align-center">
                <v-container>
                    <div class="features-bg bg-left"></div>
                    <v-row>
                        <v-col
                            cols="12"
                            md="6"
                            offset-md="6"
                            class="text-justify px-10"
                        >
                            <h2>Impeccable After Sales Support</h2>
                            <p>
                               DeshiCall provides 24X7 support to its clients in the form of online troubleshooting And Whatsapp . Any kind of clients issues are addressed by the technical support team and resolved within the stipulated period of time. Hence, due to the prompt after sales support, DeshiCall is able to offer reliable VoIP Termination Services.
                            </p>
                        </v-col>
                        <v-col cols="12" class="d-block d-sm-none">
                            <v-img src="/assets/img/features2.jpg"></v-img>
                        </v-col>
                    </v-row>
                </v-container>
            </section>
            
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
        return {};
    }
};
</script>

<style>
.features {
    position: relative;
}
.features-section {
    height: 600px;
    position: relative;
}
.features-bg {
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    width: 50%;
    top: 0;
    margin-left: auto;
    position: absolute;
}
.bg-right {
    background-image: url("/assets/img/features1.jpg");
    right: 0;
}
.bg-left {
    background-image: url("/assets/img/features2.jpg");
    left: 0;
}

@media (max-width: 767px) {
    .features-section {
        height: 100%;
    }
    .features-bg {
       display: none;
    }
}
</style>

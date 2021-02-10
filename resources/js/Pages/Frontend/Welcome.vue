<template>
    <section>
        <Carousel />
        <!-- ./carousel -->

        <div class="py-16">
            <v-container>
                <v-row class="d-flex align-center justify-center">
                    <v-col md="5">
                        <h2 class="mb-6 text-h5 font-weight-bold">About Bluejay Telecom</h2>
                        <p>
                            Bluejay Telecom was founded by a group of business
                            and telecommunication network professionals with
                            years of industrial experience, incorporated in USA
                            with national telecom operators and best VoIP
                            companies around the world. Bluejay Telecom deliver
                            the highest quality of telecommunications from
                            voice, data, internet and mobile. We are committed
                            to serve our customers with an uninterrupted and
                            affordable VoIP service and utmost convenience. We
                            have flexibility to offer innovative services to
                            customers worldwide. We offer wholesale and retail
                            voice termination all over the world with main focus
                            in Asia. Our systems are modular, scalable and
                            flexible.
                        </p>
                    </v-col>
                    <v-col md="7">
                        <v-img src="assets/img/about.png"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <!-- ./about -->

        <Card />
        <!-- ./card -->
    </section>
</template>

<script>
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
export default {
    layout: `frontend-layout`,
    components: {
        Carousel,
        Card
    },
    data() {
        return {
            
        };
    }
};
</script>

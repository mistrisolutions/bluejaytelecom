<template>
    <section>
        <Carousel />
        <!-- ./carousel -->

        <div class="py-16">
            <v-container>
                <v-row class="d-flex align-center justify-center">
                    <v-col md="5">
                        <h2 class="mb-6 text-h5 font-weight-bold">
                            About Bluejay Telecom
                        </h2>
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

        <Card :count="3" :btn="true" />
        <!-- ./card -->

        <div class="what-is-voip py-16">
            <v-container>
                <v-row>
                    <v-col cols="12" justify="center">
                        <v-img
                            src="assets/img/phone.png"
                            max-height="500"
                            max-width="500"
                            class="mx-auto my-10"
                        ></v-img>
                    </v-col>
                    <v-col cols="12" md="6" class="pr-2 pr-md-16">
                        <h2 class="mb-6 text-h5 font-weight-bold">
                            What is VoIP?
                        </h2>
                        <p>
                            VoIP is an acronym for Voice over Internet Protocol
                            that describes the method to place and receive phone
                            calls over the internet. Most people consider VoIP
                            the alternative to the local telephone company.
                        </p>
                        <p>
                            If you’ve heard of an IP address, that’s your
                            Internet Protocol address. An IP address is how
                            computers and devices communicate with each other on
                            the internet.
                        </p>
                        <p>
                            VoIP isn’t actually all that new. Telephony has
                            relied on digital lines to carry phone calls since
                            the late 90s. VoIP is a cost-effective way to handle
                            an unlimited number of calls.
                        </p>
                    </v-col>
                    <v-col cols="12" md="6" class="pr-2 pr-md-16">
                        <h2 class="mb-6 text-h5 font-weight-bold">
                            What is VoIP?
                        </h2>
                        <p>
                            VoIP phone expert is the one person who can handle
                            all your VoIP phone system installation, support and
                            training needs. This professional is pretty much an
                            expert on everything pertaining to VoIP phones and
                            calling services. VoIP or Voice over Internet
                            Protocol calling has become almost indispensable for
                            any company that wants to make a lasting impact as a
                            company of the future. It is both a cost effective,
                            as well as, far reaching way to make local, as well
                            as, international and long distance calls. VoIP
                            services use a high speed internet broadband
                            connection to place calls. VoIP phone systems lend a
                            professional and efficient touch to your business
                            communications.
                        </p>
                    </v-col>
                </v-row>
            </v-container>
        </div>
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
        return {};
    }
};
</script>

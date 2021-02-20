<template>
    <section transition="scale-transition">
        <Parallax
            :header="{
                bg: '/assets/img/bg4.jpg',
                title: 'About Us',
                desc:
                    'Bluejay Telecom delivers the highest quality of telecommunications from voice, data, internet and mobile. '
            }"
        />
        <!-- ./parallax -->

        <div class="company py-10">
            <v-container>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <h1 class="mb-10 section-title">
                            Company Profile
                        </h1>
                    </v-col>
                    <v-col>
                        <p>
                            Bluejay Telecom delivers the highest quality of
                            telecommunications from voice, data, internet and
                            mobile. We are committed to serve our customers with
                            an uninterrupted and affordable VoIP service and
                            utmost convenience. We have flexibility to offer
                            innovative services to customers worldwide. We offer
                            wholesale and retail voice termination all over the
                            world with main focus in Asia and Africa. Our
                            systems are modular, scalable and flexible Maxes
                            Technologies was founded by a group of business and
                            telecommunication network professionals with years
                            of industrial experience, incorporated in UK with
                            national telecom operators and best VoIP companies
                            around the world as our partners
                        </p>
                        <p>
                            Bluejay Telecom delivers the highest quality of
                            telecommunications from voice, data, internet and
                            mobile. We are committed to serve our customers with
                            an uninterrupted and affordable VoIP service and
                            utmost convenience. We have flexibility to offer
                            innovative services to customers worldwide. We offer
                            wholesale and retail voice termination all over the
                            world with main focus in Asia. Our systems are
                            modular, scalable and flexible
                        </p>
                        <p>
                            We Invested heavily in next generation
                            infrastructure so as to allow us to stay ahead. We
                            have a very strong Technology and engineering focus
                            which we nurture on a daily basis and upgrade them,
                            as and when needed.
                        </p>
                        <p>
                            Bluejay Telecom with direct carriers makes us to
                            stick on to our mission that is “to deliver quality
                            at its best”. we are with the sole objective to run
                            our business in VoIP traffic transition and peering
                            service.
                        </p>
                        <p>
                            We Invested heavily in next generation
                            infrastructure so as to allow us to stay ahead. We
                            have a very strong Technology and engineering focus
                            which we nurture on a daily basis and upgrade them,
                            as and when needed. Bluejay Telecom with direct
                            carriers makes us to stick on to our mission that is
                            “to deliver quality at its best”. we are with the
                            sole objective to run our business in VoIP traffic
                            transition and peering service.
                        </p>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <!-- ./company-profile -->

        <div class="statistics">
            <v-container>
                <v-card elevation="5" class="pa-10 pa-sm-5 pa-md-10" rounded>
                    <v-row>
                        <v-col cols="12" class="text-center mb-5 white--text">
                            <h1 class="section-title white--text">
                                Our Statistic
                            </h1>
                        </v-col>
                        <v-col cols="12">
                            <v-row>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="3"
                                    v-for="(item, i) in status"
                                    :key="i"
                                >
                                    <v-card
                                        class="py-10"
                                        color="white"
                                        height="100%"
                                        elevation="0"
                                        rounded
                                    >
                                        <h1
                                            class="mb-4 font-weight-bold text-center cyan--text text--darken-3"
                                        >
                                            <Counter :end="item.count" />
                                        </h1>
                                        <p class="font-weight-bold text-center">
                                            {{ item.title }}
                                        </p>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-container>
        </div>
        <!-- ./statistics -->
        <div class="work">
            <v-parallax
                src="/assets/img/bg1.jpg"
                class="parallax-overlay py-16 cyan darken-3"
                style="margin-top:-80px"
            >
                <v-container>
                    <v-row class="mt-16 py-16">
                        <v-col cols="12">
                            <v-row class="d-flex align-center">
                                <v-col cols="12" class="text-center">
                                    <h1 class="section-title white--text">
                                        Let's Work Together
                                    </h1>
                                    <p
                                        class="mt-4 mb-10 text-center white--text mx-auto"
                                    >
                                        We are always active on WhatsApp and
                                        Mobile Call. Be connect with us and call
                                        us anything for your query. Drop us a
                                        form in contact section.
                                    </p>
                                    <v-btn
                                        class="py-6 px-4 teal lighten-1 white--text title-1 font-weight-bold"
                                        outlined
                                        >Get In Touch</v-btn
                                    >
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-parallax>
        </div>
        <!-- ./work-together -->
    </section>
</template>

<script>
import Parallax from "../../components/Parallax_Header";
import Counter from "@/components/Counter";
export default {
    layout: `frontend-layout`,
    components: {
        Parallax,
        Counter
    },
    data() {
        return {
            status: [
                { count: 50, title: "Happy Clients" },
                { count: 100, title: "Completed Projects" },
                { count: 90, title: "Web Projects" },
                { count: 30, title: "Team Members" }
            ],
        };
    },
};
</script>

<style>

.statistics .v-card.v-sheet.theme--light {
    z-index: 1;
}
.statistics .v-card {
    background-color: #21607d;
}

.work .parallax-overlay p {
    width: 100%;
}

/* start */
#wrapper {
    width: 150px;
    display: inline-block;
    padding: 20px 0;
    border-radius: 15px;
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.18);
}
input {
    display: inline-block;
    margin: 10px;
    padding: 10px;
}
.btn {
    outline: none;
    cursor: pointer;
    -moz-appearance: none;
    appearance: none;
    -webkit-appearance: none;
    border-radius: 5px;
    color: #fff;
    background-color: #7b68ee;
    box-shadow: 0 3px 8px 0 rgba(65, 105, 225, 0.18);
    display: inline-block;
    border: 0;
    padding: 10px 14px;
    font-size: 14px;
    transition: all 0.1s ease-in;
    margin: 15px;
}
.green {
    background-color: mediumseagreen !important;
}
.blue {
    background-color: royalblue !important;
}
/* end */

@media (min-width: 992px) {
    .work .parallax-overlay p {
        width: 70% !important;
    }
}
</style>

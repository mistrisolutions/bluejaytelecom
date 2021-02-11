<template>
    <section>
        <Parallax
            :header="{
                bg: '/assets/img/bg6.jpg',
                title: 'Our Service',
                desc:
                    'The ultra-fast services that is right for you. We are providing different services to our clients.'
            }"
        />
        <!-- ./parallax-header -->

        <Card />
        <!-- ./service-card -->

        <div class="we-do py-16">
            <v-container>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <h1 class="mb-10 section-title">What We Do Best</h1>
                    </v-col>
                    <!-- ./title-col -->
                    <v-col cols="12">
                        <v-row>
                            <v-col
                                cols="12"
                                sm="6"
                                lg="4"
                                v-for="(card, i) in cards"
                                :key="i"
                            >
                                <v-card
                                    elevation="5"
                                    class="pa-5 text-center overflow-hidden"
                                    height="260"
                                    outlined
                                    
                                >
                                    <v-icon icon size="50" class="grey--text mb-5">
                                        {{ card.icon }}
                                    </v-icon>
                                    <h3
                                        class="mb-0 mb-sm-3 text-button text-md-subtitle-1  primary--text font-weight-bold"
                                    >
                                        {{ card.title }}
                                    </h3>
                                    <p class="text-caption text-md-overline">
                                        {{ card.details }}
                                    </p>
                                    <!-- <v-row class="text-center text-sm-left">
                                        <v-col
                                            cols="12"
                                            sm="3"
                                            elevation="5"
                                            outlined
                                        >
                                            <v-icon
                                                icon
                                                size="60"
                                                class="grey--text"
                                            >
                                                {{ card.icon }}
                                            </v-icon>
                                        </v-col>
                                        <v-col cols="12" sm="9">
                                            <h3
                                                class="mb-3 cyan--text lighten-3 font-weight-bold"
                                            >
                                                {{ card.title }}
                                            </h3>
                                            <p>
                                                {{ card.details }}
                                            </p>
                                        </v-col>
                                    </v-row> -->
                                </v-card>
                            </v-col>
                            <!-- ./single-item -->
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <!-- ./what-we-do -->

        <div class="py-16 grey lighten-3">
            <v-container>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <h1 class="mb-10 section-title">Client Testimonial</h1>
                    </v-col>
                    <!-- ./title-col -->
                    <v-col cols="12">
                        <v-row>
                            <v-col
                                cols="12"
                                sm="6"
                                lg="4"
                                v-for="(testimonial, i) in testimonials"
                                :key="i"
                            >
                                <v-card
                                    class="py-10 px-5"
                                    height="100%"
                                    elevation="22"
                                >
                                    <v-row class="d-flex align-center">
                                        <v-col
                                            cols="4"
                                            class="text-center justify-center"
                                        >
                                            <v-img
                                                class="img-fluid rounded-circle grey lighten-2 mx-auto"
                                                height="80"
                                                width="80"
                                                :src="testimonial.img"
                                            ></v-img>
                                        </v-col>
                                        <v-col cols="8">
                                            <h4
                                                class="text-h6 mb-0 font-weight-bold"
                                            >
                                                {{ testimonial.author }}
                                            </h4>
                                            <p class="subtitle-1 mb-0">
                                                {{ testimonial.designation }}
                                            </p>
                                        </v-col>
                                    </v-row>
                                    <v-icon
                                        icon
                                        size="50"
                                        class="grey--text lighten-3 mt-5"
                                    >
                                        mdi-format-quote-open
                                    </v-icon>
                                    <p class="px-4">
                                        {{ testimonial.details }}
                                    </p>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <!-- ./testimonials -->
    </section>
</template>

<script>
import Parallax from "../../components/Parallax_Header";
import Card from "../../components/Card";
export default {
    layout: `frontend-layout`,
    components: {
        Parallax,
        Card
    },
    data() {
        return {
            cards: [
                {
                    icon: "mdi-pen",
                    title: "Route Quality",
                    details: "Our route quality are best for telecom sector."
                },
                {
                    icon: "mdi-monitor",
                    title: "Bulk Traffic",
                    details:
                        "We provide bulk traffic asia based network in telecommunication industry."
                },
                {
                    icon: "mdi-chart-box-plus-outline",
                    title: "Customer Support",
                    details:
                        "We provide 24 hours support through whatsapp and email."
                },
                {
                    icon: "mdi-bookshelf",
                    title: "Branding",
                    details:
                        "In web development sector we create interface which can create new brand of our company"
                },
                {
                    icon: "mdi-source-branch",
                    title: "Project Manger",
                    details:
                        "We assign a project manager for research the project before start the work "
                },
                {
                    icon: "mdi-lightbulb-on",
                    title: "Business Consulting",
                    details:
                        "We consult your project into reality which can be a great asset for your company revenue."
                }
            ],
            testimonials: [
                {
                    img: "assets/img/client.jpg",
                    details:
                        "Bluejay Telecom makes my life easier. Now I can call anywhere and they also make a great website",
                    author: "Afif Cherif",
                    designation: "Producer, Studio Primetime"
                },
                {
                    img: "assets/img/client.jpg",
                    details:
                        "This team is always perfect for taking any challenges. Always recommend them and hire again.",
                    author: "Raz Raz Lee",
                    designation: "Executive Officer, Deloitee"
                },
                {
                    img: "assets/img/client.jpg",
                    details:
                        "They help me a lot to set up my business. Even extra work freely for my website ",
                    author: "Symon Lee",
                    designation: "CEO, The dogs Bets"
                }
            ]
        };
    }
};
</script>

<style>
.we-do .v-sheet.v-card:hover {
    box-shadow: none !important;
    transition: 0.5s;
    background-color: #e6e6e6 !important;
}
</style>

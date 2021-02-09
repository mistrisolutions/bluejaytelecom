<template>
    <section>
        <Parallax :header="{bg:'/assets/img/bg1.jpg',title:'Our Service',desc:'Build your application today!'}" />
        <!-- ./parallax-header -->

        <Card />
        <!-- ./service-card -->

        <div class="py-10">
            <v-container>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <h1>What We Do Best</h1>
                    </v-col>
                    <!-- ./title-col -->
                    <v-col cols="12">
                        <v-row>
                            <v-col cols="12" sm="6" lg="4" v-for="(card , i) in cards" :key="i">
                                <v-row class="text-center text-sm-left">
                                    <v-col cols="12" sm="3">
                                        <v-icon icon size="60">
                                            {{ card.icon }}
                                        </v-icon>
                                    </v-col>
                                    <v-col cols="12" sm="9">
                                        <h3 class="my-3">{{ card.title }}</h3>
                                        <p>
                                            {{ card.details }}
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <!-- ./single-item -->
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <!-- ./what-we-do -->

        <div>
            <v-container>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <h1>Client Testimonial</h1>
                    </v-col>
                    <!-- ./title-col -->
                    <!-- <v-col cols="12">
                        <v-row>
                            <v-col cols="12" sm="6" lg="4" v-for="(card , i) in cards" :key="i">
                                <v-row class="text-center text-sm-left">
                                    <v-col cols="12" sm="3">
                                        <v-icon icon size="60">
                                            {{ card.icon }}
                                        </v-icon>
                                    </v-col>
                                    <v-col cols="12" sm="9">
                                        <h3 class="my-3">{{ card.title }}</h3>
                                        <p>
                                            {{ card.details }}
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col> -->
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
                {icon: 'mdi-pen' , title: 'Route Quality' , details: 'Our route quality are best for telecom sector.'},
                {icon: 'mdi-monitor' , title: 'Bulk Traffic' , details: 'We provide bulk traffic asia based network in telecommunication industry.'},
                {icon: 'mdi-chart-box-plus-outline' , title: 'Customer Support' , details: 'We provide 24 hours support through whatsapp and email.'},
                {icon: 'mdi-bookshelf' , title: 'Branding' , details: 'In web development sector we create interface which can create new brand of our company'},
                {icon: 'mdi-source-branch' , title: 'Project Manger' , details: 'We assign a project manager for research the project before start the work '},
                {icon: 'mdi-lightbulb-on' , title: 'Business Consulting' , details: 'We consult your project into reality which can be a great asset for your company revenue.'},
            ],
            testimonials: [
                {img: 'assets/logo.png' , details: 'This team is always perfect for take any challenge . Always recommend them and hire again' , author: 'Afif' , designation: 'CEO'}
            ]
        };
    }
};
</script>

<style></style>

<template>
    <section>
        <Parallax :header="{bg:'/assets/img/slider1.jpg',title:'About US',desc:'Build your application today!'}" />
        <!-- ./parallax -->

        <div class="company py-10">
            <v-container>
                <v-row>
                    <v-col cols="12" class="text-center mb-6">
                        <h1>Company Profile</h1>
                    </v-col>
                    <v-col>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sapiente officiis qui totam modi corporis?
                            Quasi tempora aspernatur eaque corrupti dolorum
                            blanditiis dicta sunt non deserunt! Inventore
                            nostrum adipisci quia excepturi veritatis quisquam
                            deserunt impedit magnam voluptatem, nulla numquam,
                            aperiam obcaecati optio eaque illum tempore dicta,
                            libero maxime quae animi repudiandae. Fugit facilis
                            architecto molestiae quis.
                        </p>
                        <p>
                            harum nemo dicta ea ex mollitia iste earum quo
                            explicabo officiis itaque, fuga doloremque quia.
                            Ipsa veniam, eveniet assumenda autem sunt placeat
                            aut velit ut libero aspernatur voluptate quasi nemo
                            quibusdam. Perspiciatis quo nihil, rerum animi
                            consequuntur laudantium ab autem modi porro, aut
                            facilis, explicabo repudiandae magnam ipsam
                            doloribus distinctio debitis dolorum soluta! Cum ab
                            asperiores eaque deserunt, aut iste eius corporis!
                            Dolores, ad quae! Repellendus eum in molestiae
                            officiis vero odit a at aspernatur magnam mollitia!
                            Obcaecati ipsam, dolor quidem quod voluptate
                            molestias perspiciatis quaerat nam ea ut. Obcaeca
                        </p>
                        <p>
                            temporibus molestias, et maiores ipsa commodi
                            nostrum sequi iusto fugit nam ullam nisi eligendi
                            magni mollitia inventore, sit pariatur nemo illo
                            tenetur tempore impedit. Porro mollitia nobis
                            consequuntur perspiciatis voluptates dolorum sequi
                            laboriosam ipsum soluta libero saepe, fuga
                            consectetur suscipit aliquid ad deleniti, asperiores
                            similique nesciunt minima autem quo odit, ex
                            corporis. Aut corrupti, eius animi quaerat minima
                            reiciendis adipisci aperiam doloremque atque
                            provident? Enim quisquam, aspernatur expedita
                            excepturi iste assumenda ut officiis qui quasi quae
                            saepe incidunt perspiciatis possimus ab provident
                            deleniti quod maxime magnam velit deserunt tempora?
                            Dicta enim, optio sed dolorum dolores aspernatur ex
                            recusandae inventore aperiam rem sunt amet natus ut
                            distinctio minus cum delectus laudantium obcaecati
                            accusamus saepe hic non nulla iusto eaque. Itaque
                            neque debitis asperiores maiores voluptas nam
                            officia error, veniam, quia laudantium non minima,
                            numquam excepturi quisquam fugiat? Reiciendis modi
                            non libero quae adipisci nam voluptates veniam ad,
                            dignissimos veritatis consequatur perferendis
                            architecto officiis id officia asperiores eos
                            repellat distinctio provident dicta, deleniti esse
                            hic doloremque! Dicta fugiat eligendi nam ea
                            praesentium asperiores molestiae sunt necessitatibus
                            modi eveniet ipsa ipsam, assumenda, at explicabo sit
                            optio id deleniti beatae quo consectetur. Fuga
                            impedit libero ad dolores ipsam voluptates excepturi
                            dolor. Odit, aliquam eligendi. Nemo, corporis!
                            Quisquam quos hic recusandae vel beatae soluta quia
                            dolorem eveniet voluptas similique autem facere
                            ullam voluptatum laborum quasi eligendi cupiditate,
                            accusamus optio nulla quam? Vitae sunt facilis
                            repellendus, soluta veniam itaque reprehenderit
                            explicabo vel incidunt! Iure autem cumque expedita,
                            eaque nemo cum nobis rerum necessitatibus! Ipsa
                            natus voluptatem error nihil aut! Temporibus quia
                            totam, architecto expedita harum accusamus autem
                            illum porro sit eligendi corrupti veritatis quae
                            vero dolor et mollitia quas possimus consequatur
                            aspernatur enim debitis placeat fugit! Similique
                            earum distinctio voluptatibus fugiat consectetur
                            fugit facere. Temporibus tenetur placeat cumque odit
                            suscipit vel ad atque nam. Natus error modi fuga
                            temporibus dolores, quod mollitia quasi consectetur
                            repellendus expedita tenetur sit dignissimos iste
                            qui. Recusandae officiis nobis sequi accusamus
                            repellendus illo adipisci dolore quibusdam, fugiat
                            id quam hic nostrum laudantium commodi illum.
                            Nesciunt, ipsam eius recusandae sapiente vitae totam
                            magnam accusamus cumque itaque eveniet laudantium
                            vel ad quisquam corporis delectus atque provident
                            laboriosam commodi.
                        </p>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <!-- ./company-profile -->

        <div class="py-16 grey lighten-4">
            <v-container>
                <v-row>
                    <v-col cols="12" class="text-center mb-10">
                        <h1>Our Statistic</h1>
                    </v-col>
                    <v-col cols="12">
                        <v-row class="text-center">
                            <v-col
                                cols="12"
                                sm="6"
                                md="3"
                                v-for="(item, i) in status"
                                :key="i"
                            >
                                <v-card class="py-16">
                                    <h1 class="mb-4">{{ item.count }}</h1>
                                    <p>{{ item.title }}</p>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <!-- ./statistics -->

        <div class="py-16 red lighten-4">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-row class="d-flex align-center">
                            <v-col class="d-flex justify-center" sm="12" md="5">
                                <img
                                    class="rounded-circle"
                                    height="300"
                                    width="300"
                                    src="/assets/img/touch.jpg"
                                    alt=""
                                />
                            </v-col>
                            <v-col sm="12" md="7" class="text-center">
                                <h1>Let's Work Together</h1>
                                <p class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex inventore doloremque quam numquam qui perferendis rerum, exercitationem nemo vitae quo.</p>
                                <v-btn
                                    class="py-6 px-4 white"
                                    outlined
                                    >Get In Touch</v-btn
                                >
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <!-- ./work-together -->
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
            status: [
                { count: 100, title: "Happy Clients" },
                { count: 150, title: "Completed Projects" },
                { count: 30, title: "Web Projects" },
                { count: 50, title: "Team Members" }
            ]
        };
    }
};
</script>

<style>

</style>

<template>
    <section class="py-16 grey lighten-3">
        <v-container>
            <v-row class="justify-center text-center">
                <v-col md="6">
                    <h1 class="mb-6">Our Service</h1>
                    <p>
                        The ultra-fast services that's right for you. We are
                        providing different services to our clients. We are
                        mainly focused on VOIP services primary. Now we have
                        established a new of web development.
                    </p>
                </v-col>
            </v-row>
            <v-row>
                <v-col
                    cols="12"
                    md="6"
                    lg="4"
                    v-for="(service, i) in services"
                    :key="i"
                >
                    <v-card outlined class="py-6" min-height="500" :color="colors[i]">
                        <v-list-item>
                            <v-list-item-content class="text-center">
                                <div class="overline mb-4">
                                    <v-icon size="80">
                                        {{ service.icon }}
                                    </v-icon>
                                </div>
                                <v-list-item-title class="mb-3">
                                    <h2>{{ service.service_name }}</h2>
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <div class="px-5">
                            <v-list-item
                                v-for="(list, i) in services[i].lists"
                                :key="i"
                                class="px-0"
                            >
                                <v-list-item-content>
                                    <v-row>
                                        <v-col cols="1">
                                            <v-icon color="white"
                                                >mdi-chevron-double-right
                                            </v-icon>
                                        </v-col>
                                        <v-col cols="10">
                                            <v-list-item-title>{{
                                                list
                                            }}</v-list-item-title>
                                        </v-col>
                                    </v-row>
                                </v-list-item-content>
                            </v-list-item>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script>
export default {
    data() {
        return {
            colors: ["cyan", "teal", "grey","cyan", "teal", "grey"],
            services: [
                {   
                    icon: "mdi-semantic-web",
                    service_name: "Wholesale VOIP",
                    lists: [
                        "The wholesale VOIP is our Main Concern and service.",
                        "Our Main Object to provide the best Wholesale Service in the VOIP Market in the cheapest rate.",
                        "We are interconnected with more then 100+ satisfied Wholesale customer,who are happily enjoying our wholesale services."
                    ]
                },
                {
                    icon: "mdi-bullseye-arrow",
                    service_name: "Retails VOIP",
                    lists: [
                        "We are strong in the retails VoIP.",
                        "We have many attractive plans for the retail’s services apart from the VOIP market for A2Z Destinations.",
                        "we have more then 50+ satisfied Retails customer who are taking the experience of best retail services and technical support by connecting with us. Feel free to contact us."
                    ]
                },
                {
                    icon: "mdi-apple-keyboard-command",
                    service_name: "Server Rent",
                    lists: [
                        "We have unbeatable price for high performance Dedicated Server, Virtual Server, VOIP Switch, VOS. ",
                        "We have professional and experienced Technical support team who will always would be ready to provide you quick 24/7 Support. Feel free to contact us."
                    ]
                },
                {
                    icon: "mdi-xml",
                    service_name: "APPS DEVELOPMENT ",
                    lists: [
                        "Got an app idea? Let’s make your dream app a reality together.",
                        "We’ve had an affair with creativity which compels us to strive harder!",
                        "We are expert on making Ecommerce app and Mobile Game."
                    ]
                },
                {
                    icon: "mdi-code-braces",
                    service_name: "WEB DEVELOPMENT",
                    lists: [
                        "A Website is not enough.",
                        "You need results as well and we are expert on that.",
                        "We turn your imagination into reality with our creativity.",
                        "Our web design services will greatly enhance your business’s presence on the Internet."
                    ]
                },
                {
                    icon: "mdi-gate-arrow-right",
                    service_name: "SOFTWARE DEVELOPMENT",
                    lists: [
                        "Get high-performing, speedy software applications that handles your Personal & Business operations better.",
                        "we make software applications that are interactive and a visual treat.",
                        "Feel free to contact us."
                    ]
                }
            ]
        };
    }
};
</script>

<style scoped>
.v-list-item__title,
.v-list-item__subtitle {
    white-space: pre-wrap;
}
</style>

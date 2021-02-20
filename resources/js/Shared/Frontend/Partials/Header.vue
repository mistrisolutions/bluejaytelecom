<template>
    <div class="header" style="margin-bottom:70px">
        <v-app-bar color="primary" fixed height="70px">
            <v-container>
                <v-row class="d-flex align-center">
                    <v-toolbar-title>
                        <inertia-link href="/">
                            <img
                                class="img-fluid"
                                style="height:50px"
                                src="assets/logo.svg"
                                alt=""
                            />
                        </inertia-link>
                    </v-toolbar-title>

                    <v-spacer></v-spacer>
                    <v-btn
                        v-for="(item, index) in items"
                        :key="index"
                        class="ml-0 ml-lg-2 d-none d-md-block"
                        plain
                        @click="changeLink(item.link)"
                    >
                        {{ item.title }}
                    </v-btn>
                    <v-text-field
                        @focus="searchClosed = false"
                        @blur="searchClosed = true"
                        v-model="search"
                        class="ml-2 expanding-search d-none d-sm-block"
                        :class="{ closed: searchClosed && !search }"
                        placeholder="Searech"
                        prepend-inner-icon="mdi-magnify"
                        filled
                        rounded
                        clearable
                        dense
                    ></v-text-field>
                    <v-app-bar-nav-icon
                        @click.stop="drawer = !drawer"
                        class="d-block d-md-none"
                    ></v-app-bar-nav-icon>
                </v-row>
            </v-container>
        </v-app-bar>

        <!-- Mobile view -->
        <v-navigation-drawer v-model="drawer" fixed top temporary>
            <v-app-bar color="primary">
                <v-toolbar-title>
                    <inertia-link href="/">
                        <img
                            class="img-fluid"
                            style="height:30px"
                            src="assets/logo.svg"
                            alt=""
                        />
                    </inertia-link>
                </v-toolbar-title>
            </v-app-bar>

            <v-list nav dense>
                <v-list-item-group
                    v-model="group"
                    active-class="cyan--text text--accent-4"
                >
                    <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                        @click="changeLink(item.link)"
                    >
                        <v-list-item-content>
                            <v-list-item-title>{{
                                item.title
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    title: "Home",
                    link: "/"
                },
                {
                    title: "About",
                    link: "about"
                },
                {
                    title: "Service",
                    link: "service"
                },
                {
                    title: "Features",
                    link: "features"
                },
                {
                    title: "Contact",
                    link: "contact"
                }
            ],
            drawer: false,
            group: null,
            searchClosed: true,
            search: null
        };
    },
    methods: {
        changeLink(link) {
            this.$inertia.visit(link);
        }
    },
    watch: {
        group() {
            this.drawer = false;
        }
    }
};
</script>

<style>
.header .v-app-bar {
    /* background-color: #06415d !important; */
    color: #fff !important;
}
.header .theme--light.v-btn .v-btn__content {
    color: #fff !important;
    font-size: 14px;
    font-weight: 600;
}
.expanding-search {
    transition: 0.5s ease-in-out;
}
.expanding-search .v-input__slot {
    margin-bottom: 0 !important;
    cursor: pointer !important;
}
.expanding-search .v-input__slot:before,
.expanding-search .v-input__slot:after {
    border-color: transparent !important;
}
.expanding-search .v-input__prepend-inner {
    margin-left: -10px;
}
.expanding-search .v-input__prepend-inner i {
    color: white !important;
}
.expanding-search .v-text-field__details {
    display: none;
}
.expanding-search {
    max-width: 300px;
}
.expanding-search.closed {
    max-width: 45px;
}
@media (max-width: 1100px) {
    .expanding-search {
        max-width: 200px;
    }
    header .v-btn {
        padding: 0 5px !important;
    }
}
</style>

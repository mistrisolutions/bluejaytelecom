<template>
    <v-app>
        <!-- start-app-header-nav -->
        <app-header></app-header>

        <v-scroll-y-transition :hide-on-leave="true">
            <slot></slot>
        </v-scroll-y-transition>

        <!-- start-app-footer-nav -->
        <AppFooter></AppFooter>
    </v-app>
</template>

<script>
export default {
    components: {
        AppHeader: () => import("@/Shared/Frontend/Partials/Header"),
        AppFooter: () => import("@/Shared/Frontend/Partials/Footer")
    },
    props: {}
};
</script>

<template>
  <v-app>
    <app-header></app-header>
    <v-main class="grey lighten-4">
      <article>
        <slot></slot>
      </article>
    </v-main>
    <!-- start-app-footer-nav -->
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
export default {
  components: {
    AppHeader: () => import("@/Shared/Frontend/Partials/Header"),
    AppFooter: () => import("@/Shared/Frontend/Partials/Footer"),
  },
  props: {},
};
</script>

<template>
  <div class="header">
    <v-app-bar>
      <v-container>
        <v-row class="d-flex align-center">
          <v-toolbar-title>Bluejay Telecom</v-toolbar-title>

          <v-spacer></v-spacer>
          <v-btn
            v-for="(item,index) in items"
            :key="index"
            class="ml-2 d-none d-md-block"
            plain
            @click="changeLink(item.link)"
          >
          {{ item.title }}          
          </v-btn>
          <v-btn class="ml-2" outlined fab small color="teal">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
            class="d-block d-md-none"
          ></v-app-bar-nav-icon>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- Mobile view -->
    <!-- <v-navigation-drawer v-model="drawer" absolute top temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="item in items" :key="item" link>
            <v-list-item-content>
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title:"Home",
          link:'/'
        },
        {
          title:"About",
          link:'about'
        },
        {
          title:"Service",
          link:'service'
        },
        {
          title:"Contact",
          link:'contact'
        }
      ],
      drawer: false,
      group: null,
    };
  },
  methods:{
    changeLink(link){
      this.$inertia.visit(link)
    }
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style>
.header .v-app-bar{
  background-color: #06415d !important;
  color: #fff !important;
}
.header .theme--light.v-btn .v-btn__content {
    color: #fff !important;
    font-size: 16px;
    font-weight: 500;
}
</style>
<template>
  <div>
    <div class="footer light-blue lighten-4 pt-16">
      <v-container>
        <v-row justify="center">
          <v-col cols="6">
            <h1 class="text-center">Bluejay Telecom</h1>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12">
            <div>
              <v-card-text>
                <v-row align="center" justify="center">
                  <v-btn class="ma-2" v-for="(socail, i) in socials" :key="i">
                    <v-icon> {{ socail }} </v-icon>
                  </v-btn>
                </v-row>
              </v-card-text>
            </div>
          </v-col>
        </v-row>
        <hr class="my-10" />
        <v-row>
          <v-col>
            <p class="text-center">
              Copyright &copy; 2021 | All right reserved by Bluejay
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      socials: ["mdi-facebook", "mdi-twitter", "mdi-mail", "mdi-linkedin"],
    };
  },
  components: {
  },
};
</script>

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vue from 'vue'
import vuetify from "./vuetify";
import { App, plugin } from '@inertiajs/inertia-vue'
import { InertiaProgress } from '@inertiajs/progress'

//plugins
InertiaProgress.init()

Vue.use(plugin);

//global components
Vue.component('frontend-layout', () => import('@/Shared/Frontend/Layout'));

//Initials
const el = document.getElementById('app')

new Vue({
    vuetify,
  render: h => h(App, {
    props: {
      initialPage: JSON.parse(el.dataset.page),
      resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
    },
  }),
}).$mount(el)
// Import Vue
import Vue from 'vue'
// Import App Custom Styles
import AppStyles from './assets/static/sass/main.scss'
// Import Routes
import routes from './routes';
// Import App Component
import App from './App';
// Import VueRouter
import VueRouter from 'vue-router';
// Single Style Entry Point
import './index.css';
require("!style-loader!css-loader!postcss-loader!./../node_modules/moo-theme-core/lib/breakpoints.css");

// I don't know!
import MobComponents from './assets/vue/components/';

// Init VueRouter Plugin
Vue.use(VueRouter)
Vue.use(MobComponents)

let router = new VueRouter({
	mode: 'hash',
	base: window.location.pathname,
	routes
});
let Docs = Vue.component('app', App);

// Init App
Docs = new Docs({
 	el: '#app',
	template: '<app/>',	
	router
});
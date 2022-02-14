require('./bootstrap');
window.Vue = require('vue').default;
window.Fire = new Vue();

//import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Bootstrap an BootstrapVue CSS files (order is important)
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
import {
    Button,
    HasError,
    AlertError,
    AlertErrors,
    AlertSuccess
  } from 'vform/src/components/bootstrap5'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);


import VueToastr from "vue-toastr";
Vue.use(VueToastr, {
    defaultTimeout: 3000,
    defaultPosition: "toast-top-right",
    defaultProgressBar: false,
    defaultProgressBarValue: 0,
});

import moment from 'moment';

Vue.filter("date", function(created){
    return moment(created).format('MMMM Do YYYY, h:mm:ss a');
});



import Swal from 'sweetalert2';
window.swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

window.toast = Toast;

import { Form } from 'vform';

window.Form = Form;

Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
//import router from './component'
require('./component');


const app = new Vue({
    el: '#app',
});

  import Vue from 'vue'
  import App from './App.vue'
  import 'bootstrap/dist/css/bootstrap.min.css'

  import VueRouter from 'vue-router';
  Vue.use(VueRouter);

  import VueAxios from 'vue-axios';
  import axios from 'axios';

  Vue.use(VueAxios, axios);

  Vue.config.productionTip = false;

  import HomeComponent from './components/HomeComponent.vue';
  import CreateComponent from './components/CreateComponent.vue';
  import IndexComponent from './components/IndexComponent.vue';
  import EditComponent from './components/EditComponent.vue';
  import LoginComponent from './components/LoginComponent.vue';
  import RegisterComponent from './components/RegisterComponent.vue';

  const routes = [{
          name: 'register',
          path: '/register',
          component: RegisterComponent
      },
      {
          name: 'login',
          path: '/login',
          component: LoginComponent
      },
      {
          name: 'home',
          path: '/',
          component: HomeComponent
      },
      {
          name: 'create',
          path: '/create',
          component: CreateComponent
      },
      {
          name: 'posts',
          path: '/posts',
          component: IndexComponent
      },
      {
          name: 'edit',
          path: '/edit/:id',
          component: EditComponent
      }
  ];

  const router = new VueRouter({
      mode: 'history',
      routes: routes
  });

  new Vue(Vue.util.extend({
      router
  }, App)).$mount('#app');
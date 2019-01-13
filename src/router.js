import Vue from 'vue';
import Router from 'vue-router';
import RandomBeer from '@/components/randomBeer';
import Brewery from '@/components/brewery';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'RandomBeer',
    component: RandomBeer
  },
  {
    path: '/brewery/:id',
    name: 'Brewery',
    component: Brewery,
  }
];

export default new Router ({
  history: true,
  routes
});

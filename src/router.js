import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Test from './views/Test';
import Result from './views/Result';
import AnotherResult from './views/AnotherResult';
import TestBefore from './views/TestBefore';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/test_before',
      component: TestBefore,
    },
    {
      path: '/test',
      component: Test,
    },
    {
      path: '/result',
      component: Result,
    },
    {
      path: '/another',
      component: AnotherResult,
    },
    {
      path: '*',
      component: Home,
    },
  ],
});

import { createRouter, createWebHistory } from 'vue-router';

import Photo from '../components/Foto.vue';
import Stopwatch from '../components/Stopwatch.vue';
import Cuaca from '../components/Cuaca.vue';
import Lokasi from '../components/Lokasi.vue';

const routes = [
  { path: '/', component: Photo},
  { path: '/mylokasi', component: Lokasi },
  { path: '/mycuaca', component: Cuaca },
  { path: '/mystopwatch', component: Stopwatch},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
import { createMemoryHistory, createRouter } from 'vue-router';

import Home from './pages/home.vue';
import CardMatch from './pages/card-match/card-match.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/card-match', component: CardMatch },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history', // #이 붙어있는 이유는
	routes: [
		{
			// redirect page
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			component: () => import('@/views/LoginPage.vue'),
		},
		{
			path: '/signup',
			component: () => import('@/views/SignupPage.vue'),
		},
		{
			// 잘못된 url 입력시
			path: '*',
			component: () => import('@/views/NotFoundPage.vue'),
		},
	],
});

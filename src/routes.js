const About = (resolve) => System.import('./assets/vue/pages/about.vue').then(resolve);
const Home = (resolve) => System.import('./assets/vue/pages/home.vue').then(resolve);
// const DynamicPage = (resolve) => System.import('./assets/vue/pages/dynamic-route.vue').then(resolve);

const main = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/about',
		name: 'about',
		component: About
	},
	// {
	// 	path: '/dynamic-route/blog/:blogId/post/:postId/',
	// 	component: DynamicPage
	// },
	

	// catch all redirect
    { 
    	path: '*', 
    	redirect: '/'
    }
];

export default main;
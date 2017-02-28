<template>
	<div class="Container">
		<h2>Hello {{ greeting }}</h2>
	    <router-link to="/home">Go to Home</route-link>
	    <router-link to="/about">Go to About</router-link>
	</div>
</template>

<style scoped>
	:root {
    	--color-main: #D0DDB1;
  	}

	.Container{
		background-color: var(--color-main);
	}
</style>
<script>
	export default {
		name: 'vueNav',
	    data: () => {
	      return {
	      	greeting: 'Spencer'
	      }
	    }
	  };
</script>
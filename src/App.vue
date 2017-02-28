<template>
	<div class="Container">
	<vueNav></vueNav>
		<div class="Handler">
		Hello World!
		</div>
		<router-view></router-view>
	</div>
</template>

<style lang="postcss">
	@import './../node_modules/moo-theme-core/lib/breakpoints.css';

	:root {
		--color-main: #a3a3a3;
	}

	@media (--max-sm-viewport) {
		.Handler {
			background-color: var(--color-main);
		}
	}
</style>
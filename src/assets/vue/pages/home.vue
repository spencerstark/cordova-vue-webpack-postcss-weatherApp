<template>
	<div class="Container">
		<h1>Home</h1>
		hello!
	</div>
</template>

<style scoped lang="postcss">
	:root {
    	--color-main: #E7F5FD;
    	--color-secondary: #FEF8ED;
  	}

	.Container{
		background-color: var(--color-main);
	}

	@media (--max-sm-viewport) {
		.Container {
			background-color: var(--color-main);
		}
	}

</style>
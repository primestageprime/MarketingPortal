<script>
	import '../app.scss';
</script>

<header class="header">
	<div class="logo">PrimeStage</div>
	<div class="header-actions"><button class="button-secondary-white">Contact</button></div>
</header>
<main>
	<slot />
</main>

<style>
	main {
		flex: 1;
		overflow-y: auto;
	}
	.logo {
		font-size: 30px;
		font-weight: 100;
		letter-spacing: 0.1rem;
	}
	header {
		color: var(--color-text-secondary);
	}
</style>

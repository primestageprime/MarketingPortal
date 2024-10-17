<script>
	import PsLogoWithText from '$lib/components/PsLogoWithText.svelte';
	import '../app.scss';
</script>

<header class="header">
	<div class="logo"><PsLogoWithText /></div>
	<div class="header-actions"><button class="button-secondary-white">Contact</button></div>
</header>
<main>
	<slot />
</main>

<style>
	main {
		flex: 1;
		overflow: hidden;
	}
	.logo {
		font-size: 30px;
		font-weight: 100;
		letter-spacing: 0.1rem;
		display: flex;
		align-items: center;
	}
	header {
		color: var(--color-text-secondary);
	}
</style>

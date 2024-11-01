<script>
	import PsLogo2 from '$lib/components/icons/PsLogo2.svelte';
	import '../app.scss';
	import '../scss/index.scss';
</script>

<header class="header">
	<a href="/"
		><div class="logo">
			<PsLogo2 strokeColor={'#e06135'} outerStrokeColor={'#dca648'} height="6rem" width="6rem" />
			<h1 class="shiny-metallic-text-cyan">PrimeStage</h1>
		</div></a
	>
	<div class="header-actions">
		<a href="about" class="button-accent-gold nav-link">About</a>
		<a href="team" class="button-accent-orange nav-link">Meet The Team</a>
		<a href="contact" class="button-accent-red nav-link">Contact</a>
		<div class="menu">menu</div>
	</div>
</header>
<main>
	<slot />
</main>

<style lang="scss">
	@import '../scss/variables';

	.header-actions {
		display: flex;
		justify-content: flex-end;
		gap: 8px;
	}
	main {
		flex: 1;
		overflow: hidden;
	}

	a {
		text-decoration: none;

		.logo {
			font-size: 30px;
			letter-spacing: 0.1rem;
			display: flex;
			align-items: center;
			font-family: 'Righteous', sans-serif;
		}
	}

	.menu {
		display: none;
	}

	@media #{$small-screen} {
		.nav-link {
			display: none;
		}
		.menu {
			display: block;
		}
	}
	// Phone (599px and below)
	@media #{$phone-portrait} {
		.nav-link {
			display: none;
		}
		.menu {
			display: block;
		}
	}

	@media #{$tablet-portrait} {
		.nav-link {
			display: inline-block;
			transform: scale(0.9);
		}
	}
</style>

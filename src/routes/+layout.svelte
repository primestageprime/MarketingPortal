<script>
	import PsLogoWithText from '$lib/components/PsLogoWithText.svelte';
	import '../app.scss';
	import '../scss/index.scss';
</script>

<header class="header">
	<a href="/"><div class="logo"><PsLogoWithText /></div></a>
	<div class="header-actions">
		<a href="about" class="button-secondary-white nav-link">About</a>
		<a href="team" class="button-secondary-white nav-link">Meet The Team</a>
		<a href="contact" class="button-secondary-white nav-link">Contact</a>
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
	.logo {
		font-size: 30px;
		font-weight: 100;
		letter-spacing: 0.1rem;
		display: flex;
		align-items: center;
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

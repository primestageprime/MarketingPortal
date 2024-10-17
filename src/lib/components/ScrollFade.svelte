<script lang="ts">
	import { onMount } from 'svelte';
	import ArrowScroll from './ArrowScroll.svelte';

	let sections: NodeListOf<HTMLDivElement>;
	let scrollIndicator: HTMLDivElement;
	let scrollContainer: HTMLDivElement;

	// Function to check if scrolled to 90% of the container
	function handleScroll() {
		const scrollPosition = scrollContainer.scrollTop + scrollContainer.clientHeight;
		const containerHeight = scrollContainer.scrollHeight;

		if (scrollPosition >= containerHeight * 0.9) {
			scrollIndicator.style.opacity = '0';
		}
	}

	onMount(() => {
		scrollContainer.addEventListener('scroll', handleScroll);
		sections = document.querySelectorAll('.section') as NodeListOf<HTMLDivElement>;

		const observerOptions = {
			root: document.querySelector('.container'),
			rootMargin: '0px',
			threshold: 0.5
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate');
				} else {
					entry.target.classList.remove('animate');
				}
			});
		}, observerOptions);

		// Initially check each section's visibility
		sections.forEach((section) => {
			observer.observe(section);

			// Check if section is initially visible
			const bounding = section.getBoundingClientRect();
			if (bounding.top < window.innerHeight && bounding.bottom >= 0) {
				section.classList.add('animate');
			}
		});

		return () => {
			// Clean up the observer when component is unmounted
			sections.forEach((section) => observer.unobserve(section));
			scrollContainer.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div bind:this={scrollContainer} class="container">
	<div bind:this={scrollIndicator} class="scroll-indicator">
		<ArrowScroll />
	</div>
	<div class="section no-interaction">
		<div class="content-no-interaction">
			<h1 class="shiny-metallic-text">Custom web software development</h1>
		</div>
	</div>
	<div class="section no-interaction">
		<div class="content-no-interaction">
			<div class="card content-card">Scalable and Highly Available secure web applications</div>
		</div>
	</div>
	<div class="section no-interaction">
		<div class="content-no-interaction">
			<div class="card content-card">Mature Software Development process</div>
		</div>
	</div>
	<div class="section no-interaction">
		<div class="content-no-interaction">
			<div class="card content-card">Client Oriented User Experience</div>
		</div>
	</div>
	<!-- <div class="section no-interaction">
		<div class="content-no-interaction">
			<div class="content-no-interaction">
				<div class="card">Scalable and Highly Available secure web applications</div>
			</div>
		</div>
	</div>
	<div class="section no-interaction">
		<div class="content-no-interaction">
			<div class="content-no-interaction">
				<div class="card">Scalable and Highly Available secure web applications</div>
			</div>
		</div>
	</div> -->
	<div class="section">
		<div class="content">
			<button class="button-primary">Click me</button>
		</div>
	</div>
	<!-- Add more sections as needed -->
</div>

<style>
	.container {
		height: 100%; /* Adjust as needed */
		overflow-y: auto;
		position: relative;
	}

	.section {
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 0;
		transition: all 1s ease;
		background-color: transparent;
		height: 100%;
	}

	.section.no-interaction {
		height: 200%;
	}

	.scroll-indicator {
		position: fixed;
		top: 90%;
		left: 50%;
		transition: all 1s ease;
	}

	.content-no-interaction {
		position: fixed;
		height: 90vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 10vh;
		left: 0;
		pointer-events: none; /* Allows interaction with underlying elements */
		padding: 1rem;
	}

	.content-card {
		height: 100%;
		width: 100%;
		background-color: transparent;
	}

	:global(.section.animate) {
		opacity: 1;
	}

	.shiny-metallic-text {
		font-family: 'Arial', sans-serif;
		font-size: 4rem;
		font-weight: bold;
		background: linear-gradient(135deg, #4667ae, #7792c6, #c0d2fb, #7792c6, #4667ae, #224795);
		background-size: 300%; /* Increased size for a smoother transition */
		color: transparent;
		animation: shine 6s infinite ease-in-out;

		/* Vendor prefixes for compatibility */
		-webkit-background-clip: text; /* Safari, Chrome */
		-moz-background-clip: text; /* Firefox (not always needed) */
		-ms-background-clip: text; /* Internet Explorer */
		-o-background-clip: text; /* Older Opera */
		background-clip: text; /* Standard */
	}

	@keyframes shine {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 75% 25%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@keyframes fadeInOut {
		0% {
			opacity: 0;
		}
		15% {
			opacity: 1;
		}
		85% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	@media (orientation: landscape) {
		.content-no-interaction {
			height: 90vh;
			top: 10vh;
		}
	}
</style>

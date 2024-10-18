<script lang="ts">
	import { onMount } from 'svelte';
	import * as R from 'ramda';
	import ArrowScroll from './ArrowScroll.svelte';

	let sections: NodeListOf<HTMLDivElement>;
	let scrollIndicator: HTMLDivElement;
	let scrollContainer: HTMLDivElement;
	let infoHeader: HTMLElement;

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
					if (R.includes(entry.target.id, ['portal-start', 'contact-form'])) {
						infoHeader.style.opacity = '0';
					} else {
						infoHeader.style.opacity = '1';
					}
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
	<header bind:this={infoHeader} class="info-header">
		<h2 class="shiny-metallic-text finite-shine">Why partner with PrimeStage?</h2>
	</header>
	<div bind:this={scrollIndicator} class="scroll-indicator">
		<ArrowScroll />
	</div>
	<div class="section no-interaction" id="portal-start">
		<div class="content-no-interaction portal-start">
			<h2 class="shiny-metallic-text infinite-shine">Custom web software development</h2>
		</div>
	</div>
	<div class="section no-interaction">
		<div class="content-no-interaction">
			<div class="card content-card">
				<h3>A Proven Team of Web Experts</h3>
				<ul>
					<li>Decades of combined experience</li>
					<li>Well integrated, pre built team</li>
					<li>Eliminates the need to build or manage your own</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="section no-interaction">
		<div class="content-no-interaction">
			<div class="card content-card">
				<h3>Mature, Efficient Development Process</h3>
				<ul>
					<li>
						We have honed our software development process over years of delivering successful
						enterprise projects
					</li>
					<li>Structured yet flexible methodology</li>
					<li>Strong focus on scalability, security, and performance</li>
					<li>Full lifecycle development support</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="section no-interaction">
		<div class="content-no-interaction">
			<div class="card content-card">
				<h3>Client Oriented User Experience</h3>
				<ul>
					<li>
						<strong>User-Centered Design: </strong>We focus on understanding your users’ needs,
						behaviors, and preferences to create intuitive, user-friendly interfaces.
					</li>
					<li>
						<strong>Business Familiarity: </strong>We use the business terms, language, and visuals
						that your users and stakeholders are already comfortable with, minimizing learning
						curves.
					</li>
					<li>
						<strong>Tailored Solutions: </strong>Whether it is custom workflows, unique business
						logic, or specialized functionality, we build systems that align perfectly with your
						operations.
					</li>
					<li>
						<strong>Iterative Feedback: </strong>Throughout the development process, we work closely
						with you to refine and adjust based on user feedback, ensuring the final product truly
						meets your needs.
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="section" id="contact-form">
		<div class="content">
			<button class="button-primary">Contact Us</button>
		</div>
	</div>
	<!-- Add more sections as needed -->
</div>

<style lang="scss">
	@import '../../scss/variables';
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
		transition: all 0.5s ease;
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

	.info-header {
		height: 10vh;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 10vh;
		left: 0;
		opacity: 0;
		transition: all 1s ease;
		padding: 0.5rem;
	}

	.content-no-interaction {
		position: fixed;
		height: 80vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		top: 20vh;
		left: 0;
		pointer-events: none; /* Allows interaction with underlying elements */
		padding: 1rem;
	}

	.content-no-interaction.portal-start {
		height: 90vh;
		top: 10vh;
	}

	.content-card {
		background-color: transparent;
		height: 100%;
		width: 70%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	:global(.section.animate) {
		opacity: 1;
	}

	.shiny-metallic-text {
		font-family: 'Arial', sans-serif;
		font-size: 4rem;
		font-weight: bold;
		background: linear-gradient(135deg, #4667ae, #7792c6, #c0d2fb, #7792c6, #4667ae, #224795);
		background-size: 400%; /* Increased size for a smoother transition */
		color: transparent;

		/* Vendor prefixes for compatibility */
		-webkit-background-clip: text; /* Safari, Chrome */
		-moz-background-clip: text; /* Firefox (not always needed) */
		-ms-background-clip: text; /* Internet Explorer */
		-o-background-clip: text; /* Older Opera */
		background-clip: text; /* Standard */
	}

	.infinite-shine {
		animation: shine 6s infinite ease-in-out;
	}

	.shiny-metallic-text.finite-shine {
		width: 80%;
		animation: shine 3s linear 1;
		text-align: center;
		font-size: 3rem;
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
			height: 80vh;
			top: 20vh;
		}
	}

	// Tablet (768px and below)
	@media #{$tablet-portrait} {
		html {
			font-size: 15px; // Slightly smaller font size
		}

		.header,
		.footer {
			padding: 0.8rem 1.5rem; // Reduce padding
			font-size: 0.9rem; // Smaller font size for header/footer
		}
		.button-primary,
		.button-secondary,
		.button-secondary-white {
			padding: 0.65rem 1.25rem; // Slightly smaller padding
			font-size: 0.9rem; // Slightly smaller font size
		}
	}

	// Phone (480px and below)
	@media #{$small-screen} {
		.shiny-metallic-text {
			font-size: 2rem;
		}
	}
	// Phone (599px and below)
	@media #{$phone-portrait} {
		.shiny-metallic-text {
			font-size: 2rem;
		}
	}

	@media #{$tablet-landscape} {
		.shiny-metallic-text {
			font-size: 2rem;
		}
	}

	@media #{$phone-landscape} {
		.shiny-metallic-text {
			font-size: 2rem;
		}
	}
</style>

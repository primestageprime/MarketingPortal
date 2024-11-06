<script lang="ts">
	import { onMount } from 'svelte';
	import ArrowScroll from './ArrowScroll.svelte';
	import PeopleGroup from './icons/PeopleGroup.svelte';
	import HeartUser from './icons/HeartUser.svelte';
	import Process from './icons/Process.svelte';

	let observedContent: NodeListOf<HTMLDivElement>;
	let scrollIndicator: HTMLDivElement;
	let scrollContainer: HTMLDivElement;

	// Function to check if scrolled to 90% of the container
	function handleScroll() {
		const scrollPosition = scrollContainer.scrollTop + scrollContainer.clientHeight;
		const containerHeight = scrollContainer.scrollHeight;

		if (scrollPosition >= containerHeight * 0.1) {
			scrollIndicator.style.opacity = '0';
		}
	}

	onMount(() => {
		scrollContainer.addEventListener('scroll', handleScroll);
		observedContent = document.querySelectorAll('.observe-node') as NodeListOf<HTMLDivElement>;

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

		// Initially check each node's visibility
		observedContent.forEach((node) => {
			observer.observe(node);

			// Check if node is initially visible
			const bounding = node.getBoundingClientRect();
			if (bounding.top < window.innerHeight && bounding.bottom >= 0) {
				node.classList.add('animate');
			}
		});

		return () => {
			// Clean up the observer when component is unmounted
			observedContent.forEach((node) => observer.unobserve(node));
			scrollContainer.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div class="vertical-overflow" bind:this={scrollContainer}>
	<div bind:this={scrollIndicator} class="scroll-indicator">
		<ArrowScroll />
	</div>
	<div class="observe-node top-section" id="portal-start">
		<h2 class="shiny-metallic-text infinite-shine bold font-size-4">Custom web development</h2>
	</div>
	<div class="observe-node responsive-flex">
		<div class="content">
			<div class="content-header"><h1>A Proven Team of Web Experts</h1></div>
			<div class="content-body">
				<ul>
					<li>
						<strong>Well integrated, pre built team: </strong>Eliminate the need to build or manage
						your own software team
					</li>
					<li>
						<strong>Decades of combined experience: </strong>Our team members' experience ranges
						from 5 to over 20+ years
					</li>
				</ul>
			</div>
		</div>
		<div class="icon-content">
			<PeopleGroup height="50%" fill="white" />
		</div>
	</div>
	<div class="observe-node responsive-flex">
		<div class="content">
			<div class="content-header"><h1>Mature, Efficient Development Process</h1></div>
			<div class="content-body">
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
		<div class="icon-content">
			<Process height="50%" fill="white" />
		</div>
	</div>
	<div class="observe-node responsive-flex">
		<div class="content">
			<div class="content-header"><h1>Client Oriented User Experience</h1></div>
			<div class="content-body">
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
		<div class="icon-content">
			<HeartUser height="50%" fill="white" />
		</div>
	</div>
	<div class="observe-node responsive-flex" id="contact-form">
		<div class="icon-content">
			<a href="contact" class="button-secondary-white">Contact Us</a>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../scss/variables';

	.observe-node {
		display: flex;
		justify-content: center;
		align-items: center;

		transition: all 0.2s ease;
		height: 70%;
		width: 100%;
		opacity: 1;
	}

	.observe-node:nth-child(odd) {
		background-color: var(--color-info-section-background);
	}

	.observe-node.top-section {
		display: flex;
		height: 90vh;
		background-color: transparent;
	}

	.scroll-indicator {
		position: fixed;
		top: 90%;
		left: 50%;
		transition: all 1s ease;
	}

	.content {
		color: var(--color-text-secondary);
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding: 1rem;

		h1 {
			font-family: 'Righteous', sans-serif;
		}
	}

	.content-header {
		padding: 8px 16px;
		flex: 1;
	}

	.content-body {
		flex: 3;
	}

	.icon-content {
		flex: 1;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	:global(.observe-node.animate) {
		opacity: 1;
	}

	.infinite-shine {
		animation: shine 6s infinite ease-in-out;
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

	@media #{$tablet-portrait} {
		.shiny-metallic-text {
			font-size: 2rem;
		}
	}

	@media #{$phone-landscape} {
		.shiny-metallic-text {
			font-size: 2rem;
		}
	}

	ul {
		list-style-type: none; /* Remove bullet points */
		padding: 0; /* Remove default padding */
		margin: 0; /* Remove default margin */
	}

	ul li {
		font-size: 1.2rem;
		margin-bottom: 8px; /* Add space between items */
		padding: 6px 9px; /* Add padding inside the item */
		border-radius: 10%; /* Rounded corners */
		transition:
			background-color 0.3s ease,
			box-shadow 0.3s ease; /* Smooth transitions */
	}

	ul li:hover {
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow on hover */
	}
</style>

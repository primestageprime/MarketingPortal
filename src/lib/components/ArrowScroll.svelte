<div class="arrow-scroll">
	<div class="arrow" />
	<div class="arrow" />
	<div class="arrow" />
</div>

<style lang="scss">
	.arrow-scroll {
		position: relative;
		height: 2em;
	}

	.arrow {
		border: solid var(--color-button-primary);
		border-width: 0 3px 3px 0;
		display: inline-block;
		padding: 1rem;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%) rotate(45deg);
	}

	.arrow:nth-child(2) {
		animation: arrow1 2s ease-in-out infinite;
	}

	.arrow:nth-child(3) {
		animation: arrow2 2s ease-in-out infinite;
	}

	@keyframes scroll {
		0% {
			bottom: 80%;
			opacity: 1;
		}
		100% {
			bottom: 20%;
			opacity: 0;
		}
	}

	@keyframes arrow1 {
		100% {
			opacity: 0;
			top: 100%;
		}
	}

	@keyframes arrow2 {
		100% {
			opacity: 0;
			top: 50%;
		}
	}

	@media (orientation: landscape) {
		.arrow {
			padding: 0.6rem;
		}
	}

	// Tablet (768px and below)
	@media (max-width: 768px) {
		.arrow {
			padding: 0.8rem;
		}
	}

	// Phone (480px and below)
	@media (max-width: 480px) {
		.arrow {
			padding: 0.6rem;
		}
	}
</style>

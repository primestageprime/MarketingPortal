<script lang="ts">
	type BulletPoint = {
		label: string | undefined;
		content: string;
	};

	export let header: string;
	export let bulletpoints: BulletPoint[] = [];
</script>

<div class="home-section responsive-flex">
	<div class="content">
		<div class="content-header"><h1>{header}</h1></div>
		<div class="content-body">
			<ul>
				{#each bulletpoints as bulletpoint}
					<li>
						{#if bulletpoint.label}
							<strong>{bulletpoint.label}: </strong>
						{/if}
						<p>{bulletpoint.content}</p>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="icon-content">
		<slot name="icon-content" />
	</div>
</div>

<style lang="scss">
	.home-section {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 70%;
		width: 100%;
	}

	.home-section:nth-child(odd) {
		background-color: var(--color-info-section-background);
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

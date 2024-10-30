<script>
	export let imageSrc;
	export let aboutMe;
</script>

<div class="responsive-flex employee-card">
	<img src={imageSrc} alt="Employee avatar" loading="lazy" />
	<div class="about-me">{aboutMe}</div>
</div>

<style>
	.employee-card {
		max-height: 600px;
		gap: 1rem;
	}

	.employee-card img {
		width: 200px;
		height: 200px;
		object-fit: cover;
		border-radius: 50%;
	}

	.about-me {
		max-width: 600px;
		height: 100%;
		overflow: auto;
		padding: 8px;
	}
</style>

<script>
	export let imageSrc;
	export let aboutMe;
	export let fullName;
</script>

<div class="responsive-flex employee-card">
	<img src={imageSrc} alt="Employee avatar" loading="lazy" />
	<div class="d-fc">
		<div class="fullName">{fullName}</div>
		<div class="about-me"><p>{aboutMe}</p></div>
	</div>
</div>

<style>
	.employee-card {
		gap: 1rem;
	}

	.employee-card img {
		width: 300px;
		height: 300px;
		object-fit: cover;
		border-radius: 30%;
	}
	.fullName {
		padding: 8px;
		font-family: 'Righteous', sans-serif;
		font-size: 2rem;
	}

	.about-me {
		max-width: 600px;
		height: 100%;
		overflow: auto;
		padding: 8px;
	}
</style>

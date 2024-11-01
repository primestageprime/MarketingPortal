<script>
	import EmployeeInfo from '$lib/components/layout/EmployeeInfo.svelte';

	const ipsum = `Lorem ipsum odor amet, consectetuer adipiscing elit. Praesent rutrum sit consequat commodo dapibus imperdiet parturient faucibus. Adipiscing nibh enim adipiscing primis vivamus, dui ultricies ornare. Donec maecenas ultrices id tortor lobortis platea? Velit dapibus sit consequat imperdiet blandit varius curabitur integer molestie. Quisque velit ridiculus duis senectus etiam netus. Feugiat eros aptent natoque phasellus ante eu tempor facilisis.

Risus hendrerit justo natoque metus tempus vehicula. Blandit magna tortor luctus faucibus, id potenti himenaeos nibh curae. Platea fermentum at feugiat vivamus posuere condimentum. Ut ligula vulputate placerat nascetur; quis curabitur cras ad. Donec maecenas natoque, semper semper urna elementum eu. Congue vulputate tortor sem curae donec. Lorem ipsum odor amet, consectetuer adipiscing elit. Praesent rutrum sit consequat commodo dapibus imperdiet parturient faucibus. Adipiscing nibh enim adipiscing primis vivamus, dui ultricies ornare. Donec maecenas ultrices id tortor lobortis platea? Velit dapibus sit consequat imperdiet blandit varius curabitur integer molestie. Quisque velit ridiculus duis senectus etiam netus. Feugiat eros aptent natoque phasellus ante eu tempor facilisis.`;
</script>

<div class="vertical-overflow">
	<div class="employee-info-section d-fr">
		<EmployeeInfo imageSrc={'/images/Chunk.png'} aboutMe={ipsum} />
	</div>
	<div class="employee-info-section d-fr">
		<EmployeeInfo imageSrc={'/images/Roo.png'} aboutMe={ipsum} />
	</div>
	<div class="employee-info-section d-fr">
		<EmployeeInfo imageSrc={'/images/Fran.png'} aboutMe={ipsum} />
	</div>
	<div class="employee-info-section d-fr">
		<EmployeeInfo imageSrc={'/images/Octo.png'} aboutMe={ipsum} />
	</div>
	<div class="employee-info-section d-fr">
		<EmployeeInfo imageSrc={'/images/Syl.png'} aboutMe={ipsum} />
	</div>
	<div class="employee-info-section d-fr">
		<EmployeeInfo imageSrc={'/images/Slizzy.png'} aboutMe={ipsum} />
	</div>
</div>

<style lang="scss">
	.employee-info-section {
		align-items: center;
		justify-content: center;
		height: 60%;
		color: var(--color-text-secondary);
	}
	.employee-info-section:nth-child(odd) {
		background-color: var(--color-team-section-background);
	}
</style>

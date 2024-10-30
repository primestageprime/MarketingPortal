<div class="w-100 h-100 d-fr jc-c ai-c">
	<form class="contact-form d-fc ph-16 pv-8">
		<label for="name">Name</label>
		<input required name="name" placeholder="Name" type="text" />
		<label for="email">Email</label>
		<input required name="email" type="email" placeholder="Email" />
		<label for="message">Message</label>
		<textarea
			required
			name="message"
			placeholder="Let us know how we can help launch your vision into outer orbit."
		/>
		<button class="button-primary" type="submit">Submit</button>
	</form>
</div>

<!-- .error-message {
		color: $error-color;
		font-size: 14px;
		margin-top: 4px;
	} -->

<style lang="scss">
	.contact-form {
		max-width: 600px;
		flex: 1;
	}

	/* Variables for easy theme customization */
	$primary-color: #4a90e2;
	$error-color: #d32f2f;
	$border-color: #cccccc;
	$background-color: #f9f9f9;
	$font-color: #333333;
	$label-color: #868686;
	$focus-color: $primary-color;
	$disabled-bg: #e0e0e0;
	$disabled-color: #757575;
	$border-radius: 4px;
	$input-padding: 12px;

	/* Accessible focus styles */
	@mixin focus-outline {
		outline: 3px solid $focus-color;
		outline-offset: 2px;
	}

	/* Base input styles */
	input[type='text'],
	input[type='email'],
	textarea {
		margin-bottom: 24px;
		width: 100%;
		padding: $input-padding;
		border: 1px solid $border-color;
		border-radius: $border-radius;
		background-color: $background-color;
		color: $font-color;
		font-size: 16px;
		line-height: 1.5;
		transition:
			border-color 0.2s ease-in-out,
			box-shadow 0.2s ease-in-out;

		&:focus {
			@include focus-outline;
			border-color: $focus-color;
		}

		&:disabled {
			background-color: $disabled-bg;
			color: $disabled-color;
			cursor: not-allowed;
		}

		/* High contrast for errors */
		&.error {
			border-color: $error-color;
		}

		&::placeholder {
			color: #999;
		}
	}

	/* Specific styles for textarea */
	textarea {
		min-height: 150px;
		resize: vertical;
	}

	/* Labels with proper spacing */
	label {
		display: block;
		margin-bottom: 8px;
		font-weight: 600;
		color: $label-color;
	}
</style>

<script>
    import { enhance } from '$app/forms';
  // Basic state variables
  let message = "Notification Signup";
</script>

<section class="notification-section">
  <div class="container">
    <h2>{message}</h2>
    <form method="POST" class="contact-form d-fc ph-16 pv-8" use:enhance>
		<label for="phone">Phone</label>
		<input required name="phone" type="tel" placeholder="Phone" />
		<button class="button-secondary-white" type="submit">Consent</button>
	</form>
    <p>By submitting this form and signing up for texts, you consent to receive status notifications. Consent is not a condition of purchase. Msg & data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP or clicking the unsubscribe link (where available).</p>
  </div>
</section>

<style>
  .notification-section {
    padding: 2rem 0;
    display: flex;
    justify-content: center;
  }
  
  .container {
    width: 80%;
    max-width: 800px;
    padding: 2rem;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  h2 {
    margin-bottom: 1rem;
    color: var(--color-primary, #333);
    font-weight: 600;
  }
  
  .contact-form {
    margin-bottom: 1.5rem;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  input[type="tel"] {
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    width: 100%;
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    text-align: left;
  }
  
  .consent-checkbox-group {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    text-align: left;
  }
  
  .consent-checkbox-label {
    display: inline;
    margin-left: 0.5rem;
    font-weight: normal;
  }
  
  .button-secondary-white {
    padding: 0.75rem 1.5rem;
    background-color: var(--color-primary, #0056b3);
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .button-secondary-white:hover {
    background-color: var(--color-primary-dark, #003d7a);
  }
  
  p {
    color: var(--color-text-secondary, #666);
    line-height: 1.5;
  }
</style>

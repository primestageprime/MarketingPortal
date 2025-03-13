<script>
  import { slide } from "svelte/transition";
  
  let phoneNumber = "";
  let consentChecked = false;
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!consentChecked) {
      alert("Please check the consent box to continue");
      return;
    }
    
    if (!phoneNumber || phoneNumber.trim() === "") {
      alert("Please enter a valid phone number");
      return;
    }
    
    // Here you would typically send the data to your backend
    console.log("Form submitted with:", { phoneNumber, consentChecked });
    alert("Thank you for signing up for notifications!");
    
    // Reset form
    phoneNumber = "";
    consentChecked = false;
  };
</script>

<section transition:slide class="vertical-overflow">
  <div class="notification-container">
    <h2>Notification Signup</h2>
    
    <form on:submit={handleSubmit}>
      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          placeholder="(123) 456-7890"
          bind:value={phoneNumber}
          required
        />
      </div>
      
      <div class="form-group consent-group">
        <input 
          type="checkbox" 
          id="consent" 
          name="consent"
          bind:checked={consentChecked}
        />
        <label for="consent" class="consent-text">
          By submitting this form and signing up for texts, you consent to receive status notifications from Twilio autodialer. Consent is not a condition of purchase. Msg & data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP or clicking the unsubscribe link (where available). <a href="/privacy">Privacy Policy</a>
        </label>
      </div>
      
      <button type="submit" class="submit-button">Sign Up for Notifications</button>
    </form>
  </div>
</section>

<style lang="scss">
  section.vertical-overflow {
    display: flex;
    align-items: center;
    grid-gap: 1rem;
    flex-direction: column;
    padding: 2rem 0;
  }
  
  .notification-container {
    width: 60%;
    max-width: 800px;
    color: var(--color-text-secondary);
    padding: 2rem;
    background-color: var(--color-background-secondary, #f5f5f5);
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  input[type="tel"] {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--color-border, #ccc);
    border-radius: 4px;
    font-size: 1rem;
  }
  
  .consent-group {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
  }
  
  input[type="checkbox"] {
    margin-top: 0.25rem;
  }
  
  .consent-text {
    font-size: 1rem;
    line-height: 1.5;
    color: #333333;
  }
  
  .submit-button {
    display: block;
    width: 100%;
    padding: 0.75rem;
    background-color: var(--color-primary, #48f3ff);
    color: #FFFFFF;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
    
    &:hover {
      background-color: var(--color-primary-light, #7ff8ff);
    }
    
    &:focus {
      outline: 3px solid #0056b3;
      outline-offset: 2px;
    }
    
    &:disabled {
      background-color: var(--color-disabled, #ccc);
      color: #666;
      cursor: not-allowed;
    }
  }
  
  a {
    color: #0056b3;
    text-decoration: underline;
    font-weight: 500;
    
    &:hover, &:focus {
      text-decoration: underline;
      color: #003d7a;
    }
  }
  
  input:focus {
    outline: 3px solid #0056b3;
    outline-offset: 2px;
  }
</style> 
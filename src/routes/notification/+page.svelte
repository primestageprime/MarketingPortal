<script>
  // Basic state variables
  let message = "Notification Signup";
</script>

<section class="notification-section">
  <div class="container">
    <h2>{message}</h2>
    <p>This page will allow users to sign up for notifications.</p>
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
  }
</style>

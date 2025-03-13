<script>
    import { slide } from "svelte/transition";
  </script>
  
  <section transition:slide class="vertical-overflow">
    <section>
      <article>
        <h2>Privacy Policy</h2>
        <p>
        At PrimeStage, we take your privacy seriously. This policy outlines how we collect, use, and protect your data when you use our services.

        We collect only the information necessary to provide our monitoring and notification services:
        • System and asset performance metrics
        • Alert configurations and notification preferences 
        • Contact information for authorized users
        • Authentication credentials
        • Usage logs and audit trails

        This data is stored securely using industry-standard encryption and access controls. We do not sell or share your information with third parties except where required to provide our core services (such as sending notifications) or as required by law.

        Our monitoring systems process your asset data in real-time to detect issues and trigger alerts. This automated processing is essential to our service but is limited to the specific metrics and thresholds you configure.

        You maintain control of your data - you can review, export, or delete your information at any time through your account settings. When you discontinue our service, we retain data only as long as required by law or necessary for security auditing.

        We use security best practices including:
        • Encryption of data in transit and at rest
        • Regular security audits and penetration testing
        • Role-based access controls
        • Secure development practices
        • Employee security training

        We'll notify you promptly of any security incidents that may affect your data. For questions about our privacy practices, contact our privacy team at privacy@primestagetechnology.com.

        This policy may be updated periodically. We'll notify you of material changes and maintain previous versions for reference.

        Last updated: January 2025
        </p>
      </article>
    </section>
  </section>
  
  <style lang="scss">
    section.vertical-overflow {
      display: flex;
      align-items: center;
      grid-gap: 1rem;
      flex-direction: column;
    }
    section.vertical-overflow section {
      display: flex;
      grid-gap: 1rem;
      justify-content: flex-start;
      flex-direction: column;
      width: 60%;
      color: var(--color-text-secondary);
      padding: 16px;
    }
    article {
      display: flex;
      grid-gap: 1rem;
      justify-content: flex-start;
      flex-direction: column;
    }
    ul {
      padding: 0 1.3rem;
    }
  </style>
  
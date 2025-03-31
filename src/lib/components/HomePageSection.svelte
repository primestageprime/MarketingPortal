<script lang="ts">
  type BulletPoint = {
    label: string | undefined;
    content: string;
  };

  export let header: string;
  export let bulletpoints: BulletPoint[] = [];
</script>

<div class="home-section">
  <div class="content-header"><h1>{header}</h1></div>
  <div class="responsive-flex">
    <div class="content">
      <ul>
        {#each bulletpoints as bulletpoint}
          <li>
            {#if bulletpoint.label}
              <strong>{bulletpoint.label}</strong>
            {/if}
            <p>{bulletpoint.content}</p>
          </li>
        {/each}
      </ul>
    </div>
    <div class="icon-content">
      <slot name="icon-content" />
    </div>
  </div>
</div>

<style lang="scss">
  @import "$scss/_variables.scss";

  .responsive-flex {
    width: 60%;
  }

  .home-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    padding: 24px;
    gap: 3rem;
  }

  .home-section:nth-child(even) {
    background-color: var(--color-info-section-background);
  }

  h1 {
    font-size: 3rem;
    color: var(--color-text-secondary);
    text-align: center;
  }

  strong {
    font-size: 1.6rem;
    margin-bottom: 16px;
  }
  .content {
    color: var(--color-text-secondary);
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem;
  }

  .content-header {
    padding: 8px 16px;
  }

  .icon-content {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  ul {
    list-style-type: none; /* Remove bullet points */
    padding: 0; /* Remove default padding */
    margin: 0; /* Remove default margin */
  }

  ul li {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
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

  @media #{$small-screen} {
    ul li {
      font-size: 1.2rem;
    }
    .responsive-flex {
      width: 100%;
    }
  }
  // Phone (599px and below)
  @media #{$phone-portrait} {
    ul li {
      font-size: 1.2rem;
    }
    .responsive-flex {
      width: 100%;
    }
  }

  @media #{$tablet-landscape} {
    ul li {
      font-size: 1rem;
    }
    .responsive-flex {
      width: 100%;
    }
  }

  @media #{$tablet-portrait} {
    ul li {
      font-size: 1rem;
    }
    .responsive-flex {
      width: 100%;
    }
  }

  @media #{$phone-landscape} {
    ul li {
      font-size: 1rem;
    }
    .responsive-flex {
      width: 100%;
    }
  }

  @media #{$high-res-desktop} {
    .responsive-flex {
      width: 40%;
    }
  }
</style>

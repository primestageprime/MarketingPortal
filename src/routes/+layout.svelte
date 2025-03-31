<script>
  import DropdownMenu from "$lib/components/DropdownMenu.svelte";
  import NavMenu from "$lib/components/icons/NavMenu.svelte";
  import PsLogo2 from "$lib/components/icons/PsLogo2.svelte";
  import { onMount } from "svelte";
  import "../app.scss";
  import "../scss/index.scss";

  // Function to dynamically set viewport height
  function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  // Set up the function on mount and resize
  onMount(() => {
    setViewportHeight();
    window.addEventListener("resize", setViewportHeight);

    return () => {
      window.removeEventListener("resize", setViewportHeight);
    };
  });
</script>

<main>
  <header class="header">
    <a href="/"
      ><div class="logo">
        <PsLogo2 strokeColor={"#cbfcff"} outerStrokeColor={"#cbfcff"} />
        <h1 class="company-name font-size-2">PrimeStage</h1>
      </div></a
    >
    <nav class="header-actions">
      <a href="about" class="button-accent-gold nav-link">About</a>
      <a href="team" class="button-accent-orange nav-link">Meet The Team</a>
      <a href="contact" class="button-accent-red nav-link">Contact</a>
      <div class="menu">
        <DropdownMenu
          items={[
            { label: "About", href: "/about" },
            { label: "Meet The Team", href: "/team" },
            { label: "Contact", href: "/contact" },
          ]}
        >
          <NavMenu fill="white" width="30px" height="30px" slot="trigger" />
        </DropdownMenu>
      </div>
    </nav>
  </header>
  <slot />
  <footer class="footer">
    <div class="container">
      <div class="footer-links">
        <a href="/terms">Terms & Conditions</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
      <p>© 2025 PrimeStage, Inc. All rights reserved.</p>
    </div>
  </footer>
</main>

<style lang="scss">
  @import "$scss/variables";

  .company-name {
    color: #48f3ff;
    font-weight: 400;
  }

  .header-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }

  a {
    text-decoration: none;

    .logo {
      letter-spacing: 0.1rem;
      display: flex;
      align-items: center;
      font-family: "Righteous", sans-serif;
    }
  }

  .menu {
    display: none;
  }

  @media #{$small-screen} {
    .nav-link {
      display: none;
    }
    .menu {
      display: block;
    }
  }
  // Phone (599px and below)
  @media #{$phone-portrait} {
    .nav-link {
      display: none;
    }
    .menu {
      display: block;
    }
  }

  @media #{$phone-landscape} {
    .nav-link {
      display: none;
    }
    .menu {
      display: block;
    }

    .font-size-3 {
      font-size: 2rem;
    }
  }

  @media #{$tablet-portrait} {
    .nav-link {
      display: none;
      transform: scale(0.9);
    }
    .menu {
      display: block;
    }
  }
  @media #{$tablet-landscape} {
    .nav-link {
      display: none;
      transform: scale(0.9);
    }
    .menu {
      display: block;
    }

    .font-size-3 {
      font-size: 2rem;
    }
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid var(--color-border, #eee);
  }

  .container {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-links {
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
  }

  .footer-links a {
    color: var(--color-text-secondary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    color: var(--color-text-secondary);
    font-size: 0.9rem;
  }
</style>

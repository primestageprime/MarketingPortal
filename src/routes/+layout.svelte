<script>
  import DropdownMenu from "$lib/components/DropdownMenu.svelte";
  import NavMenu from "$lib/components/icons/NavMenu.svelte";
  import PsLogo2 from "$lib/components/icons/PsLogo2.svelte";
  import "../app.scss";
  import "../scss/index.scss";
</script>

<header class="header">
  <a href="/"
    ><div class="logo">
      <PsLogo2 strokeColor={"#cbfcff"} outerStrokeColor={"#cbfcff"} />
      <h1 class="company-name bold font-size-3">PrimeStage</h1>
    </div></a
  >
  <div class="header-actions">
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
  </div>
</header>
<main>
  <slot />
</main>

<style lang="scss">
  @import "$scss/variables";

  .company-name {
    color: #48f3ff;
  }

  .header-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
  main {
    flex: 1;
    overflow-y: auto;
    min-height: 90vh; // Subtract header height if needed
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
</style>

<script lang="ts">
  import PeopleGroup from "./icons/PeopleGroup.svelte";
  import HeartUser from "./icons/HeartUser.svelte";
  import Process from "./icons/Process.svelte";
  import HomePageSection from "./HomePageSection.svelte";
  import CircuitBoard from "./icons/CircuitBoard.svelte";
  import { slide } from "svelte/transition";
</script>

<div transition:slide>
  <div class="home-section top-section" id="portal-start">
    <h2 class="shiny-metallic-text infinite-shine bold font-size-4">Custom web development</h2>
  </div>
  <HomePageSection
    header={"A Proven Team of Web Experts"}
    bulletpoints={[
      {
        label: "Well integrated, pre built team",
        content: "Eliminate the need to build or manage your own software team",
      },
      {
        label: "Decades of combined experience",
        content: "Our team members' experience ranges from 5 to over 20+ years",
      },
    ]}><PeopleGroup height="200px" fill="#a6a6a6" slot="icon-content" /></HomePageSection
  >
  <HomePageSection
    header={"Mature, Efficient Development Process"}
    bulletpoints={[
      {
        label: "Structured yet flexible methodology",
        content:
          "We have honed our software development process over years of delivering successful enterprise projects",
      },
      {
        label: "Strong focus on scalability, security, and performance",
        content:
          "Our team members have experience building for enterprises with sensitive information systems that can handle millions to hundreds of millions of datapoints efficiently",
      },
    ]}><Process height="200px" fill="#a6a6a6" slot="icon-content" /></HomePageSection
  >
  <HomePageSection
    header={"Our Philosophy"}
    bulletpoints={[
      {
        label: "Make it Work",
        content: "Fast delivery that gives you value in the near term for low cost",
      },
      {
        label: "Make it Right",
        content: "Expand and harden the application and ensure that it meets all your needs",
      },
      {
        label: "Make it Fast",
        content: "Optimize your application so that it performs at scale",
      },
      {
        label: "Make it Small",
        content:
          "Ensure that we're only using what we need to so we can minimize cost and maintenance",
      },
    ]}><CircuitBoard height="200px" fill="#a6a6a6" slot="icon-content" /></HomePageSection
  >
  <HomePageSection
    header={"Client Oriented User Experience"}
    bulletpoints={[
      {
        label: "User-Centered Design",
        content:
          "We focus on understanding your users’ needs, behaviors, and preferences to create intuitive, user-friendly interfaces",
      },
      {
        label: "Business Familiarity",
        content:
          "We use the business terms, language, and visuals that your users and stakeholders are already comfortable with, minimizing learning curves",
      },
      {
        label: "Tailored Solutions",
        content:
          "Whether it is custom workflows, unique business logic, or specialized functionality, we build systems that align perfectly with your operations",
      },
      {
        label: "Iterative Feedback",
        content:
          "Throughout the development process, we work closely with you to refine and adjust based on user feedback, ensuring the final product truly meets your needs",
      },
    ]}><HeartUser height="200px" fill="#a6a6a6" slot="icon-content" /></HomePageSection
  >
  <div class="contact-us-section responsive-flex" id="contact-form">
    <div class="icon-content">
      <a href="contact" class="button-secondary-white">Contact Us</a>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../../scss/variables";

  .home-section.top-section {
    display: flex;
    align-items: center;
    height: 90vh;
    background-color: transparent;
    justify-content: center;
  }

  .contact-us-section {
    display: flex;
    align-items: center;
    min-height: 70vh;
    background-color: transparent;
    justify-content: center;
    background-color: var(--color-info-section-background);
  }

  .infinite-shine {
    animation: shine 6s infinite ease-in-out;
  }

  @keyframes shine {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 75% 25%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  // Phone (480px and below)
  @media #{$small-screen} {
    .shiny-metallic-text {
      font-size: 2.2rem;
    }
  }
  // Phone (599px and below)
  @media #{$phone-portrait} {
    .shiny-metallic-text {
      font-size: 2.2rem;
    }
  }

  @media #{$tablet-landscape} {
    .shiny-metallic-text {
      font-size: 2.4rem;
    }
  }

  @media #{$tablet-portrait} {
    .shiny-metallic-text {
      font-size: 2.4rem;
    }
  }

  @media #{$phone-landscape} {
    .shiny-metallic-text {
      font-size: 2rem;
    }
  }
</style>

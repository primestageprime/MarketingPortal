<script>
  import { slide } from "svelte/transition";
  import {
    foundersStatement,
    problemStatement,
    ourSolution,
    offshoreSolution,
    boomAndBustSolution,
    bootcampSolution,
    alignAndConquer,
    projectPlan,
    productDesign,
    productSupport,
    developmentIteration,
    demoAndDeploy,
    bugsAndNewFeatures,
    aboutSprintWork,
    sprintDetermination,
  } from "./constants";
</script>

<section transition:slide class="vertical-overflow">
  <section>
    <h2>Founder's Statement</h2>
    <article>
      <p>{foundersStatement}</p>
      <!-- [Peter - Thoughtful] -->
    </article>
  </section>

  <section>
    <h2>Problem Statement</h2>
    <article>
      <p>{problemStatement}</p>
      <!-- [GANTT Chart of common development] -->
    </article>
  </section>

  <section>
    <h2>Proposed Solutions</h2>
    <article>
      <h3>Onshore Development Team (our recommendation)</h3>
      <p>
        {ourSolution}
      </p>
      <!-- [Calendar of iterative development process] -->
    </article>
    <article>
      <h3>Offshore</h3>
      <p>{offshoreSolution}</p>
      <!-- [Calender of India vs US meeting overlap] -->
    </article>
    <article>
      <h3>Boom and Bust</h3>
      <p>
        {boomAndBustSolution}
      </p>
      <!-- [GANTT chart of money with highlighted productivity time] -->
    </article>
    <article>
      <h3>Boot Camp/Incubator/Contractors</h3>
      <p>
        {bootcampSolution}
      </p>
      <!-- [Rocket built out of duct tape and string] -->
    </article>
  </section>
  <section>
    <h2>Our Strategy: Align and Conquer</h2>
    <article>
      <p>
        {alignAndConquer}
      </p>
      <!-- [Image of rockets pointed away from each other] vs [Image of rockets aligned] -->
    </article>
  </section>
  <section class="info-section d-fr">
    <h2>Tactics</h2>
    <article>
      <h3>Project Plan</h3>
      <p>
        {projectPlan}
      </p>
      <!-- [Checklist of empty Acceptance Criteria] -->
    </article>

    <article>
      <h3>Product Design</h3>
      <p>{productDesign}</p>
      <!-- [illustration of figma layout for Alarms] -->
    </article>

    <article>
      <h3>Development Iterations</h3>
      <p>
        {developmentIteration}
      </p>
      <!-- [Calender of planning/Focus Blocks/Demo] -->
    </article>

    <article>
      <h3>Demo/Deploy</h3>
      <p>{demoAndDeploy}</p>
      <!-- [Completed checklist of Acceptance Criteria] -->
    </article>

    <article>
      <h3>Bugs & New Features</h3>
      <p>
        {bugsAndNewFeatures}
      </p>
      <!-- [Guarantee of Quality seal] -->
    </article>
  </section>

  <section>
    <h2>Pricing</h2>

    <article>
      <h3>Sprint Work</h3>
      <p>
        {aboutSprintWork}
      </p>
      <ul>
        <li>Developer Salary/benefits</li>
        <li>Product Management</li>
        <li>Meetings</li>
        <li>Tools and Office Space</li>
        <li>Training/Onboarding/Insurance etc.</li>
      </ul>
      <p>
        {sprintDetermination}
      </p>
      <p>
        {productSupport}
      </p>
      <!-- [Rocket with a no haggling price tag on it] -->
    </article>
  </section>
</section>

<style lang="scss">
  @import "$scss/variables";
  h2 {
    font-size: 2rem;
    font-family: "Righteous", sans-serif;
  }
  section.vertical-overflow section {
    display: flex;
    grid-gap: 1rem;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color: var(--color-text-secondary);
    padding: 16px;
  }
  article {
    width: 60%;
    display: flex;
    grid-gap: 1rem;
    justify-content: flex-start;
    flex-direction: column;
    line-height: 1.5rem;
    font-size: 1.2rem;
    margin-bottom: 24px;
  }

  @media #{$small-screen} {
    article {
      width: 90%;
    }
  }
  // Phone (599px and below)
  @media #{$phone-portrait} {
    article {
      width: 90%;
    }
  }
  ul {
    padding: 0 1.3rem;
  }
</style>

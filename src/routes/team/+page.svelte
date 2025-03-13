<script>
  import EmployeeInfo from "$lib/components/layout/EmployeeInfo.svelte";
  import { slide } from "svelte/transition";
  import { evanAboutMe, peterAboutMe, wadeAboutMe } from "./constants";
</script>

<div transition:slide class="vertical-overflow">
  <div class="employee-info-section d-fr">
    <EmployeeInfo
      fullName="Peter Stradinger"
      imageSrc={"/images/Peter.jpeg"}
      aboutMe={peterAboutMe}
    />
  </div>
  <div class="employee-info-section d-fr">
    <EmployeeInfo fullName="Wade Allen" imageSrc={"/images/Wade.jpeg"} aboutMe={wadeAboutMe} />
  </div>
  <div class="employee-info-section d-fr">
    <EmployeeInfo fullName="Evan Buechler" imageSrc={"/images/Evan.jpeg"} aboutMe={evanAboutMe} />
  </div>
</div>

<style lang="scss">
  .employee-info-section {
    align-items: center;
    justify-content: center;
    min-height: 70vh;
    color: var(--color-text-secondary);
    padding: 36px 12px;
  }
  .employee-info-section:nth-child(odd) {
    background-color: var(--color-team-section-background);
  }
</style>

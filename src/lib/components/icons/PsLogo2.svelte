<script>
  export let strokeColor;
  export let outerStrokeColor;
  const centerRadius = 23;
  const radius = 12;
  const fillColor = "transparent";

  const strokeWidth = 4;
  const centerStyle = `stroke-width: ${strokeWidth}px; `;
  const outerStrokeWidth = 4;
  const outerStyle = `stroke-width: ${outerStrokeWidth}px;`;

  const rad = 28.28;
  const otherRad = 40;
  const outerCircles = [
    [rad, rad],
    [otherRad, 0],
    [-1 * otherRad, 0],
    [-1 * rad, rad],
    [0, otherRad],
    [0, -1 * otherRad],
    [-1 * rad, -1 * rad],
    [rad, -1 * rad],
  ];
</script>

<svg viewBox="-60 -60 120 120" xmlns="http://www.w3.org/2000/svg" {...$$restProps}>
  <!-- Center Circle -->
  <circle
    cx="0"
    cy="0"
    r={centerRadius}
    fill={fillColor}
    stroke={strokeColor}
    style={centerStyle}
  />

  <!-- Surrounding Circles -->
  {#each outerCircles as [cx, cy]}
    <circle {cx} {cy} r={radius} fill={fillColor} style={outerStyle} stroke={outerStrokeColor} />
  {/each}
</svg>

<style lang="scss">
  @import "$scss/variables";

  svg {
    height: 50px;
  }

  @media #{$phone-landscape} {
    svg {
      height: 40px;
    }
  }

  @media #{$tablet-landscape} {
    svg {
      height: 40px;
    }
  }
</style>

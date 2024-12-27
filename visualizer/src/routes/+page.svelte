<script >
    import * as d3_soccer from "d3-soccer"
    import * as d3 from "d3"
    import { onMount } from 'svelte';
    const pitch = d3_soccer.pitch()
        .height(300)                // Heigth of the SVG object (in pixels)
        .rotate(false)              // Rotate the pitch by 90 degrees
        .showDirOfPlay(false)       // Show an arrow on the plot to indicate the direction of play
        .shadeMiddleThird(false)    // Shade the middle third of the pitch
        .pitchStrokeWidth(.5)       // Strokewidth of the pitch lines
        .goals("line")              // Style used to draw the goals. Alternatives are "box" or a custom function.
        .clip([[0, 0], [105, 68]]);
    onMount(() => {
        var svg = d3.select("#chart").call(pitch);
  });
</script>
<div id="chart" class="d3-soccer light-theme"></div>
<template>
  <div class="AppFooter">
    <hr/>
    <div class='footer-container'>
      <div class="externalCred">
        <div style="width:300px;vertical-align:top;font-family: Arial;font-size:9pt;line-height: normal">
        <a rel="license" href="//responsivevoice.org/" target="_blank"><img title="ResponsiveVoice Text To Speech" src="https://responsivevoice.org/wp-content/uploads/2014/08/120x31.png" style="float:left;padding-right:2px" /></a><span xmlns:dct="https://purl.org/dc/terms/" property="dct:title"><a href="//responsivevoice.org/" target="_blank" title="ResponsiveVoice Text To Speech">ResponsiveVoice</a></span> used under <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" title="Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License">Non-Commercial License</a></div>
        <div style="clear:both;">&nbsp;</div>
      </div>
      <div class="githubLink">
        <a href="https://github.com/mundek/vue-sla-numbers" target="_blank">vue-sla-numbers on github <i class="github icon"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.footer-container {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  grid-template-areas:
    "externalCred githubLink";
}
.externalCred {
  grid-area: externalCred;
}
.githubLink {
  grid-area: githubLink;
}

</style>
<script setup>
import Heading from "./ui/UIHeading.vue";
</script>
<template>
  <div class="recipe-home">
    <Heading tag="h2" title="Recipe Home" alignment="left" class="heading" />
    <main>
      <p>
        Bacon ipsum dolor amet rump corned beef turkey spare ribs pork loin
        pastrami. Beef sausage sirloin, t-bone swine shoulder pork chop tri-tip
        buffalo venison chislic shank leberkas. 
      </p>
      <p>
        Ball tip bacon picanha, pork
        chop doner pork belly short ribs rump capicola burgdoggen corned beef
        pastrami alcatra. Brisket andouille ham, ham hock kevin meatloaf
        landjaeger swine turkey. Swine bacon flank, picanha pork loin shankle
        rump frankfurter shoulder buffalo tail beef biltong.
      </p>
      <p>
        Boudin tail kielbasa, ham andouille jowl beef bacon short loin alcatra
        landjaeger doner venison. Porchetta jowl doner pork chop rump, venison
        boudin kielbasa pancetta pork loin sirloin bresaola beef ribs tail.
      </p>
    </main>
  </div>
</template>

<style scoped>
.recipe-home {
  border-top: 1px solid darkorange;
  margin: 0 1em;
  flex: 1;
}
.recipe-home > .heading {
  padding: 1em;
}
.recipe-home > main > p {
    text-align: left;
    padding: 0 1em;
}
</style>

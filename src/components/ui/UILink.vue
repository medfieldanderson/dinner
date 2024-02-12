<script setup>
import "material-icons/iconfont/round.css";
defineProps({
  dest: {
    type: String,
    required: true,
  },
  label: {
    type: String,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <RouterLink :to="`/${dest}`" class="ui-link-anchor">
    <div class="ui-link">
      <span class="material-icons-round icon">{{ icon }}</span>
      <span class="icon-label">{{ label }}</span>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.ui-link-anchor{
  margin: 0.25rem;
  .ui-link {
    * {
      display: block;
      color: var(--ui-link-color);
      font-size: 3.5em;
      text-align: center;
    }
    .icon-label {
      font-size: .75rem;
      text-align: center;
    }
    
    &:hover {
      filter: drop-shadow(0 0 0.75rem var(--ui-link-shadow));
      cursor: pointer;
      
    }
  }
}

</style>

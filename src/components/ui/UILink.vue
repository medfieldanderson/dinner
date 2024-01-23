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

<style scoped>
.ui-link-anchor{
  /* margin: 0.125rem; */
  padding: 0.125rem;
  border: 5px solid rgb(236, 236, 242);
  .ui-link {
    * {
      display: block;
      color: orange;
      font-size: 2.5em;
    }
    .icon-label {
      font-size: 0.65rem;
    }
    
    &:hover {
      background-color: #f5e6cb;
      /* color: rgb(166, 106, 33); */
      color: darkgoldenrod;
      cursor: pointer;
      font-weight: bold;
      cursor: pointer;
    }
  }
}

</style>

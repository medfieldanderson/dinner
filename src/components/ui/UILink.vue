<script setup>
import "material-icons/iconfont/outlined.css";
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
  <div class="ui-link">
    <RouterLink :to="`/${dest}`" class="ui-link-anchor">
      <span class="material-icons-outlined icon">{{ icon }}</span>
      <span class="icon-label">{{ label }}</span>
    </RouterLink>
  </div>
</template>

<style scoped>
.ui-link {
  position: relative;
}
.ui-link > a > h3 {
  margin: 0;
  color: orange;
}

.ui-link:hover {
  background-color: #f5e6cb;
  color: rgb(166, 106, 33);
  cursor: pointer;
  font-weight: bold;
  cursor: pointer;
}
.ui-link > .ui-link-anchor > .icon {
  font-size: 5em;
  color: orange;
}
.ui-link > .ui-link-anchor > .icon-label {
  display: block;
  font-size: 1rem;
  color: orange;
  margin: -0.750em;
  padding: 1em;
}
</style>

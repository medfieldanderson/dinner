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
  <div class="ui-link">
    <RouterLink :to="`/${dest}`" class="ui-link-anchor">
      <h3>{{ label }}</h3>
      <span class="material-icons-round">{{ icon }}</span>
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
.ui-link > .ui-link-anchor {
  height: 6em;
  width: 6em;

}
.ui-link > .ui-link-anchor > span {
  font-size: 3em;
  color: orange;
}
</style>

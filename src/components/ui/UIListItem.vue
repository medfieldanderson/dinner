<script>
export default {
  name: "UIListItem",
};
</script>
<script setup>
import "material-icons/iconfont/round.css";
import { ref } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  deletable: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["delete-li"]);

const deleteListItem = (e) => {
  emit("delete-li", e);
};
</script>

<!-- <li -->
<!-- material-icons-round -->
<template>
  <li class="list-item">
    <span class="content"><slot></slot></span>
    <span
      v-if="deletable"
      class="delete material-icons-round"
      @click="deleteListItem({ id: id })"
      >clear</span
    >
  </li>
</template>

<style scoped>
li {
  /* display: block; */
  margin: 0;
  padding: 0;
  .content {
    /* padding: 1rem; */
    justify-self: start;
    vertical-align: center;
  }
  .delete {
    cursor: pointer;
    font-size: small;
    padding: 0.125rem;
    margin: 0 0.25rem 0.25rem 0.25rem;
    /* background-color: rgb(250, 69, 69, 0.5); */
    color: #22092c;
    border: 0.125px solid #22092c;
    border-radius: 45%;
    border-radius: 30%;
    box-shadow: 2px 2px 2px gray;
    &:hover {
      background-color: red;
      background-color: rgb(250, 69, 69, 0.5);
    }
    &:active {
      /* background-color: red; */
      box-shadow: 1px 1px 1px gray;
    }
  }
}
</style>

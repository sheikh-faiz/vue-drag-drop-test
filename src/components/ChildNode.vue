<template>
  <ul class="ff list-unstyled ver-tree-list" v-if="child && child.length > 0">
    <li
      class="list-item d-flex align-items-center has-child"
      v-for="(val, index) in child"
      :key="index"
    >
      <drag :transfer-data="{ item: val, root: child }"
        ><a href="#">{{ val.name }}</a></drag
      >
      <drop
        class="btw-circle"
        :class="{ over }"
        @dragover="over = true"
        @dragleave="over = false"
        @drop="handleDrop(child, val, ...arguments)"
      >
        <span>_</span>
      </drop>
      <child-node :child="val.child"></child-node>
    </li>
  </ul>
</template>
 
<script>
import { Drag, Drop } from "vue-drag-drop";
import { handleItemDrop } from "../utils/utils";

export default {
  components: { Drag, Drop },

  name: "child-node",

  props: {
    child:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data: function () {
    return { over: false };
  },
  methods: {
    handleDrop(grandParent, parent, data) {
      handleItemDrop(grandParent, parent, data);
      this.over = false;
    },
  },
};
</script>
 
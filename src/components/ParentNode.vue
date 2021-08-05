<template>
  <div>
    <ul class="list-unstyled ver-tree-list-main ver-tree-list m-5">
      <li
        v-for="val in data"
        :key="val.name"
        class="list-item d-flex align-items-center has-child"
      >
        <a>{{ val.name }}</a>
        <div class="btw-circle">
          <span >_</span>
        </div>
        
        <ul class="list-unstyled ver-tree-list" v-if="val.child.length > 0">
          <li
            class="list-item d-flex align-items-center has-child"
            v-for="(v1, index) in val.child"
            :key="index"
          >
            <drag :transfer-data="{ item: v1, root: val.child }">
              <a href="#">{{ v1.name }}</a>
            </drag>

            <drop
              class="btw-circle"
              :class="{ over }"
              @dragover="over = true"
              @dragleave="over = false"
              @drop="handleDrop(val.child, v1, ...arguments)"
            >
              <span>_</span>
            </drop>
            <child-node :child="v1.child"></child-node>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { Drag, Drop } from "vue-drag-drop";
import { handleItemDrop } from "../utils/utils";
import ChildNode from "./ChildNode";
export default {
  components: { Drag, Drop, ChildNode },
  data: function () {
    return {
      over: false,
      data: [
        {
          name: "Text1",
          position: 1,
          isRoot: true,
          id: "a",
          child: [
            {
              name: "Text2",
              position: 1,
              direction: "left",
              id: "a-1",

              child: [
                {
                  name: "Text4",
                  position: 1,
                  id: "a-1-1",
                  direction: "left",
                },
              ],
            },
            {
              name: "Text3",
              position: 2,
              direction: "right",
              id: "a-2",

              child: [
                {
                  name: "Text5",
                  position: 1,
                  direction: "left",
                  id: "a-2-1",
                },
                {
                  name: "Text6",
                  position: 2,
                  direction: "right",
                  id: "a-2-2",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleDrop(grandParent, parent, data) {
      handleItemDrop(grandParent, parent, data);
      this.over = false;
    },
    checkforChild(parent, item) {
      if (parent == undefined) {
        return false;
      }
      const i = parent.find((e) => {
        return item.id == e.id;
      });
      if (i != undefined) {
        return true;
      }
      return false;
    },
  },
};
</script>
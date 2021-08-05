<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ParentNode msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import ParentNode from "./components/ParentNode.vue";

export default {
  name: "App",
  components: {
    ParentNode,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.drag-image {
  color: #000;
}

.drag,
.drop {
  box-sizing: border-box;
  display: inline-block;
  border-radius: 10px;
  width: 100px;
  height: 100px;
  background: #ccc;
  vertical-align: middle;
  margin-right: 20px;
  position: relative;
  padding: 5px;
  padding-top: 35px;
  text-align: center;
  margin: 3px;
}
.drag {
  color: #fff;
  cursor: move;
  background: #777;
  border-right: 2px solid #666;
  border-bottom: 2px solid #666;
}
.drop.over {
  border-color: #aaa;
  background: #ccc;
}

.ver-tree-list-main > .list-item > a:after {
  display: none !important;
}
.ver-tree-list {
  position: relative;
}

.ver-tree-list .list-item + .list-item {
  margin-top: 15px;
}
.ver-tree-list .list-item {
  position: relative;
}
.ver-tree-list .list-item a {
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  line-height: 1;
  display: inline-block;
  text-decoration: none;
  color: #999;
  position: relative;
}
.ver-tree-list .list-item a:after {
  background-color: #ccc;
  width: 15px;
  height: 1px;
  left: -15px;
  top: 50%;
  z-index: 99;
}
.ver-tree-list .ver-tree-list {
  margin-left: 4px;
}
.ver-tree-list .ver-tree-list:after,
.ver-tree-list .ver-tree-list .list-item:last-child:after,
.ver-tree-list .ver-tree-list .list-item:first-child:before,
.ver-tree-list .list-item a:after {
  content: "";
  display: block;
  position: absolute;
}
.ver-tree-list .ver-tree-list .list-item:last-child:after {
  background-color: #fff;
  width: 5px;
  bottom: 0;
  left: -17px;
  height: 50%;
  z-index: 9;
}
.ver-tree-list .ver-tree-list .list-item:first-child:before {
  background-color: #fff;
  top: 0;
  width: 5px;
  left: -17px;
  height: 50%;
  z-index: 9;
}
.ver-tree-list .ver-tree-list:after {
  width: 1px;
  height: calc(100% - 30px);
  top: 15px;
  left: -15px;
  background-color: #ccc;
}
.ver-tree-list .list-item.has-child div > a:before,
.ver-tree-list .list-item.has-child > a:before {
  display: block;
  content: "";
  width: 15px;
  position: absolute;
  right: -15px;
  height: 1px;
  top: 18px;
  background-color: #ccc;
}
.btw-circle {
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 50%;
  color: #ccc;
  line-height: 3px;
  margin-left: 14px;
  text-align: center;
  background-color: #fff;
  z-index: 999;
  position: relative;
}
</style>

<template>
  <div
    id="app"
    class="container"
  >
    <p>
      <font-awesome-icon icon="trash" /> ipsum dolor, sit amet consectetur adipisicing elit. Distinctio eligendi harum possimus similique alias placeat odit excepturi ab magnam adipisci commodi id ipsum aliquam maiores nesciunt dolore a, quisquam facere!</p>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "app",
  components: {
    FontAwesomeIcon
  }
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
</style>

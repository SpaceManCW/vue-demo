<template>
  <div id="app">
    <sidebar id="sidebar" />
    <router-view id="router" :key="$route.path" />
    <alertdialog v-if="exception.length > 0" />
  </div>
</template>
<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";
import sidebar from "@/views/Sidebar.vue";
import { mapState } from "vuex";
const alertdialog = defineAsyncComponent(() =>
  import("@/components/AlertDialog.vue")
);
export default defineComponent({
  components: { sidebar, alertdialog },
  computed: {
    ...mapState(["exception"])
  }
});
</script>
<style>
#app {
  margin-top: 10px;
  display: flex;
}

#sidebar {
  width: 300px;
  padding: 15px;
}
#router {
  flex: 1;
  padding: 15px;
}
</style>

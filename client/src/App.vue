<template>
  <div id="app">
    <v-app>
      <page-header/>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import PageHeader from "@/components/Header.vue";
import store from '@/store/store';

export default {
  name: "app",
  store,
  components: {
    PageHeader
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

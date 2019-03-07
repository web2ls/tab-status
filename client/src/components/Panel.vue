<template>
  <div class="white elevation-2">
    <v-toolbar class="cyan" flat dense dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>

    <div class="pl-4 pr-4 pb-2">
            <slot>Not defined conetent</slot>
    </div>
  </div>
</template>

<script>
        export default {
                data() {
                        return {
                                title: 'Hello'
                        }
                }
        };
</script>

<style>
</style>

<template>
       <v-toolbar fixed class="cyan">
               <v-toolbar-title class="mr-4">
                       <router-link to="/">TabTracker</router-link>
               </v-toolbar-title>

               <v-toolbar-items>
                       <v-btn flat dark>Browse</v-btn>
               </v-toolbar-items>

               <v-spacer></v-spacer>

               <v-toolbar-items>
                       <v-btn flat dark>
                               <router-link to="register">Sign Up</router-link>
                        </v-btn>
                        <v-btn flat dark>
                               <router-link to="login">Login</router-link>
                        </v-btn>
               </v-toolbar-items>
        </v-toolbar> 
</template>

<script>
export default {
        name: 'PageHeader'
        
}
</script>

<style scoped>

</style>



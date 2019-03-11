<template>
        <v-layout>
                <v-flex xs6 offset-xs3>
                        <div class="white elevation-2">
                                <panel title="Login" />

                                <div class="pl-4 pr-4 pb-2">
                                        <form name="login-form" autocomplete="off">
                                                <div>
                                                        <v-text-field v-model="email" type="email" name="email" placeholder="email..." >Email</v-text-field>
                                                </div>
                                                <div>
                                                        <v-text-field v-model="password" type="password" name="password" placeholder="password..." ></v-text-field>
                                                </div>
                                                <v-alert v-html="error" :value="error" color="red"></v-alert>
                                                <div>
                                                        <v-btn class="cyan" @click="submitUser">Login</v-btn>
                                                </div>
                                        </form>
                                </div>
                        </div>
                </v-flex>
        </v-layout>
</template>

<style scoped>
 .error {
         color: red;
 }
</style>


<script>
import AuthService from '@/services/Authentication';
import Panel from '@/components/Panel';

export default {
        data() {
                return {
                        email: null,
                        password: null,
                        error: null
                }
        },
        methods: {
                async submitUser() {
                        try {
                                // console.log(this.$store.dispatch);
                                const response = await AuthService.login({ email: this.email, password: this.password });
                                this.$store.dispatch('setToken', response.data.token);
                                this.$store.dispatch('setUser', response.data.user);
                        } catch(error) {
                                // console.log('Error on login user', error);
                                this.error = error.response.data.error;
                        }

                        this.email = null;
                        this.password = null;
                }
        },
        components: {
                Panel
        }
}
</script>


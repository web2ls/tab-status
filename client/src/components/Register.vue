<template>
        <v-layout>
                <v-flex xs6 offset-xs3>
                        <div class="white elevation-2">
                                <panel title="Register" />

                                <div class="pl-4 pr-4 pb-2">
                                        <form name="register-form" autocomplete="off">
                                                <div>
                                                        <v-text-field v-model="email" type="email" name="email" placeholder="email..." >Email</v-text-field>
                                                </div>
                                                <div>
                                                        <v-text-field v-model="password" type="password" name="password" placeholder="password..." ></v-text-field>
                                                </div>
                                                <v-alert v-html="error" :value="error" color="red"></v-alert>
                                                <div>
                                                        <v-btn class="cyan" @click="submitUser">Register</v-btn>
                                                </div>
                                        </form>
                                </div>
                        </div>
                </v-flex>
        </v-layout>
</template>

<style scoped>

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
                                await AuthService.register({ email: this.email, password: this.password });
                                // console.log(response.data);
                        } catch(error) {
                                // console.log('Error on register new User', error);
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


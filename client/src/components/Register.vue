<template>
        <div class="register">
                <h1>Register</h1>
                <div>
                        <input v-model="email" type="email" name="email" placeholder="email..." />
                </div>
                <div>
                        <input v-model="password" type="password" name="password" placeholder="password..." />
                </div>
                <div>
                        <button @click="submitUser">Register user</button>
                </div>
        </div>
</template>

<script>
import AuthService from '@/services/Authentication';

export default {
        data() {
                return {
                        email: null,
                        password: null
                }
        },
        methods: {
                async submitUser() {
                        const response = await AuthService.register({ email: this.email, password: this.password });
                        console.log(response.data);
                        this.email = null;
                        this.password = null;
                }
        }
}
</script>


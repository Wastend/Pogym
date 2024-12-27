<template>
    <div>
        <LoginForm @login="handleLogin" />
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import axios from 'axios';

export default {
    name: 'LoginPage',
    components: {
        LoginForm
    },
    methods: {
        async handleLogin(credentials) {
            try {
                const response = await axios.get('http://localhost:3001/auth', {
                    params: credentials
                });
                if (response.data && response.data.message === 'Authenticated successfully') {
                    this.$store.commit('setAuthenticated', true);
                    this.$router.push('/home');
                } else {
                    this.message = 'Unexpected response format';
                }
            } catch (error) {
                if (error.response && error.response.data && error.response.data.message) {
                    this.message = error.response.data.message;
                } else {
                    this.message = 'An error occurred';
                }
            }
        }
    }
};
</script>
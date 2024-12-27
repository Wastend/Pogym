<template>
    <div>
        <h1>Welcome to the Home Page</h1>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    methods: {
        logout() {
            this.$store.commit('setAuthenticated', false);
            this.$router.push('/login');
        }
    }
};
</script>
<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="submitForm">
            <div>
                <label for="login">Login:</label>
                <input type="text" id="login" v-model="login" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
        <div v-if="message">{{ message }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            login: '',
            password: '',
            message: ''
        };
    },
    methods: {
        submitForm() {
            this.$emit('login', { login: this.login, password: this.password });
        }
    }
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}

div {
    margin-bottom: 10px;
}
</style>
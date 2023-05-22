<template>
    <h2 v-if ="this.$store.state.isAuthenticated">Hola Mundo></h2>
    
</template>
<script>
export default {
    created() {
        if (!this.$store.state.isAuthenticated) {
            this.$router.push('/login');
        }
    }
};
</script>
<template>
    
</template>

<style scoped>

</style>

<script>

export default {
    name: "project_editor",
    data() {
        return {

        };
    },
    async mounted() {
        await this.getProjectData();
    },
    methods: {
        async getProjectData() {
            console.log(this.$route.params.id)
        }
    }
}

</script>

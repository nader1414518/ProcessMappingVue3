<template>
    <div class="main-container">
        <b-form @submit="onCreate">
            <label for="input-live">Name:</label>
            <b-form-input
                id="input-live"
                v-model="name"
                aria-describedby="input-live-help input-live-feedback"
                placeholder="Enter name"
                trim
                required
            ></b-form-input>
            <br />
            <label for="input-live1">Description:</label>
            <b-form-input
                id="input-live1"
                v-model="description"
                aria-describedby="input-live-help input-live-feedback"
                placeholder="Enter description"
                trim
            ></b-form-input>
            <br />
            <button class="btn btn-success" type="submit">
                Create
            </button>
        </b-form>
    </div>
</template>

<style scoped>

.main-container {
    padding: 5vw;
}

</style>

<script>
export default {
    data() {
        return {
            name: "",
            description: "",
        };
    },
    methods: {
        async onCreate(e) {
            e.preventDefault();

            this.$isLoading(true);

            try {
                const res = await this.axios.post("/Projects/CreateProject", {
                    Name: this.name,
                    Description: this.description
                });

                console.log(res.data)

                if (res.data.result)
                {
                    this.$router.back();
                }
            } catch (error) {
                console.log(error)
            }

            this.$isLoading(false);
        }
    }
}
</script>
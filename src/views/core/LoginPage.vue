<template>
    <div class="main-container">
        <h3>
            Login With Your Credentials
        </h3>
        <br />
        <div>
            <b-form @submit="onLogin">
                <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
                >
                    <b-form-input
                    id="input-1"
                    v-model="email"
                    type="email"
                    placeholder="Enter email"
                    required
                    ></b-form-input>
                </b-form-group>
                <br />
                <b-form-group
                    id="input-group-2"
                    label="Password:"
                    label-for="input-2"
                >
                    <b-form-input
                    id="input-2"
                    v-model="password"
                    type="password"
                    placeholder="Enter password"
                    required
                    ></b-form-input>
                </b-form-group>
                <br />
                <b-button variant="success" type="submit" >Login</b-button>
            </b-form>
        </div>
    </div>
</template>

<style scoped>
.main-container {
    padding-top: 5vh;
    padding-bottom: 5vh;
    padding-left: 20vw;
    padding-right: 20vw;
    background-color: white;
}
</style>

<script>
import axios from "axios";
import TokenUtility from "../../utilities/TokenUtility"

export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async onLogin(e) {
            e.preventDefault();

            this.$isLoading(true);

            try {
                const res = await axios.post("/Login/EmailLogin", {
                    Email: this.email,
                    Password: this.password
                });

                // console.log(res.data);
                if (res.data.result)
                {
                    TokenUtility.setToken(res.data.token);

                    this.$router.push({
                        name: 'home',
                    });
                }
            } catch (error) {
                console.log(error);
            }

            this.$isLoading(false);
        }
    }
}

</script>
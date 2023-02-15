<template>
  <div class="main-container">
    <b-table striped hover :fields="fields" :items="projects"></b-table>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data() {
    return {
      projects: [],
      fields: [
        {
          key: "name",
          label: "Name",
          sortable: true
        },
        {
          key: "description",
          label: "Description"
        },
      ] 
    };
  },
  async mounted() {
    
  },
  methods: {
    async getProjects() {
      const res = await this.axios.get("/Projects/GetProjects");
      console.log(res.data);
    }
  }
}

</script>

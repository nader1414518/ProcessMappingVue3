<template>
  <div class="main-container">
    <div class="row">
      <div class="col-4">
        <h3>
          Projects
        </h3>
      </div>
      <div class="col-4"></div>
      <div class="col-4">
        <router-link class="btn btn-info" to="/create_project">
          Create
        </router-link>
      </div>
    </div>

    <div class="projects-container">
      <b-table hover responsive sticky-header bordered stacked="md" :fields="fields" :items="projects">
        <template v-slot:cell(actions)="row">
          <button class="btn btn-primary" @click="goToProjectPage(row.item.id)">
            Open
          </button>
        </template>
      </b-table>
      <br />
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </div>
  </div>
</template>

<style scoped>

.main-container {
  padding-left: 5vw;
  padding-right: 5vw;
  padding-top: 5vh;
  padding-bottom: 5vh;
}

.projects-container {
  margin-top: 5vh;
}

</style>

<script>

export default {
  name: 'HomeView',
  data() {
    return {
      perPage: 5,
      currentPage: 1,
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
        {
          key: "actions",
          label: "Actions"
        }
      ],
    };
  },
  computed: {
    rows() {
      return this.projects.length
    }
  },
  async mounted() {
    await this.getProjects();
  },
  methods: {
    async getProjects() {
      this.$isLoading(true);

      try {
        const res = await this.axios.get("/Projects/GetProjects");
        // console.log(res.data);

        if (res.data.result)
        {
          this.projects = res.data.projects;
        }
      } catch (error) {
        console.log(error);
      }

      this.$isLoading(false);
    },
    goToProjectPage(id) {
      this.$router.push({
        name: 'project_editor',
        params: {
          id,
        }
      });
    }
  }
}

</script>

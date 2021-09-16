<template>
  <main>
    <h1>Notion Nuxt Todo</h1>
    <ul>
      <li v-for="task in taskList" :key="task.id">
        <input type="checkbox" v-model="task.properties.Status.checkbox" />
        <p>
          {{ task.properties.Name.title[0].plain_text }} -
          {{ task.properties.Tags }}
        </p>
        <h3>Data</h3>
        <p>{{ task }}</p>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data: () => ({
    taskList: [],
  }),
  async mounted() {
    const response = await fetch('/.netlify/functions/tasks').then((res) =>
      res.json()
    )

    this.taskList = response.results
  },
}
</script>

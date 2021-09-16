<template>
  <main>
    <h1>Notion Nuxt Todo</h1>
    <ul>
      <li v-for="task in taskList" :key="task.id">
        <button @click="getPageContent(task.id)">
          {{ task.properties.Name.title[0].plain_text }} -
          {{ task.properties['Tags'] }}
        </button>
        <p>{{ task }} -</p>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data: () => ({
    taskList: [],
  }),
  methods: {
    async getPageContent(id) {
      const postResponse = await fetch('/.netlify/functions/task', {
        method: 'POST',
        body: JSON.stringify({
          pageId: id,
        }),
      }).then((res) => res.json())

      console.log({ postResponse })
    },
  },
  async mounted() {
    const response = await fetch('/.netlify/functions/tasks').then((res) =>
      res.json()
    )

    this.taskList = response.results
  },
}
</script>

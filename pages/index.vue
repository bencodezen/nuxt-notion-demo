<template>
  <main>
    <h1>Notion Nuxt - Nuxt Nation 2021</h1>
    <h2>Tasks</h2>
    <ul>
      <li v-for="item in notionData.results" :key="item.id">
        {{ item.properties.Name.title[0]['plain_text'] }} -
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data: () => ({
    notionData: [],
  }),
  async mounted() {
    const response = await fetch('/.netlify/functions/notion').then((res) =>
      res.json()
    )

    this.notionData = response
  },
}
</script>

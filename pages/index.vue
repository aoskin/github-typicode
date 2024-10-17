<script setup>
const { data: posts } = await useFetch('http://localhost:3000/posts')
</script>

<template>
  <main>
    <h1>Posts</h1>
    <div class="links">
      <NuxtLink 
        v-for="item of posts"
        :key="item.id"
        :to="`/posts/${item.id}`"
      >
      <h2>{{ item.title }}</h2>
      <p>{{ item.description }}</p>
      <div>
        <span>Просмотров: </span>
        <span>{{ item.views }}</span>
      </div>
      </NuxtLink>
    </div>
    <NuxtLink class="sitemap" to="http://localhost:3001/sitemap.xml">
      Sitemap
    </NuxtLink>
  </main>
</template>

<style>
.links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.links a {
  color: inherit;
  text-decoration: none;
}

.sitemap {
  display: block;
  margin-top: 3rem;
  color: inherit;
}
</style>
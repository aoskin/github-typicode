<script setup>

const route = useRoute();
const postId = route.params.id;

const comments = ref('')
const { data: post } = await useFetch(`http://localhost:3000/posts/${postId}`)

const loadComments = async () => {
  const data = await $fetch(`http://localhost:3000/comments/`)
  comments.value = data.filter((item) => item.postId === postId)
}
</script>

<template>
  <button @click="$router.back()">Back</button>
  <h2>{{ post.title }}</h2>
  <p>{{ post.description }}</p>
  <button @click.once="loadComments" type="button">Download comments</button>
  <div v-if="comments.length">
    <p v-for="comment of comments" :key="comment.id">{{ comment.text }}</p>
  </div>
</template>
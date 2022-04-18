<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{error}}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
<!--    <PostList :posts="posts" v-if="showPosts"/>-->
<!--    <button @click="showPosts = !showPosts">Toggle posts</button>-->
<!--    <button @click="posts.pop()">Delete a post</button>-->
<!--    <input type="text" v-model="search">-->
<!--    <p>search term - {{ search }}</p>-->

<!--    <div v-for="name in matchingNames" :key="name">-->
<!--      {{ name }}-->
<!--    </div>-->
  </div>
</template>

<script>

import getPosts from "@/composables/getPosts";
import PostList from "@/components/PostList";
import Spinner from "@/components/Spinner";
import TagCloud from "@/components/TagCloud";

export default {
  name: 'Home',
  components: {TagCloud, Spinner, PostList},
  setup() {
    const {posts, error, load} = getPosts();
    load();

    return {posts, error};
  }
  // setup() {
  //   const search = ref('');
  //   const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach']);
  //
  //   watch(search, () => {
  //     console.log('watch function run')
  //   })
  //   watchEffect(() => {
  //     console.log('watchEffect function ran', search.value)
  //   })
  //
  //   const matchingNames = computed(() => {
  //     return names.value.filter((name) => name.includes(search.value))
  //   });
  //
  //   return {
  //     names, search, matchingNames
  //   }
  // }
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout{
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>

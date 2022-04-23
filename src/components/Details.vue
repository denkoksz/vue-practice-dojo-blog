<template>
  Details
  <div v-if="error">{{error}}</div>
  <div v-if="post" class="post">
    <h3>{{post.title}}</h3>
    <p class="pre">{{post.body}}</p>
    <button @click="deletePost" class="delete">Delete Post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPostById from "@/composables/getPostById";
import Spinner from "@/components/Spinner";
import {useRoute, useRouter} from "vue-router";
import {projectFirestore} from "@/firebase/config";

export default {
  components: {Spinner},
  props: ['id'],
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const {post, error, load} = getPostById(route.params.id);
    // const {post, error, load} = getPostById(props.id);

    load();

    const deletePost = async () => {
      await projectFirestore.collection('posts')
          .doc(props.id)
          .delete();

      router.push({ name: 'Home' });
    };

    return {post, error, deletePost}
  }
}
</script>

<style>

.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}

.pre {
  white-space: pre-wrap;
}

</style>
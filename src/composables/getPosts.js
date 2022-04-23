import {ref} from "vue";
import {projectFirestore} from "@/firebase/config";

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            const response = await projectFirestore.collection('posts')
                .orderBy('createdAt', "desc")
                .get();

            posts.value = response.docs.map((post) => {
                return { ...post.data(), id: post.id };
            });
            // await new Promise(resolve => {
            //     setTimeout(resolve, 2000)
            // })
            // let data = await fetch('http://localhost:3000/posts');
            // if (!data.ok) {
            //     throw Error('no data available');
            // }
            // posts.value = await data.json()
        } catch (err) {
            error.value = err.message;
            console.log(error.value)
        }
    }
    return {posts, error, load}
}

export default getPosts

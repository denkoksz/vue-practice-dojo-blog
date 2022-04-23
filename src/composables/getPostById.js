import {ref} from "vue";
import {projectFirestore} from "@/firebase/config";

const getPost = (id) => {
    const post = ref(null);
    const error = ref(null);

    const load = async () => {
        try {

            let response = await projectFirestore.collection('posts').doc(id).get();

            if(!response.exists) {
                throw Error('That post doesnt exist!');
            }
            post.value = {...response.data(), id: response.id};
            // await new Promise(resolve => {
            //     setTimeout(resolve, 2000)
            // })

            // let data = await fetch('http://localhost:3000/posts/' + id);
            // if (!data.ok) {
            //     throw Error('Posts doesnt exist');
            // }
            // post.value = await data.json()
        } catch (err) {
            error.value = err.message;
            console.log(error.value)
        }
    }
    return {post, error, load}
}

export default getPost
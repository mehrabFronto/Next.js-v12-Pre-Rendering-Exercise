import axios from "axios";

const Post = ({ post }) => {
   return (
      <div>
         <h1>Post-{post.id} body:</h1>
         <p>{post.body}</p>
      </div>
   );
};

export default Post;

export async function getStaticPaths() {
   const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`,
   );

   const paths = data.map((p) => {
      return {
         params: { postId: `${p.id}` },
      };
   });

   return {
      paths,
      fallback: false,
   };
}

export async function getStaticProps(context) {
   const { params } = context;
   const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
   );

   return {
      props: {
         post: data,
      },
   };
}

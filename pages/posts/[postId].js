import axios from "axios";
import { useRouter } from "next/router";

const Post = ({ post }) => {
   const { isFallback } = useRouter();

   if (isFallback) return <div>loading...</div>;

   return (
      <div>
         <h1>Post-{post.id} body:</h1>
         <p>{post.body}</p>
      </div>
   );
};

export default Post;

export async function getStaticPaths() {
   // const { data } = await axios.get(
   //    `https://jsonplaceholder.typicode.com/posts`,
   // );

   // const paths = data.map((p) => {
   //    return {
   //       params: { postId: `${p.id}` },
   //    };
   // });

   return {
      paths: [
         { params: { postId: "1" } },
         { params: { postId: "2" } },
         { params: { postId: "3" } },
      ],
      // paths,
      fallback: true,
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

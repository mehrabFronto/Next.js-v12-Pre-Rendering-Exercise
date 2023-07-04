import axios from "axios";
import Link from "next/link";
import React from "react";

const PostsList = ({ postsList }) => {
   return (
      <div>
         <h1>Posts List</h1>
         <div>
            {postsList.map((p) => {
               return (
                  <div key={p.id}>
                     <Link href={`/posts/${p.id}`}>
                        <h2>{p.title}</h2>
                     </Link>
                     <hr />
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default PostsList;

export async function getStaticProps() {
   const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
   );

   return {
      props: {
         postsList: data,
      },
   };
}

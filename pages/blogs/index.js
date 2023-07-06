import axios from "axios";

const BlogsList = ({ blogsList }) => {
   return (
      <div>
         <h1>Blogs List</h1>
         <div>
            {blogsList.map((b) => {
               return (
                  <h2 key={b.id}>
                     title: {b.title} , category: {b.category}
                  </h2>
               );
            })}
         </div>
      </div>
   );
};

export default BlogsList;

export async function getServerSideProps(context) {
   const { data } = await axios.get("http://localhost:4000/blogs");
   return {
      props: {
         blogsList: data,
      },
   };
}

import axios from "axios";

const Category = ({ blogsList, category }) => {
   return (
      <div>
         <h1>Blogs for category {category}</h1>
         <div>
            {blogsList.map((b) => {
               return (
                  <div key={b.id}>
                     <h2>{b.title}</h2>
                     <p>{b.description}</p>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Category;

export async function getServerSideProps(context) {
   const { params } = context;

   const { data } = await axios.get(
      `http://localhost:4000/blogs?category=${params.category}`,
   );

   return {
      props: {
         blogsList: data,
         category: params.category,
      },
   };
}

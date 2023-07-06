import axios from "axios";

const ProductsList = ({ productsList }) => {
   return (
      <div>
         <h1>Products List</h1>
         <div>
            {productsList.map((p) => {
               return (
                  <div key={p.id}>
                     <h2>
                        Name: {p.name} , Price: {p.price}$
                     </h2>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default ProductsList;

export async function getStaticProps() {
   const { data } = await axios.get("http://localhost:4000/products");
   return {
      props: {
         productsList: data,
      },
      revalidate: 10,
   };
}

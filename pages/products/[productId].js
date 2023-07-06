import axios from "axios";
import { useRouter } from "next/router";
``;
const Product = ({ product }) => {
   const { isFallback } = useRouter();

   if (isFallback) return <div>loading...</div>;

   return (
      <div>
         <h1>Product {product.id}</h1>
         <p>
            discount: {product.discount}, off price: {product.offPrice}
         </p>
      </div>
   );
};

export default Product;

export async function getStaticPaths() {
   return {
      paths: [{ params: { productId: "1" } }],
      fallback: true,
   };
}

export async function getStaticProps(context) {
   const { params } = context;
   const { data } = await axios.get(
      `http://localhost:4000/products/${params.productId}`,
   );

   return {
      props: {
         product: data,
      },
   };
}

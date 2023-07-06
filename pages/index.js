import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
   return (
      <div>
         <h1>Hello pre-rendering</h1>
         <Link href="/users">Go to users list page?</Link>
         <br />
         <Link href="/posts">Go to posts list page?</Link>
         <br />
         <Link href="/products">Go to products list page?</Link>
         <br />
         <Link href="/blogs">Go to blogs list page?</Link>
      </div>
   );
}

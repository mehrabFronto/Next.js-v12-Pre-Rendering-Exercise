import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
   return (
      <div>
         <h1>Hello pre-rendering</h1>
         <Link href="/users">Go to users list page?</Link>
      </div>
   );
}

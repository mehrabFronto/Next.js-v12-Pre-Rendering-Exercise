import User from "@/components/User/User";
import axios from "axios";

const UsersList = ({ usersList }) => {
   return (
      <div>
         <h1>UsersList</h1>
         <div>
            {usersList.map((u) => {
               return (
                  <User
                     key={u.id}
                     user={u}
                  />
               );
            })}
         </div>
      </div>
   );
};

export default UsersList;

export async function getStaticProps() {
   const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
   );
   return {
      props: {
         usersList: data,
      },
   };
}

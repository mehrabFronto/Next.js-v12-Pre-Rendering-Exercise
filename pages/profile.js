import axios from "axios";
import useSWR from "swr";

const fetcher = async (api) => {
   const { data } = await axios.get(api);
   return data;
};

const Profile = () => {
   const { data, error } = useSWR("getUserData", () =>
      fetcher("http://localhost:4000/profile"),
   );

   if (error) return <div>error: {error}</div>;

   if (!data) return <div>loading...</div>;

   return (
      <div>
         <h1>User data:</h1>
         <p>
            name: {data.name} email: {data.email}
         </p>
      </div>
   );
};

export default Profile;

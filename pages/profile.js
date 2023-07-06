import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
   const [loading, setLoading] = useState(true);
   const [userData, setUserData] = useState({});
   const [error, setError] = useState("");

   useEffect(() => {
      axios
         .get("http://localhost:4000/profile")
         .then(({ data }) => {
            setLoading(false);
            setUserData(data);
         })
         .catch(({ message }) => {
            setLoading(false);
            setUserData({});
            setError(message);
         });
   }, []);

   if (loading) return <div>loading...</div>;

   if (error) return <div>error: {error}</div>;

   return (
      <div>
         <h1>User data:</h1>
         <p>
            name: {userData.name} email: {userData.email}
         </p>
      </div>
   );
};

export default Profile;

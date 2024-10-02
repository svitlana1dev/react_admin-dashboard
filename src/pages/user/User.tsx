import { useState, useEffect } from "react";
import env from "react-dotenv";
import axios from "axios";
import Single from "../../components/single/Single";

const User = () => {
  const [user, setUser] = useState<any>(null);
  console.log(env);
  useEffect(() => {
    axios
      // .get(`${env.REACT_API_URL}/users/1`)
      .get(
        "https://react-admin-dashboard-3jgsp45fo-svitlana1devs-projects.vercel.app/users/1"
      )
      .then(function (response) {
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <div className="user">{user && <Single {...user} />}</div>;
};

export default User;

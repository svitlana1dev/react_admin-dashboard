import { useState, useEffect } from "react";
import axios from "axios";
import Single from "../../components/single/Single";

const User = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    axios
      .get("/users/1")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div className="user">{user && <Single {...user} />}</div>;
};

export default User;

import { useState, useEffect } from "react";
import axios from "axios";
import "./topBox.scss";
import { User } from "../../types/types";

const TopBox = () => {
  const [topDealUsers, setTopDealUsers] = useState([]);
  useEffect(() => {
    axios
      .get("/users")
      .then((response) => {
        setTopDealUsers(
          response.data.filter(
            (data: { amount: string | number }) => +data.amount > 3
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="top-box">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user: User) => (
          <div className="list-item" key={user.id}>
            <div className="user">
              <img src={user.img} alt="user" />
              <div className="user-texts">
                <span className="username">
                  {user.firstname + " " + user.lastname}
                </span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;

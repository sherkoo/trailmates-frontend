import React from "react";
import Header from "../../Components/Header";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.user.userData);

  return (
    <div>
      <Header />
      <h2>Dashboard</h2>
      <h2>Welcome</h2>
      <ul>
        <li>{user.name}</li>
        <li>{user.email}</li>
        <li>{user.age}</li>
      </ul>
    </div>
  );
};

export default Dashboard;

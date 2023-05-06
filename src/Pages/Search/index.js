import React from "react";
import Header from "../../Components/Header";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.user.userData);

  return (
    <div>
      <h2>Search</h2>
      <p>search page</p>
    </div>
  );
};

export default Dashboard;

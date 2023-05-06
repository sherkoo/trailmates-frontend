import React from "react";
import Header from "../../Components/Header";
import Navigation from "../../Components/Navigation";
import { useSelector } from "react-redux";

const Dashboard = ({children}) => {
  const user = useSelector((state) => state.user.userData);

  return (
    <div>
      <Header />
      <Navigation />
      <div>{children}</div>
    </div>
  );
};

export default Dashboard;

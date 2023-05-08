import React from "react";
import Header from "../../Components/Header";
import Navigation from "../../Components/Navigation";

const Dashboard = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
        <Navigation />
      </div>
      <div>{children}</div>
    </div>
  );
};

Dashboard.defaultProps = {
  children: "insert page here...",
};

export default Dashboard;

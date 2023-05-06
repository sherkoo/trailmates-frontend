import React from "react";
import Header from "../../Components/Header";
import { useSelector } from "react-redux";
import PageHeader from "../../Components/PageHeader";

const Dashboard = () => {
  const user = useSelector((state) => state.user.userData);

  return (
    <div>
      <PageHeader title="Search" />
      <p>search page</p>
    </div>
  );
};

export default Dashboard;

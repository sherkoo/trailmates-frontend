import React from "react";
import { useSelector } from "react-redux";
import PageHeader from "../../Components/PageHeader";

const Settings = () => {
  const user = useSelector((state) => state.user.userData);

  return (
    <div>
      <PageHeader title="Settings" />
      <h3>{user.email}</h3>
      <h3>{user.name}</h3>
      <h3>{user.age}</h3>
    </div>
  );
};

export default Settings;

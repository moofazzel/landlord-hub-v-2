import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const Profile = () => {
  return (
    <>
      <h2>Your profile</h2>
      <p>Some information about you</p>
    </>
  );
};

Profile.layout = DashboardLayout; // specify the layout to use for this page

export default Profile;

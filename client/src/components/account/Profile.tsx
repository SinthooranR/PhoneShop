import React from "react";

const Profile = ({ account }: any) => {
  const total =
    Math.round((Number(account?.balance) + Number.EPSILON) * 100) / 100;
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Full Name: {account?.name}</h2>
      <h3>Email: {account?.email}</h3>
      <h3>Balance: ${total}</h3>
    </div>
  );
};

export default Profile;

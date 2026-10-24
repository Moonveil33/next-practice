import React from "react";

const UserDeatils = async ({ params }) => {
  const { id } = await params;

  return <div>UserDeatils page {id}</div>;
};

export default UserDeatils;

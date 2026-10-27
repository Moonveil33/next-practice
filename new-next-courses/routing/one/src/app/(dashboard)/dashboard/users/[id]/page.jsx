import { notFound } from "next/navigation";
import React from "react";

const UserDeatils = async ({ params }) => {
  const { id } = await params;
  const userIds = [10, 11, 12, 13, 14];
  if (!userIds.includes(+id)) {
    notFound();
  }

  return <div>UserDeatils page {id}</div>;
};

export default UserDeatils;

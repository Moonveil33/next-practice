import React from "react";
import { useRouter } from "next/router";

const Courses = () => {
  const router = useRouter();

  return <h1>User: (ID: {router.query.userId})</h1>;
};

export default Courses;

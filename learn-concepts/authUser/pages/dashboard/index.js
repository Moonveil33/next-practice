import { verifyPassword, verifyToken } from "@/utils/auth";
import React from "react";

function Dashboard() {
  return (
    <>
      <h1>Amin - Saeedi - Welcome To Dashboard</h1>
    </>
  );
}

export async function getServerSideProps(context) {
  const { token } = context.req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/signin",
      },
    };
  }

  const isValidToken = verifyToken(token);
  if (!isValidToken) {
    return {
      redirect: {
        destination: "/signin",
      },
    };
  }

  return {
    props: {},
  };
}

export default Dashboard;

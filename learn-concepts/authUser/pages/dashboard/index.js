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

  const tokenPayload = verifyToken(token);
  if (!tokenPayload) {
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

import { verifyPassword, verifyToken } from "@/utils/auth";

import UserModel from "@/models/User";

import React from "react";
import connectToDB from "@/configs/db";

function Dashboard({ user }) {
  return (
    <>
      <h1>
        {user.firstname} {user.lastname} - Welcome To Dashboard
      </h1>
    </>
  );
}

export async function getServerSideProps(context) {
  const { token } = context.req.cookies;
  connectToDB();

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

  const user = await UserModel.findOne(
    {
      email: tokenPayload.email,
    },
    "-_id firstname lastname",
  );

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}

export default Dashboard;

import Link from "next/link";
import React from "react";

const Forbidden = () => {
  return (
    <div>
      <h2>Forbidden</h2>
      <p>You are not Authorized to access this resource.</p>
      <Link href={"/"}>Return Home</Link>
    </div>
  );
};

export default Forbidden;

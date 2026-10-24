import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
  const { slug } = await params;

  console.log(slug);

  return slug.map((item, index) => {
    const href = `/docs/${slug.slice(0, index + 1).join("/")}`;
    return (
      <Link key={index} href={href}>
        {item}/
      </Link>
    );
  });
};

export default page;

import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
  const { slug } = await params;

  console.log(slug);

  if (slug?.length) {
    return slug.map((item, index) => {
      const href = `/docs/${slug.slice(0, index + 1).join("/")}`;
      return (
        <Link key={index} href={href}>
          {item}/
        </Link>
      );
    });
  } else {
    return <h1>Docs Home Page</h1>;
  }
};

export default page;

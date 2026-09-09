import { useRouter } from "next/router";
import React from "react";

const SingleArticle = () => {
  const route = useRouter();
  const slug = route.query.slug || [];
  console.log(slug);

  if (slug.length > 2) {
    return (
      <h1>
        you see {slug[0]} Article that published {slug[1]}/{slug[2]}/{slug[3]} -{" "}
        {slug[4]}
      </h1>
    );
  }

  return <h1>SingleArticle</h1>;
};

export default SingleArticle;

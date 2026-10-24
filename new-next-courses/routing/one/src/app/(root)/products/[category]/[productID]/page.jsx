import React from "react";

const page = async ({ params }) => {
  const { category, productID } = await params;

  return (
    <div>
      {category} - {productID}
    </div>
  );
};

export default page;

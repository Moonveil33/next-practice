import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: yellow;
`;
const Button = styled.button`
  padding: 20px;
  width: 100px;
`;

const SingleCourse = () => {
  const router = useRouter();
  const backHandler = () => {
    router.back();
  };
  return (
    <div>
      <Title>SingleCourse: {router.query.shortName}</Title>
      <hr />
      <Button onClick={backHandler}>Back</Button>
    </div>
  );
};

export default SingleCourse;

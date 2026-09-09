import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home = () => {
  const router = useRouter();

  const redirectHandler = () => {
    router.push({
      pathname: "/courses/[shortName]",
      query: { shortName: "react" },
    });
    // router.replace("/courses/react");
  };
  return (
    <>
      <h1 className={styles.title}>Home Page</h1>
      <hr />
      <ul>
        <li>
          <Link
            className="font-black text-green-50 decoration-indigo-800"
            href="/courses"
          >
            Courses
          </Link>
        </li>
        <li>
          <button onClick={redirectHandler}>Go TO Coustom Page Redirect</button>
        </li>
      </ul>
    </>
  );
};

export default Home;

import Link from "next/link";
import React from "react";

const Courses = () => {
  const courses = [
    { id: 1, title: "React", shortName: "react" },
    { id: 2, title: "Nodejs", shortName: "node" },
    { id: 3, title: "Next-Js", shortName: "next-js" },
  ];
  return (
    <>
      <h1>All Courses Page</h1>
      <hr />
      <ul>
        {courses.map((course) => (
          <li className="alert alert-success list-style-none">
            <Link
              href={{
                pathname: "/courses/[shortName]",
                query: {
                  shortName: course.shortName,
                },
              }}
            >
              {course.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Courses;

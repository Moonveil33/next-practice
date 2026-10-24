import Link from "next/link";
import React from "react";

const Users = () => {
  const users = [
    { id: 10, name: "erfan", age: 30 },
    { id: 11, name: "alireza", age: 28 },
    { id: 12, name: "sara", age: 18 },
    { id: 13, name: "shayan", age: 29 },
    { id: 14, name: "shahin", age: 22 },
  ];

  return (
    <>
      <div>Users Page</div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/dashboard/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;

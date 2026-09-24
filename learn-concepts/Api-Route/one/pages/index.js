import { useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
    // console.log(data);
  };

  return (
    <>
      <button onClick={fetchUsers}>Load Users</button>
      <h3>Users:</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </>
  );
}

export default Home;

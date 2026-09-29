import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    if (!username.trim() || !email.trim() || !password.trim()) {
      return alert("Data Is Not valid");
    }

    const newUser = {
      username,
      email,
      password,
    };

    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    const data = await res.json();

    if (res.status === 201) {
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="login-wrap">
      <h2>Login</h2>

      <div className="form">
        <input
          type="text"
          placeholder="Username"
          name="un"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          name="un"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="pw"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={registerHandler}> Register </button>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

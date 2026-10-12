import React, { useState } from "react";

function Index() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");

  const [password, setPassword] = useState("");

  const signIn = async (event) => {
    event.preventDefault();
    const user = { identifier, password };

    const res = await fetch("/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (res.status === 200) {
      (setIdentifier(""), setPassword(""));
      alert("logged in successfully");

      router.replace("/dashboard");
    } else if (res.status === 404) {
      alert("User Not Found");
    } else if (res.status === 422) {
      alert("Username or Password is not Correct");
    } else if (res.status === 500) {
      alert("server Internal Error . Try again Later");
    }
  };

  return (
    <div className="box">
      <h1 align="center">Login Form</h1>
      <form role="form" method="post">
        <div className="inputBox">
          <input
            type="text"
            value={identifier}
            onChange={(event) => setIdentifier(event.target.value)}
            autoComplete="off"
            required
          />
          <label>Username | Email</label>
        </div>
        <div className="inputBox">
          <input
            type="password"
            value={password}
            onChange={(event) => setIdentifier(event.target.value)}
            autoComplete="off"
            required
          />
          <label>Password</label>
        </div>

        <input
          type="submit"
          className="register-btn"
          value="Sign In"
          onClick={signIn}
        />
      </form>
    </div>
  );
}

export default Index;

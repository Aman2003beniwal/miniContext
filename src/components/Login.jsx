import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div>
      <h2>Login </h2>
      <input
        type="text"
        placeholder="Enter UserName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />{" "}
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <hr />
    </div>
  );
}
export default Login;

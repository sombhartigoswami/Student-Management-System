import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "Guest" && password === "Guest@123456789") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/users");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Students System Login</h2>
      <p>
        Demo Login: <b>Guest/Guest@123456789</b>
      </p>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" style={{ background: "grey" }}>
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;

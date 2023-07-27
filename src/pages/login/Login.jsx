import { Link } from "react-router-dom";
import "./login.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom/dist";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();

    if (username === "Ali" && password === "1234") {
      navigate("/");
      login();
    } else {
      alert("The username or password you entered is incorrect.");
      navigate("/login");
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            libero tempore quibusdam magnam sit omnis accusamus quia explicabo
            optio non.
          </p>
          <span>Don't you have an account?</span>

          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              onChange={e => {
                setUsername(e.target.value);
              }}
              type="text"
              placeholder="Username"
            />
            <input
              onChange={e => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Password"
            />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

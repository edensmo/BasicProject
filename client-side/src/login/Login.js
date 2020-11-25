import { useCallback, useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link, Router, BrowserRouter, Route } from "react-router-dom";
import SignUp from "./SignUp";

const myServerBaseURL = "http://localhost:3000";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [Ismember, setIsMember] = useState(false);

  const nameChange = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const passwordChange = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  const emailChange = useCallback((event) => {
    setEmail(event.target.value);
  }, []);

  const login = async (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    await axios
      .post(`${myServerBaseURL}/member/login`, data)
      .then((result) => {
        console.log("result", result);
        localStorage.setItem(
          "login",
          JSON.stringify({
            login: true,
            token: result.data.token,
          })
        );
        setIsMember(true);
      })
      .catch((err) => {
        console.log(err);
      });

    setPassword("");
    setEmail("");
  };

  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={emailChange}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={passwordChange}
        />
        <button type="submit" onClick={login}>
          Log in
        </button>

        <Link className="btn-sign-in" to="/SignUp">
          not sign?
        </Link>
      </form>
    </div>
  );
};

export default Login;

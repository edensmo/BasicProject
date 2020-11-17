import { useCallback, useState } from "react";
import "./Login.css";
import axios from "axios";

const myServerBaseURL = "http://localhost:3000";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("123");
  const [email, setEmail] = useState("123");
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
    try {
      event.preventDefault();

      const response = await axios.get(
        `${myServerBaseURL}/member/findMember/${email}/${password}`
      );

      if (response.data == 1) {
        setIsMember(true);
      } else {
        setIsMember(false);
        alert(response.data);
      }
      console.log("IsMember", Ismember);
    } catch (error) {
      // if (error.response.data === 0) {
      //   alert("the password not true");
      // } else {
      alert(error.response.status);

      // }
    }

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
        <button className="btn-i" type="submit" onClick={login}>
          Log in
        </button>
        <p className="btn-sign-in" onClick={login}>
          not sign?
        </p>
      </form>
    </div>
  );
};

export default Login;

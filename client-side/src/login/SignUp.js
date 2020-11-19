import { useCallback, useState } from "react";
import "./Login.css";
import axios from "axios";

const myServerBaseURL = "http://localhost:3000";

const SignUp = () => {
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

  const signUp = async (event) => {
    event.preventDefault();

    const data = {
      name: name,
      email: email,
      password: password,
    };

    await axios
      .post(`${myServerBaseURL}`, data)
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
    setName("");
    setPassword("");
    setEmail("");
  };

  return (
    <div>
      <form>
        <input
          type="name"
          placeholder="full name"
          value={name}
          onChange={nameChange}
        />
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
        <button className="btn-i" type="submit" onClick={signUp}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default SignUp;

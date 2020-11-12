import { useCallback, useState } from "react";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const nameChange = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const passwordChange = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  const logIn = useCallback(
    (event) => {
      event.preventDefault();

      setName("");
      setPassword("");
    },
    [name, password]
  );

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={nameChange}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={passwordChange}
        />
        <button className="btn-logIn" type="submit" onClick={logIn}>
          Log in
        </button>
        <p className="btn-sign-in" onClick={logIn}>
          not sign?
        </p>
      </form>
    </div>
  );
};

export default Login;

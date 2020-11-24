import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Login from "./login/Login";
import SignUp from "./login/SignUp";
import Board from "./board/Board";
import ToDo from "./board/ToDo";
import Task from "./board/Task";
import Member from "./board/Member";
import Members from "./board/Members";

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">App</Link>
        </li>
        <li>
          <Link to="/SignUp">SignUp</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/board/Board" component={Board} />
      <Route path="/board/ToDo" component={ToDo} />
      <Route path="/board/Task" component={Task} />
      <Route path="/board/Member" component={Member} />
      <Route path="/board/Members" component={Members} />
    </div>
  </Router>
);
// document.getElementById("root");
ReactDOM.render(routing, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

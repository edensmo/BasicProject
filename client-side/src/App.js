import "./App.css";
import axios from "axios";
import React, { useState, useCallback, useEffect } from "react";
import CatManager from "./CatManager";
import Login from "./login/Login";
import SignUp from "./login/SignUp";
import { BrowserRouter, Route } from "react-router-dom";

const myCatServerBaseURL = "http://localhost:3000";

const App = () => {
  //This state will be populated with the Axios HTTP response
  const [cats, setCats] = useState([]);

  const loadCats = useCallback(async () => {
    const response = await axios.get(`${myCatServerBaseURL}/cats`);
    const cats = response.data;
    // console.log(cats);
    setCats(cats);
  }, []);

  //The cat are loaded initially
  useEffect(() => {
    loadCats();
  }, [loadCats]);

  const onCreateNewCat = useCallback(
    async (newCat) => {
      try {
        await axios.post(`${myCatServerBaseURL}/cats`, {
          name: newCat.name,
          age: newCat.age,
          breed: newCat.breed,
        });
        loadCats();
      } catch (error) {
        /**
         * If the response status code is 409 - Conflict, then we already have
         * a cat with this name.
         **/
        if (error.response.status === 409) {
          alert("Cat with same name exists!");
        } else {
          alert("Unknown error.");
        }
      }
    },
    [loadCats]
  );

  return (
    <div className="u-centered-content u-full-vw u-full-vh">
      {/* <CatManager cats={cats} onCreateNewCat={onCreateNewCat} /> */}
      {/* <Login /> */}
      <h1>Welcom</h1>
    </div>
  );
};

export default App;

import React, { useCallback, useState } from "react";
import "./CatManager.css";
import Cat from "./Cat";

export default ({ cats = [], onCreateNewCat }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");

  const onNewCatNameChange = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const onNewCatAgeChange = useCallback((event) => {
    setAge(event.target.value);
  }, []);

  const onNewCatbreedChange = useCallback((event) => {
    setBreed(event.target.value);
  }, []);

  const onAddCat = useCallback(
    (event) => {
      event.preventDefault();
      onCreateNewCat({ name: name, age: age, breed: breed });
      setName("");
      setAge("");
      setBreed("");
    },
    [onCreateNewCat, name, age, breed]
  );

  return (
    <div className="container">
      <section className="cat-create-form">
        <form>
          <input
            type="text"
            placeholder="Cat name..."
            value={name}
            onChange={onNewCatNameChange}
          />
          <input
            type="text"
            placeholder="Cat age..."
            value={age}
            onChange={onNewCatAgeChange}
          />
          <input
            type="text"
            placeholder="Cat breed..."
            value={breed}
            onChange={onNewCatbreedChange}
          />
          <button type="submit" onClick={onAddCat}>
            Create
          </button>
        </form>
      </section>
      <div className="divider" />
      <section className="cat-list-section">
        <p className="my-cat">My cat:</p>
        <ul>
          {cats.map((cat) => (
            <Cat cat={cat} key={cat.name} />

            // <li key={cat.name}>
            //   {cat.name}
            //   <div>age: {cat.age}</div>
            //   <div>breed: {cat.breed}</div>
            // </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

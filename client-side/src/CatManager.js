import React, { useCallback, useState } from "react";
import "./CatManager.css";

export default ({ cats = [], onCreateNewCat }) => {
  const [newCatName, setNewCatName] = useState("");

  const onNewCatNameChange = useCallback((event) => {
    setNewCatName(event.target.value);
  }, []);

  const onAddCat = useCallback(
    (event) => {
      event.preventDefault();
      onCreateNewCat(newCatName);
      setNewCatName("");
    },
    [onCreateNewCat, newCatName]
  );

  return (
    <div className="container">
      <section className="cat-create-form">
        <form>
          <input
            type="text"
            placeholder="Cat name..."
            value={newCatName}
            onChange={onNewCatNameChange}
          />
          <button type="submit" onClick={onAddCat}>
            Create
          </button>
        </form>
      </section>
      <div className="divider" />
      <section className="cat-list-section">
        <p>My cat:</p>
        <ul>
          {cats.map((cat) => (
            <li key={cat.name}>
              {cat.name}
              <div>age: {cat.age}</div>
              <div>breed: {cat.breed}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

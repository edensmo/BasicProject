import "./Cat.css";

const Cat = ({ cat = [] }) => {
  return (
    <div className="container cat-box">
      <div className="name-cat">{cat.name}</div>
      <div className="row">
        <div className="col">Age: {cat.age}</div>
        <div className="col">Breed: {cat.breed}</div>
      </div>
    </div>
  );
};

export default Cat;

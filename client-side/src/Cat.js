import "./Cat.css";

const Cat = ({ cat = [] }) => {
  return (
    <div className="cat-box">
      <div className="name-cat">{cat.name}</div>
      <div>
        <div>Age: {cat.age}</div>
        <div>Breed: {cat.breed}</div>
      </div>
    </div>
  );
};

export default Cat;

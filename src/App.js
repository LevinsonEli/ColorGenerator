import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const baseColor = "#a173c5";
  const [color, setColor] = useState(baseColor);
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values(baseColor).all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (err) {
      setError(true);
      console.log(err.message);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder={baseColor}
            className={`${error ? "error" : ""}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor key={index} hex={color.hex} {...color} index={index} />
          );
        })}
      </section>
    </>
  );
}

export default App;

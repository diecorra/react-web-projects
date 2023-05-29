import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Values from 'values.js';
import SingleColor from './SingleColor';

const ColorGrading = () => {
  const [selectedColor, setselectedColor] = useState([]);
  const [isError, setIsError] = useState(false);
  const [colorInput, setColorInput] = useState({
    color: '',
    qty: 5,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsError(false);
    if (colorInput.color && colorInput.qty) {
      const { color, qty } = colorInput;
      try {
        setselectedColor(
          new Values(color).all(Math.round(100 / parseInt(qty, 10)) * 2)
        );
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setColorInput({
      ...colorInput,
      [name]: value,
    });
  };

  useEffect(() => {
    setColorInput({ qty: 10, color: '#919901' });
    setselectedColor(new Values('#919901').all(Math.round(100 / 10) * 2));
  }, []);

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="color"
            id="color"
            value={colorInput.color}
            maxLength={7}
            onChange={handleChange}
            className="input"
          ></input>
          <input
            type="number"
            name="qty"
            id="qty"
            value={colorInput.qty}
            max={100}
            min={5}
            step={5}
            onChange={handleChange}
            className="input"
          ></input>
        </div>
        <button className="btn btn-selector" type="submit">
          Create
        </button>
      </form>
      <section className="color-section">
        {isError ? (
          <h4 className="section-center">No Color Found!</h4>
        ) : selectedColor.length > 0 ? (
          selectedColor.map((el) => <SingleColor key={uuidv4()} {...el} />)
        ) : (
          <h4>Loading...</h4>
        )}
      </section>
    </>
  );
};

export default ColorGrading;
